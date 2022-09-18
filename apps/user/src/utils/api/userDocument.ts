import { queryKey } from '../queryKey';
import { instance } from './instance';

export const documentPublicRequest = (
    docuemnt_id: string,
    preview_image_path: string,
    content: string,
) => {
    const generatorKey = queryKey.documents.publicRequest(docuemnt_id);
    return instance.post(generatorKey, { preview_image_path, content });
};

interface queryDocumentType {
    content: string;
}

export const documentLocalQuery = (docuemnt_id: string) => {
    const generatorKey = queryKey.documents.localQuery(docuemnt_id);
    return instance.get<queryDocumentType>(generatorKey);
};

export const documentLocalPatch = (
    docuemnt_id: string,
    preview_image_path: string,
    content: string,
) => {
    const generatorKey = queryKey.documents.localPatch(docuemnt_id);
    return instance.patch(generatorKey, { preview_image_path, content });
};

export const documentLocalDelete = (docuemnt_id: string) => {
    const generatorKey = queryKey.documents.localDelete(docuemnt_id);
    return instance.delete(generatorKey);
};
