import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://server.dsm-repo.com',
    timeout: 10000,
    headers: {
        Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlOWU2MjE1MS0wMGNiLTQ5MzItYmE1Yi1iZWY2YjVkYTAyYjIiLCJyb2xlIjoiU1RVREVOVCIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJleHAiOjE2NjM1Mzc3MzJ9.vg7ld7zhw724Kc5J_CiEAzCtgA6CQC99JmGGBUjhe8rSWN1WQiv29MMDsz6sAgqsv5Nkrt27kLKLSYkz9yyIow',
    },
});
