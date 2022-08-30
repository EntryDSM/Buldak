import {
    GetDocumentPreviewResponse,
    GetPublicDocumentResponse,
    GetStayDocumentResponse,
} from '../models/documents/responses';
import { instance } from './axios';

export const getPublicDocument = async (
    document_id: string,
): Promise<GetPublicDocumentResponse> => {
    try {
        const response = await instance.get(`/documents/public/${document_id}`);
        return response.data;
    } catch (err) {
        throw err;
    }
};
export const deletePublicDocument = async (student_id: string) => {
    try {
        await instance.delete(`/documents/public/${student_id}`);
    } catch (err) {
        throw err;
    }
};
export const getStayDocument = async (document_id: string): Promise<GetStayDocumentResponse> => {
    try {
        const reponse = await instance.get(`/documents/stay/${document_id}`);
        return reponse.data;
    } catch (err) {
        throw err;
    }
};
export const rejectDocument = async (document_id: string) => {
    try {
        await instance.patch(`/documents/reject/${document_id}`);
    } catch (err) {
        throw err;
    }
};
export const approveDocument = async (document_id: string) => {
    try {
        await instance.patch(`/documents/approve/${document_id}`);
    } catch (err) {
        throw err;
    }
};
export const previewDocument = async (student_id: string): Promise<GetDocumentPreviewResponse> => {
    try {
        const repsonse = await instance.get(`documents/preview/${student_id}`);
        return repsonse.data;
    } catch (err) {
        throw err;
    }
};
