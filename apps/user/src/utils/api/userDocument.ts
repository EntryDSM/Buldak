import * as UUID from 'uuid';
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

export const documentStayQuery = (student_id: string) => {
    return instance.get(`/documents/stay/${student_id}`);
};

export const documentStayPatch = (preview_image_path: string, content: any) => {
    return instance.patch(`/documents/stay`, { preview_image_path, content });
};

export const documentStayCancel = (student_id: string) => {
    return instance.patch(`documents/cancel/${student_id}`);
};

export const documentPublicQuery = (student_id: string) => {
    return instance.get(`documents/public/${student_id}`);
};

export const documentLocalCreate = () => {
    return instance.post(`/documents`, {
        preview_image_path:
            'https://s3.ap-northeast-2.amazonaws.com/image.entrydsm.hs.kr/images/299271085_1311117439426414_1611476307031535707_n.png',
        content: JSON.stringify([
            {
                id: UUID.v4(),
                args: {
                    tagType: 'Profile',
                    github: '',
                    name: '',
                    email: '',
                    phone: '',
                    imageUrl: '',
                    feedback: {
                        isRead: false,
                        feedInfo: '',
                    },
                    isTeacher: false,
                },
            },
        ]),
    });
};

export const copyPublicDocument = () => {
    return instance.post('/documents/copy');
};

// JSON.stringify([
//     {
//         id: randomUUID(),
//         tagType: 'Profile',
//         github: '',
//         name: '',
//         email: '',
//         phone: '',
//         imageUrl: '',
//         feedback: {
//             isRead: false,
//             feedInfo: '',
//         },
//         isTeacher: false,
//     },
// ]),
