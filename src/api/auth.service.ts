import axiosClient from ".";

export interface AuthApiResponse<T = any> {
  success: boolean;
  code: number;
  message: string;
  timestamp: string;
  data: T;
}

export interface LoginRequest {
  usernameOrEmail: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  avatar?: string;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface AuthUser {
  id: string;
  username: string;
  email: string;
  avatar: string;
  role: "USER" | "ADMIN" | "MODERATOR";
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  user: AuthUser;
}

export function login(
  payload: LoginRequest
): Promise<{ data: AuthApiResponse<LoginResponse> }> {
  return axiosClient.post("auth/login", payload);
}

export function register(
  payload: RegisterRequest
): Promise<{ data: AuthApiResponse<any> }> {
  return axiosClient.post("auth/register", payload);
}

export function refresh(
  payload: RefreshTokenRequest
): Promise<{ data: AuthApiResponse<LoginResponse> }> {
  return axiosClient.post("auth/refresh", payload);
}
