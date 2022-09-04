import { AddFeedbackRequest } from '../teachers/requests';

export interface GetPublicDocumentResponse {
    content: any[];
}
export interface GetStayDocumentResponse {
    feedback_list: AddFeedbackRequest[];
    content: any[];
}
export interface DocumentPreivew {
    type: 'STAY' | 'PUBLIC';
    preview_image_path: string;
}
export interface GetDocumentPreviewResponse {
    document_list: DocumentPreivew[];
}
