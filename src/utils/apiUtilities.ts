import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { envSettings } from "./env.config";
const { apiURL } = envSettings

const client: AxiosInstance = axios.create({
    baseURL: apiURL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    }
})

interface ResponseType {
    response: AxiosResponse | [];
    error: boolean;
}
interface RequestConfigs {
    url: string;
    config?: AxiosRequestConfig;
}

interface UpdateRequestConfigs extends RequestConfigs {
    payload?: any;
}

export const getRequest = async ({ url, config }: RequestConfigs): Promise<ResponseType> => {
    try {
        const res: AxiosResponse<any, any> = await client.get(`${url}`, {
            ...config,
        });

        return { response: res, error: false };
    } catch (error) {
        return { response: [], error: true };
    }
};

export const postRequest = async ({ url, payload = {}, config }: UpdateRequestConfigs): Promise<ResponseType> => {
    try {
        const res: AxiosResponse<any, any> = await client.post(`${url}`, payload, {
            ...config,
        });

        return { response: res, error: false };
    } catch (error) {
        return { response: [], error: true };
    }
};

export const putRequest = async ({ url, payload = {}, config }: UpdateRequestConfigs): Promise<ResponseType> => {
    try {
        const res: AxiosResponse<any, any> = await client.put(`${url}`, payload, {
            ...config,
        });

        return { response: res, error: false };
    } catch (error) {
        return { response: [], error: true };
    }
};

export const patchRequest = async ({ url, payload = {}, config }: UpdateRequestConfigs): Promise<ResponseType> => {
    try {
        const res: AxiosResponse<any, any> = await client.patch(`${url}`, payload, {
            ...config,
        });

        return { response: res, error: false };
    } catch (error) {
        return { response: [], error: true };
    }
};

export const deleteRequest = async ({ url, config }: RequestConfigs): Promise<ResponseType> => {
    try {
        const res: AxiosResponse<any, any> = await client.delete(`${url}`, {
            ...config,
        });

        return { response: res, error: false };
    } catch (error) {
        return { response: [], error: true };
    }
};