<<<<<<< Updated upstream
import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://server.dsm-repo.com',
=======
<<<<<<< HEAD
import axios from 'axios';

export const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    timeout: 10000,
    headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlNWEwM2MzZC1kN2EzLTQzNjAtOTY5MC1iNThiOTM1YTczMzEiLCJyb2xlIjoiVEVBQ0hFUiIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJleHAiOjE2NjIyMTQ5MTB9.-SkAMAiTK6cHSa3il1pR9O_x3MJiR-PUGNI1HJhE46C7NDMB4BzNtPSFXJH2PjL3rgIPHNOnd7-x4htQcKsaig`,
    },
});
=======
import axios from 'axios';

export const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
>>>>>>> Stashed changes
    timeout: 10000,
    headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlNWEwM2MzZC1kN2EzLTQzNjAtOTY5MC1iNThiOTM1YTczMzEiLCJyb2xlIjoiVEVBQ0hFUiIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJleHAiOjE2NjIyMTQ5MTB9.-SkAMAiTK6cHSa3il1pR9O_x3MJiR-PUGNI1HJhE46C7NDMB4BzNtPSFXJH2PjL3rgIPHNOnd7-x4htQcKsaig`,
    },
});
<<<<<<< Updated upstream
=======
>>>>>>> e00e9c85974154ffb8db7f5caf1c1292b3c3e366
>>>>>>> Stashed changes
