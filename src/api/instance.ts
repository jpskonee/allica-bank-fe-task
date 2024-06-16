import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { envConfig } from "../utils/contants/config.constant";

const createApiInstance = (baseURL: string) => {
  const instance = axios.create({ baseURL });

  instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );

  return instance;
};

export const api = createApiInstance(envConfig.baseApiUl);

export const get = <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return api.get<T>(url, config);
};
