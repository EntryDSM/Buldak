import axios, { AxiosError } from 'axios';
import { refreshToken } from './auth';
import { getCookie, setCookie } from '../utils/cookie';
export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 10000,
});

instance.interceptors.request.use(
    async function (config) {
        const accessToken = getCookie('access_token');
        accessToken
            ? (config.headers = {
                  Authorization: `Bearer ${accessToken}`,
              })
            : null;
        return config;
    },
    function (error: AxiosError) {
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    function (response) {
        return response;
    },
    async (error: Error) => {
        if (axios.isAxiosError(error) && error.response) {
            const { config, response } = error;
            if (response.status === 401 && getCookie('refresh_token')) {
                try {
                    refreshToken().then((res) => {
                        setCookie('access_token', res.access_token);
                        setCookie('refresh_token', res.refresh_token);
                        if (config.headers)
                            config.headers.Authorization = `Bearer ${res.access_token}`;
                        return axios(config);
                    });
                } catch (err: any) {
                    if (err.response.data.status === 401 || err.response.data.status === 404) {
                    }
                }
            } else return Promise.reject(error);
        }
    },
);
