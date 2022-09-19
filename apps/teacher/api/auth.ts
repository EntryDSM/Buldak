import instance from './axios';
import { RefreshToken } from '../models/auth';

export const refreshToken = (): Promise<RefreshToken> => {
    const refresh_token = localStorage.getItem('refresh_token');
    return instance.put('/users/auth', null, {
        headers: {
            'REFRESH-TOKEN': refresh_token || '',
        },
    });
};
