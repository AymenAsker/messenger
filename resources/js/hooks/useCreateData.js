import baseURL from "../Api/baseURL";

export const useCreateDataWithImage = async (url, params) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };
  const res = await baseURL.post(url, params, config);
  return res.data;
};

export const useCreateData = async (url, params) => {
  const res = await baseURL.post(url, params);
  return res.data;
};
