import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://114.108.176.85:8080',
    timeout: 10000,
    headers: {
        Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3ZTVmOGFhNS0zZTI3LTQ1ZjQtOTM3Yi00ODVhZmQzOTI2NjUiLCJyb2xlIjoiTU9VIiwidHlwZSI6ImFjY2Vzc190b2tlbiIsImV4cCI6MTY2Mjk5MjMxMH0.m0RB2dWlWQC0FzEwvymenY6viX0Oa_U8sSU1jQI3pCKFZrUZGjmF402NCV_VsLuNeEXZymPOMtt-U1nWd2F5yQ',
    },
});
