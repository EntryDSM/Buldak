export interface RefreshToken {
    user_type: 'STUDENT' | 'TEACHER' | 'COMPANY';
    access_token: string;
    refresh_token: string;
}
