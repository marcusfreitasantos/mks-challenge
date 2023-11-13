import { api } from "./api";

export const GetProducts = async () => {
  const response = await api.get("?page=1&rows=10&sortBy=id&orderBy=DESC");
  return response.data;
};
