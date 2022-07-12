import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://server.repo.hs.kr',
    timeout: 10000,
});
