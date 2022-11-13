import baseURL from "../Api/baseURL";
import { getDataLocalStorage } from "../utils/helpers/localStorageHelper";

const useGetData = async (url, params) => {
  const res = await baseURL.get(url, params);
  return res.data;
};

export const useGetDataToken = async (url, params) => {
  const config = {
    headers: { Authorization: `Bearer ${getDataLocalStorage("token")}` },
  };
  const res = await baseURL.get(url, config);
  return res.data;
};

export default useGetData;
