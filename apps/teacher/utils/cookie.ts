import { Cookies } from 'react-cookie';

interface CookieSetOptions {
    path?: string;
    expires?: Date;
    maxAge?: number;
    domain?: string;
    secure?: boolean;
    httpOnly?: boolean;
    sameSite?: boolean | 'none' | 'lax' | 'strict';
    encode?: (value: string) => string;
}

const cookies = new Cookies();

export const setCookie = (name: string, value: string, option?: CookieSetOptions) => {
    return cookies.set(name, value, { ...option });
};

export const getCookie = (name: string) => {
    return cookies.get(name);
};
