import axios from 'axios';

export const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    timeout: 10000,
    headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjMzZjMjcwOS0wNTZhLTQ2YmEtOGQ2ZS1hZTg4N2U4ZjZkM2IiLCJyb2xlIjoiVEVBQ0hFUiIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJleHAiOjE2NjM1MzkyNjl9.EV1ti_Gh5dOkufJe7z_tfScnp4EXAHvYhv7R0hCwq3OXdcDQ_5Hu58Mh60o2UWBDakM7LDhO6lw3wop5zq943Q`,
    },
});
