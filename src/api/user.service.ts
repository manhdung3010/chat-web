import axiosClient from ".";
import { ApiResponse } from ".";

export interface SearchUserParams {
  q?: string;
  page: number;
  limit: number;
}

export function getUser(params: SearchUserParams): Promise<ApiResponse<any>> {
  return axiosClient.get("users", { params });
}
