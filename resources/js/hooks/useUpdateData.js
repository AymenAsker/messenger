import baseURL from "../Api/baseURL";

export const useUpdateDataWithImage = async (url, params) => {
    const config = {
        headers: {"Content-Type": "multipart/form-data"}
    }
    const res = await baseURL.put(url, params,config);
    return res.data;
}


export const useUpdateData = async (url, params) => {
    const res = await baseURL.put(url, params);
    return res.data;
}

