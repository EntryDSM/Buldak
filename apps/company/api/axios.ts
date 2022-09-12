import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://114.108.176.85:8080',
    timeout: 10000,
    headers: {
        Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MzZmNmQ3MC02MTZlLTc5MDAtMDAwMC0wMDAwMDAwMDAwMDAiLCJyb2xlIjoiTU9VIiwidHlwZSI6ImFjY2Vzc190b2tlbiIsImV4cCI6MTY2MDA0MjQ3OX0.Ww3N0Z1VYNro223_iTPT1ZS7R-QoEYwHRCjGCbrFhfYiT478cdNQ74Iaw8sJsuXKcEoJeKzJlo1V3Wt14QzoZQ',
    },
});
