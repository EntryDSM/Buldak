import axios from 'axios';

export const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    timeout: 10000,
    headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3ZTVmOGFhNS0zZTI3LTQ1ZjQtOTM3Yi00ODVhZmQzOTI2NjUiLCJyb2xlIjoiVEVBQ0hFUiIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJleHAiOjE2NjM1MjQ1NzN9.bw4Lg2uFsxMGPIDUsbE5ZNHnzJYs2ihhq8lDtozvYDEFkFqvxFy6DnpPyikZUPZR56K6oCO4loUABIXQKpqUEw`,
    },
});
