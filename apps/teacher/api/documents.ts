import ResponseCache from 'next/dist/server/response-cache';
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
export const rejectDocument = async (student_id: string) => {
    try {
        await instance.patch(`/documents/stay/reject/${student_id}`);
    } catch (err) {
        throw err;
    }
};
export const approveDocument = async (student_id: string) => {
    try {
        await instance.patch(`/documents/stay/approve/${student_id}`);
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

export const sendBackDocument = async (student_id: string) => {
    try {
        const response = await instance.patch(`documents/return/${student_id}`);
        return response.data;
    } catch (err) {
        throw err;
    }
};
