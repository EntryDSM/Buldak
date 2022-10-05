import axios, { AxiosError } from 'axios';
import { refreshToken } from './auth';
import { getCookie, setCookie } from '../utils/cookie';
import { toastHandler } from '../utils/toast';
export const instance = axios.create({
    baseURL: 'https://server.dsm-repo.com',
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
    async (error: any) => {
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
                    if (err.response.data.status === 401 || err.response.data.status === 403) {
                        window.alert('다시 로그인이 필요합니다.');
                        window.location.href = 'https://www.dsm-repo.com';
                    }
                }
            } else if (axios.isAxiosError(error) && error.response) {
                const { config, response } = error;
                if (response.status === 403) {
                    toastHandler('ERROR', '권한이 없습니다.');
                    window.location.href = '/403';
                }
            } else return Promise.reject(error);
        }
    },
);
