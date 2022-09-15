import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://server.dsm-repo.com',
    timeout: 10000,
    headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlNWEwM2MzZC1kN2EzLTQzNjAtOTY5MC1iNThiOTM1YTczMzEiLCJyb2xlIjoiVEVBQ0hFUiIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJleHAiOjE2NjIyMTQ5MTB9.-SkAMAiTK6cHSa3il1pR9O_x3MJiR-PUGNI1HJhE46C7NDMB4BzNtPSFXJH2PjL3rgIPHNOnd7-x4htQcKsaig`,
    },
});
