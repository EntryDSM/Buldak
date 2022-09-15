import { instance } from './axios';
import { StudentsListResponseType } from '../types/index';

export const readAllBlocks = async (): Promise<StudentsListResponseType> => {
    try {
        return (await instance.get(`/companies/students`)).data;
    } catch (err) {
        throw err;
    }
};
