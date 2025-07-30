import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { message } from "antd";

// API Response types
export interface ApiResponse<T = any> {
  data: T;
  message: string;
  success: boolean;
  status: number;
}

export interface ApiError {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}

// Create axios instance
const axiosClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds
});

// Request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosClient.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => {
    return response;
  },
  (error: AxiosError<ApiError>) => {
    const status = error.response?.status;
    const errorMessage = error.response?.data?.message || "Đã xảy ra lỗi";
    const errors = error.response?.data?.errors;

    // Handle different error types
    switch (status) {
      case 401:
        message.error("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");
        // Redirect to login page
        if (typeof window !== "undefined") {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }
        break;
      case 403:
        message.error("Bạn không có quyền truy cập vào tài nguyên này.");
        break;
      case 404:
        message.error("Không tìm thấy tài nguyên yêu cầu.");
        break;
      case 422:
        // Validation errors
        if (errors) {
          Object.values(errors).forEach((errorArray) => {
            errorArray.forEach((err) => message.error(err));
          });
        } else {
          message.error(errorMessage);
        }
        break;
      case 500:
        message.error("Lỗi server. Vui lòng thử lại sau.");
        break;
      default:
        if (error.code === "ECONNABORTED") {
          message.error("Yêu cầu bị timeout. Vui lòng thử lại.");
        } else if (!error.response) {
          message.error(
            "Không thể kết nối đến server. Vui lòng kiểm tra kết nối mạng."
          );
        } else {
          message.error(errorMessage);
        }
    }

    return Promise.reject(error);
  }
);

// API methods
export const api = {
  get: <T = any>(url: string, config?: any): Promise<ApiResponse<T>> =>
    axiosClient.get(url, config),

  post: <T = any>(
    url: string,
    data?: any,
    config?: any
  ): Promise<ApiResponse<T>> => axiosClient.post(url, data, config),

  put: <T = any>(
    url: string,
    data?: any,
    config?: any
  ): Promise<ApiResponse<T>> => axiosClient.put(url, data, config),

  patch: <T = any>(
    url: string,
    data?: any,
    config?: any
  ): Promise<ApiResponse<T>> => axiosClient.patch(url, data, config),

  delete: <T = any>(url: string, config?: any): Promise<ApiResponse<T>> =>
    axiosClient.delete(url, config),
};

export default axiosClient;
