import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://114.108.176.85:8080',
    timeout: 10000,
    headers: {
        Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3MGVlY2Q3NS0wY2Q5LTQzMmEtYjI3MC04ZTJmMmZjY2JhMTQiLCJyb2xlIjoiU1RVREVOVCIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJleHAiOjE2NjIxODAwMTh9.ekKW1oL35gv90ePNDJXLVuvroeyiIs7_VM9EhuDMRA6dbrBsHt23vvE0SJNHev9yFJ7ql4leQb4g9KxVl1laog',
    },
});
