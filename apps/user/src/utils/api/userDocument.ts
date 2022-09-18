import { queryKey } from '../queryKey';
import { instance } from './instance';

export const documentPublicRequest = (
    document_id: string,
    preview_image_path: string,
    content: string,
) => {
    const generatorKey = queryKey.documents.publicRequest(document_id);
    return instance.post(generatorKey, { preview_image_path, content });
};

interface queryDocumentType {
    content: string;
}

export const documentLocalQuery = (document_id: string) => {
    const generatorKey = queryKey.documents.localQuery(document_id);
    return instance.get<queryDocumentType>(generatorKey);
};

export const documentLocalPatch = (
    document_id: string,
    preview_image_path: string,
    content: string,
) => {
    const generatorKey = queryKey.documents.localPatch(document_id);
    return instance.patch(generatorKey, { preview_image_path, content });
};

export const documentLocalDelete = (document_id: string) => {
    const generatorKey = queryKey.documents.localDelete(document_id);
    return instance.delete(generatorKey);
};
