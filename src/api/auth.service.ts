import axiosClient from ".";
import {
  LoginRequest,
  RegisterRequest,
  RefreshTokenRequest,
  AuthApiResponse,
  LoginResponse,
} from "../types";

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
