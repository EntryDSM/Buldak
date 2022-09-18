import { ClassNumValue, DocumentStatusValue, GradeValue } from '../models/teachers/requests';
import {
    AddFeedbackRequest,
    CreateCompanyRequest,
    EditCompanyInfoRequest,
} from '../models/teachers/requests';
import {
    CreateCompanyResponse,
    GetCompanyDetailResponse,
    GetStudentDetailResponse,
    GetStudentListResponse,
    ResetCompanyPasswordResponse,
    SearchCompanyResponse,
} from '../models/teachers/responses';
import { instance } from './axios';

export const deleteStudent = async (student_id: string) => {
    try {
        await instance.delete(`/teachers/student/${student_id}`);
    } catch (err) {
        throw err;
    }
};
export const addFeedback = async (student_id: string, body: AddFeedbackRequest) => {
    try {
        await instance.post(`/teachers/feedback/${student_id}`, body);
    } catch (err) {
        throw err;
    }
};
export const deleteCompany = async (company_id: string) => {
    try {
        await instance.delete(`/teachers/company/${company_id}`);
    } catch (err) {
        throw err;
    }
};
export const getCompanyDetail = async (company_id: string): Promise<GetCompanyDetailResponse> => {
    try {
        const response = await instance.get(`/teachers/company/${company_id}`);
        return response.data;
    } catch (err) {
        throw err;
    }
};
export const editCompany = async (company_id: string, body: EditCompanyInfoRequest) => {
    try {
        await instance.patch(`teachers/company/${company_id}`, body);
    } catch (err) {
        throw err;
    }
};
export const searchCompany = async (name: string): Promise<SearchCompanyResponse> => {
    try {
        const response = await instance.get(`teachers/company/search?name=${name}`);
        return response.data;
    } catch (err) {
        throw err;
    }
};
export const getStudentDetail = async (student_id: string): Promise<GetStudentDetailResponse> => {
    try {
        const response = await instance.get(`/teachers/student/${student_id}`);
        return response.data;
    } catch (err) {
        throw err;
    }
};
export const resetCompanyPassword = async (
    company_id: string,
): Promise<ResetCompanyPasswordResponse> => {
    try {
        const response = await instance.patch(`/teachers/company/change/${company_id}`);
        return response.data;
    } catch (err) {
        throw err;
    }
};
export const getStudentList = async (
    grade: GradeValue,
    classNum: ClassNumValue,
    docStatus: DocumentStatusValue,
): Promise<GetStudentListResponse> => {
    try {
        const response = await instance.get(
            `/teachers/student/list?${`grade=${grade || ''}`}${`&classNum=${
                classNum || ''
            }`}${`&docStatus=${docStatus || ''}`}`,
        );
        return response.data;
    } catch (err) {
        throw err;
    }
};
export const createCompany = async (body: CreateCompanyRequest): Promise<CreateCompanyResponse> => {
    try {
        const response = await instance.post('/teachers/company', body);
        return response.data;
    } catch (err) {
        throw err;
    }
};
