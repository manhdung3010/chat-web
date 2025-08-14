// src/lib/axiosClient.ts
import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";
import { toast } from "sonner";
import { useAuthStore } from "@/stores/auth.store";
import { refresh } from "./auth.service";

/* ==============================
   API Response Types
============================== */
export interface ApiPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface ApiResponse<T = any> {
  success: boolean;
  code: number;
  message: string;
  timestamp: string;
  data: T;
  pagination?: ApiPagination;
}

export interface ApiError {
  success: boolean;
  code: number;
  message: string;
  timestamp: string;
  errors?: Record<string, string[]>;
}

/* ==============================
   Constants
============================== */
const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:8081/api/v1";
const REQUEST_TIMEOUT = 10000; // 10 seconds
const AUTH_ENDPOINTS = /auth\/(login|register|refresh)$/;

/* ==============================
   Axios Instance
============================== */
const axiosClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: REQUEST_TIMEOUT,
});

/* ==============================
   Token Management
============================== */
let refreshPromise: Promise<string> | null = null;

const getTokenFromCookie = (): string | null => {
  if (typeof window === "undefined") return null;

  const cookies = document.cookie.split(";").reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split("=");
    if (key && value) acc[key] = value;
    return acc;
  }, {} as Record<string, string>);

  return cookies["auth-token"] || null;
};

const getStoredToken = (): string | null => {
  const storeToken = useAuthStore.getState().tokens?.accessToken;
  if (storeToken) return storeToken;

  if (typeof window !== "undefined") {
    return getTokenFromCookie() || localStorage.getItem("accessToken");
  }

  return null;
};

const getRefreshToken = (): string | null => {
  const storeRefreshToken = useAuthStore.getState().tokens?.refreshToken;
  if (storeRefreshToken) return storeRefreshToken;

  if (typeof window !== "undefined") {
    return localStorage.getItem("refreshToken");
  }

  return null;
};

const refreshAccessToken = async (): Promise<string> => {
  if (!refreshPromise) {
    refreshPromise = (async () => {
      const currentRefreshToken = getRefreshToken();

      if (!currentRefreshToken) {
        throw new Error("No refresh token available");
      }

      const response = await refresh({ refreshToken: currentRefreshToken });
      const { accessToken, refreshToken, tokenType } = response.data.data;

      const newTokens = { accessToken, refreshToken, tokenType };
      useAuthStore.getState().refreshTokens(newTokens);

      return accessToken;
    })()
      .catch((error) => {
        useAuthStore.getState().logout();
        throw error;
      })
      .finally(() => {
        refreshPromise = null;
      });
  }

  return refreshPromise;
};

/* ==============================
   Request Interceptor
============================== */
axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getStoredToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/* ==============================
   Response Interceptor
============================== */
const handleErrorToast = (
  status: number,
  message: string,
  errors?: Record<string, string[]>
) => {
  switch (status) {
    case 422:
      if (errors) {
        Object.values(errors)
          .flat()
          .forEach((err) => toast.error(err));
      } else {
        toast.error(message);
      }
      break;
    case 500:
      toast.error("Server error. Please try again later.");
      break;
    case 403:
    case 404:
      // Silent for these status codes, handle in components if needed
      break;
    default:
      toast.error(message);
  }
};

axiosClient.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => response,
  async (error: AxiosError<ApiError>) => {
    const { response, config, code } = error;
    const status = response?.status;
    const errorMessage = response?.data?.message || "An error occurred";
    const errors = response?.data?.errors;

    const originalRequest = config as
      | (InternalAxiosRequestConfig & { _retry?: boolean })
      | undefined;

    // Handle token refresh for 401 errors (except auth endpoints)
    if (
      status === 401 &&
      originalRequest &&
      !originalRequest._retry &&
      !AUTH_ENDPOINTS.test(originalRequest.url || "")
    ) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshAccessToken();

        // Update request headers and retry
        originalRequest.headers.set(
          "Authorization",
          `Bearer ${newAccessToken}`
        );

        return axiosClient(originalRequest);
      } catch (refreshError) {
        // Refresh failed, continue with normal error handling
      }
    }

    // Handle error notifications
    if (status) {
      handleErrorToast(status, errorMessage, errors);
    } else if (code === "ECONNABORTED") {
      toast.error("Request timeout. Please try again.");
    } else if (!response) {
      toast.error("Network error. Please check your connection.");
    } else {
      toast.error(errorMessage);
    }

    return Promise.reject(error);
  }
);

/* ==============================
   API Methods
============================== */
export const api = {
  get: <T = any>(url: string, config?: any) =>
    axiosClient.get<ApiResponse<T>>(url, config),

  post: <T = any>(url: string, data?: any, config?: any) =>
    axiosClient.post<ApiResponse<T>>(url, data, config),

  put: <T = any>(url: string, data?: any, config?: any) =>
    axiosClient.put<ApiResponse<T>>(url, data, config),

  patch: <T = any>(url: string, data?: any, config?: any) =>
    axiosClient.patch<ApiResponse<T>>(url, data, config),

  delete: <T = any>(url: string, config?: any) =>
    axiosClient.delete<ApiResponse<T>>(url, config),
};

export default axiosClient;
