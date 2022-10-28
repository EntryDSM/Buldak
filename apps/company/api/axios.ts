import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://server.dsm-repo.com',
    timeout: 10000,
});
