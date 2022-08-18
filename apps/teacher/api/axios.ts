import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://114.108.176.85:8080',
    timeout: 10000,
    headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3NDY1NjE2My02ODY1LTcyMzEtMDAwMC0wMDAwMDAwMDAwMDAiLCJyb2xlIjoiVEVBQ0hFUiIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJleHAiOjE2NjA1Njg3NTR9.sY9E2ZHQU-rUSCxUwc_rSd71nVpbqywfF4jDp3Ns1Y_kXTbAWjecM37MYclqqZghRFAuBPjAsEmJIbT_vBBdCw`,
    },
});
