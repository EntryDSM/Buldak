import { instance } from './axios';

export const readPersonalDocument = async (document_id: string): Promise<{ content: string }> => {
    try {
        return (await instance.get(`/companies/${document_id}`)).data;
    } catch (err) {
        throw err;
    }
};
