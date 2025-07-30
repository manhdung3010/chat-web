import axiosClient from ".";

export function getCateGories() {
  return axiosClient.get("categories");
}

export function getSubCateGories({ parentId }: { parentId: any }) {
  return axiosClient.get(`categories/sub-categories/${parentId}`);
}
