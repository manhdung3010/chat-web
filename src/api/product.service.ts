import axiosClient from ".";

export function getProduct(params: {
  page: number;
  size: number;
  categoryId?: number;
}) {
  return axiosClient.get("product", {
    params,
  });
}
