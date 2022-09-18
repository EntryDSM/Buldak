import { queryKey } from '../queryKey';
import { instance } from './instance';

export const publicRequest = (docuemnt_id: string, preview_image_path: string, content: string) => {
    const generatorKey = queryKey.documents.publicRequest(docuemnt_id);
    return instance.patch(generatorKey, { preview_image_path, content });
};

interface queryDocumentType {
    content: string;
}

export const queryDocument = (docuemnt_id: string) => {
    const generatorKey = queryKey.documents.queryDocument(docuemnt_id);
    return instance.get<queryDocumentType>(generatorKey);
};
