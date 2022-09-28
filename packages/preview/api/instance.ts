import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookie = new Cookies();

export const instance = axios.create({
    baseURL: 'https://server.dsm-repo.com',
    timeout: 10000,
    headers: {
        Authorization: `Bearer ${cookie.get('access_token')}`,
    },
});
