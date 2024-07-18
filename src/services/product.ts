import ApiService from "./configs/ApiService";


export async function apiGetProducts<T>() {
  return ApiService.fetchData<T>({
    url: "/products",
    method: "get",
  });
}