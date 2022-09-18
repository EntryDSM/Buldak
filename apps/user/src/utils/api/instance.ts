import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://114.108.176.85:8080',
    timeout: 10000,
    headers: {
        Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlOWU2MjE1MS0wMGNiLTQ5MzItYmE1Yi1iZWY2YjVkYTAyYjIiLCJyb2xlIjoiU1RVREVOVCIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJleHAiOjE2NjM1MjkxMzZ9.cjFaKLavgkQapRlrSWsGZ0uohzfuEa8Xn7zC71cWIZ2IC-56D4vogDnGNzfySzlpsSM2P6AjF9Y8ojmi5fnZGg',
    },
});
