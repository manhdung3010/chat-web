import { useAuthStore } from "@/stores";

/**
 * Client-side auth check utility
 * Use this only when you need to check auth in components
 * For route protection, use middleware instead
 */
export const checkAuth = () => {
  const state = useAuthStore.getState();
  return {
    isAuthenticated: state.isAuthenticated,
    user: state.user,
    tokens: state.tokens,
  };
};

/**
 * Get auth token for API calls
 */
export const getAuthToken = (): string | null => {
  const state = useAuthStore.getState();
  return state.tokens?.accessToken || null;
};

/**
 * Check if user has specific role
 */
export const hasRole = (role: string): boolean => {
  const state = useAuthStore.getState();
  return state.user?.role === role;
};

/**
 * Check if user is admin
 */
export const isAdmin = (): boolean => {
  return hasRole("ADMIN");
};

/**
 * Check if user is moderator
 */
export const isModerator = (): boolean => {
  return hasRole("MODERATOR") || hasRole("ADMIN");
};
