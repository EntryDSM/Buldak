import { AddFeedbackRequest } from '../teachers/requests';

export interface GetPublicDocumentResponse {
    content: any[];
}
export interface GetStayDocumentResponse {
    feedback_list: AddFeedbackRequest[];
    content: any[];
}
export interface GetDocumentPreviewResponse {
    stay_preview_image_path: string;
    public_preview_image_path: string;
}
