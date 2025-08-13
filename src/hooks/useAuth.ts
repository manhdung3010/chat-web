import {
  useAuthStore,
  useAuthUser,
  useAuthTokens,
  useIsAuthenticated,
  useAuthLoading,
} from "@/stores";
import { useRouter } from "next/navigation";
import { useToast } from "./useToast";
import { useEffect } from "react";

export const useAuth = () => {
  const store = useAuthStore();
  const user = useAuthUser();
  const tokens = useAuthTokens();
  const isAuthenticated = useIsAuthenticated();
  const isLoading = useAuthLoading();
  const router = useRouter();
  const toast = useToast();

  const logout = () => {
    store.logout();
    // Clear localStorage for backward compatibility
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");

    toast.success("Đăng xuất thành công!");
    router.push("/");
  };

  // Check for redirect parameter from middleware
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const redirect = urlParams.get("redirect");

      if (redirect && isAuthenticated) {
        // Remove redirect parameter and navigate
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.delete("redirect");
        router.replace(newUrl.pathname + newUrl.search);
        router.push(redirect);
      }
    }
  }, [isAuthenticated, router]);

  const requireAuth = (redirectTo = "/auth/login") => {
    if (!isAuthenticated) {
      toast.error("Vui lòng đăng nhập để tiếp tục");
      router.push(redirectTo);
      return false;
    }
    return true;
  };

  return {
    // State
    user,
    tokens,
    isAuthenticated,
    isLoading,

    // Actions
    login: store.login,
    logout,
    setLoading: store.setLoading,
    updateUser: store.updateUser,
    refreshTokens: store.refreshTokens,

    // Utilities
    requireAuth,
  };
};
