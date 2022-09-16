import { PreviewPublicStayDocument } from '../api/userResouce';

export const documentTypeCheck = (
    type: 'PUBLIC' | 'STAY',
    previewData?: PreviewPublicStayDocument,
) => {
    return previewData && previewData.document_list.filter((info) => info.type === type)[0];
};
