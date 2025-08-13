// src/lib/axiosClient.ts
import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";
import { toast } from "sonner";

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
   Axios Instance
============================== */
const axiosClient: AxiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:8081/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10s
});

/* ==============================
   Request Interceptor
============================== */
axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Try to get token from Zustand store first, fallback to localStorage
    let token: string | null = null;

    // Check if we're in a browser environment
    if (typeof window !== "undefined") {
      // Get token from cookies (same as middleware) or localStorage fallback
      const cookies = document.cookie.split(";").reduce((acc, cookie) => {
        const [key, value] = cookie.trim().split("=");
        acc[key] = value;
        return acc;
      }, {} as Record<string, string>);

      token = cookies["auth-token"] || localStorage.getItem("accessToken");
    }

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
axiosClient.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => response,
  (error: AxiosError<ApiError>) => {
    const status = error.response?.status;
    const errorMessage = error.response?.data?.message || "Đã xảy ra lỗi";
    const errors = error.response?.data?.errors;

    if (status) {
      switch (status) {
        case 401:
          // TODO: handle unauthorized
          break;
        case 403:
          // TODO: handle forbidden
          break;
        case 404:
          // TODO: handle not found
          break;
        case 422:
          if (errors) {
            Object.values(errors)
              .flat()
              .forEach((err) => toast.error(err));
          } else {
            toast.error(errorMessage);
          }
          break;
        case 500:
          toast.error("Lỗi server. Vui lòng thử lại sau.");
          break;
        default:
          toast.error(errorMessage);
      }
    } else if (error.code === "ECONNABORTED") {
      toast.error("Yêu cầu bị timeout. Vui lòng thử lại.");
    } else if (!error.response) {
      toast.error("Không thể kết nối đến server. Vui lòng kiểm tra mạng.");
    } else {
      toast.error(errorMessage);
    }

    return Promise.reject(error);
  }
);

/* ==============================
   API Methods Wrapper
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
