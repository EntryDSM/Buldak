import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://114.108.176.85:8080',
    timeout: 10000,
    headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzZjA2YWY2My1hOTNjLTExZTQtOTc5Ny0wMDUwNTY5MDc3M2YiLCJyb2xlIjoiVEVBQ0hFUiIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJleHAiOjE2NjE5MTg3Njh9.czoJZZQ5hKoJfpUcsYbJdDbD1j-GU8mU38uyuMtJcQDyAZ5yUj5l75GX2MabDYFgRXZ-kcbfPW5p4m44kdLJnw`,
    },
});
