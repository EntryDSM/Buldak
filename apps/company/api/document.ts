import { instance } from './axios';

export const readPublicDocument = async (document_id: string): Promise<{ content: string }> => {
    try {
        return (await instance.get(`/documents/public/${document_id}`)).data;
    } catch (err) {
        throw err;
    }
};
