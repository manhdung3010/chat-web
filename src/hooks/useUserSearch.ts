import { useState, useCallback, useMemo } from "react";
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useToast } from "./useToast";
import { getUser } from "@/api/user.service";

interface UseUserSearchOptions {
  initialQuery?: string;
  initialFilter?: "all" | "online" | "recent";
  debounceMs?: number;
}

export function useUserSearch(options: UseUserSearchOptions = {}) {
  const {
    initialQuery = "",
    initialFilter = "all",
    debounceMs = 500,
  } = options;

  const [query, setQuery] = useState(initialQuery);
  const [filter, setFilter] = useState(initialFilter);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);
  const { showToast }: any = useToast();
  const queryClient = useQueryClient();

  // Debounce query changes
  const debouncedSetQuery = useCallback(
    debounce((newQuery: string) => {
      setDebouncedQuery(newQuery);
    }, debounceMs),
    [debounceMs]
  );

  // Update debounced query when query changes
  useMemo(() => {
    debouncedSetQuery(query);
  }, [query, debouncedSetQuery]);

  // Infinite query for user search
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
    error,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["users", "search", debouncedQuery, filter],
    queryFn: async ({ pageParam = 0 }) => {
      const searchParams = {
        q: debouncedQuery.trim() || undefined,
        page: pageParam + 1,
        limit: 20,
      };

      const response = await getUser(searchParams);
      return {
        users: response.data.data,
        pagination: response.data.pagination,
        nextPage: response.data.pagination.hasNext ? pageParam + 1 : undefined,
      };
    },
    getNextPageParam: (lastPage) => lastPage.nextPage,
    enabled: true, // Always enabled, but will only fetch when query changes
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
    retry: 1,
    refetchOnWindowFocus: false,
  });

  // Flatten all users from all pages
  const users = useMemo(() => {
    if (!data?.pages) return [];
    return data.pages.flatMap((page) => page.users);
  }, [data?.pages]);

  // Get pagination info from the last page
  const pagination = useMemo(() => {
    if (!data?.pages || data.pages.length === 0) {
      return { total: 0, hasNext: false };
    }
    return data.pages[data.pages.length - 1].pagination;
  }, [data?.pages]);

  // Add friend mutation
  const addFriendMutation = useMutation({
    mutationFn: async (userId: string) => {
      // await userService.sendFriendRequest(userId);
      return { userId };
    },
    onSuccess: (data) => {
      showToast("Đã gửi lời mời kết bạn!", "success");

      // Update user status in the cache
      queryClient.setQueryData(
        ["users", "search", debouncedQuery, filter],
        (oldData: any) => {
          if (!oldData?.pages) return oldData;

          return {
            ...oldData,
            pages: oldData.pages.map((page: any) => ({
              ...page,
              users: page.users.map((user: any) =>
                user.id === data.userId
                  ? { ...user, friendRequestSent: true }
                  : user
              ),
            })),
          };
        }
      );
    },
    onError: (error: any) => {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Có lỗi xảy ra khi gửi lời mời";
      showToast(errorMessage, "error");
    },
  });

  // Load more function
  const loadMore = useCallback(() => {
    if (!isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  // Clear search
  const clearSearch = useCallback(() => {
    setQuery("");
    setFilter("all");
    // Clear the query cache
    queryClient.removeQueries({ queryKey: ["users", "search"] });
  }, [queryClient]);

  // Add friend function
  const addFriend = useCallback(
    (userId: string) => {
      addFriendMutation.mutate(userId);
    },
    [addFriendMutation]
  );

  // Memoized filtered users (for additional client-side filtering if needed)
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      // Additional client-side filtering if needed
      return true;
    });
  }, [users]);

  // Handle query changes
  const handleQueryChange = useCallback((newQuery: string) => {
    setQuery(newQuery);
  }, []);

  // Handle filter changes
  const handleFilterChange = useCallback(
    (newFilter: "all" | "online" | "recent") => {
      setFilter(newFilter);
    },
    []
  );

  return {
    // State
    query,
    filter,
    users: filteredUsers,
    isLoading: isLoading || isFetching,
    isFetchingNextPage,
    error: error instanceof Error ? error.message : null,
    total: pagination.total,
    hasMore: pagination.hasNext,

    // Actions
    setQuery: handleQueryChange,
    setFilter: handleFilterChange,
    loadMore,
    clearSearch,
    addFriend,
    refetch,

    // Computed
    isEmpty: !isLoading && !isFetching && filteredUsers.length === 0,
    hasResults: filteredUsers.length > 0,
  };
}

// Debounce utility function
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
