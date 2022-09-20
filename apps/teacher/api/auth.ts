import { instance } from './axios';
import { RefreshToken } from '../models/auth';
import { getCookie } from '../utils/cookie';

export const refreshToken = (): Promise<RefreshToken> => {
    const refresh_token = getCookie('refresh_token');
    return instance.put('/users/auth', null, {
        headers: {
            'REFRESH-TOKEN': refresh_token || '',
        },
    });
};
