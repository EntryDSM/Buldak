import { AddFeedbackRequest } from '../teachers/requests';

export interface GetPublicDocumentResponse {
    content: string;
}
export interface GetStayDocumentResponse {
    feedback_list: AddFeedbackRequest[];
    document_id : string;
    content: string;
}
export interface DocumentPreivew {
    type: 'STAY' | 'PUBLIC';
    preview_image_path: string;
}
export interface GetDocumentPreviewResponse {
    document_list: DocumentPreivew[];
}
