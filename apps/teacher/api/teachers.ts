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
        await instance.delete(`/student/${student_id}`);
    } catch (err) {
        throw err;
    }
};
export const addFeedback = async (student_id: string, body: AddFeedbackRequest) => {
    try {
        await instance.post(`/teacher/feedback/${student_id}`, body);
    } catch (err) {
        throw err;
    }
};
export const deleteCompany = async (company_id: string) => {
    try {
        await instance.delete(`/teacher/company/${company_id}`);
    } catch (err) {
        throw err;
    }
};
export const getCompanyDetail = async (company_id: string): Promise<GetCompanyDetailResponse> => {
    try {
        return await instance.get(`/teacher/company/${company_id}`);
    } catch (err) {
        throw err;
    }
};
export const editCompany = async (company_id: string, body: EditCompanyInfoRequest) => {
    try {
        await instance.patch(`teacher/company/${company_id}`, body);
    } catch (err) {
        throw err;
    }
};
export const searchCompany = async (name: string): Promise<SearchCompanyResponse> => {
    try {
        return await instance.get(`/teacher/company/search?name=${name}`);
    } catch (err) {
        throw err;
    }
};
export const getStudentDetail = async (student_id: string): Promise<GetStudentDetailResponse> => {
    try {
        return await instance.get(`/teacher/student/${student_id}`);
    } catch (err) {
        throw err;
    }
};
export const resetCompanyPassword = async (
    company_id: string,
): Promise<ResetCompanyPasswordResponse> => {
    try {
        return await instance.patch(`/teacher/company/reset/${company_id}`);
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
        return await instance.get(
            `/teachers/student/list?${`grade=${grade || ''}`}${`&classNum=${
                classNum || ''
            }`}${`&docStatus=${docStatus || ''}`}`,
        );
    } catch (err) {
        throw err;
    }
};
export const createCompany = async (body: CreateCompanyRequest): Promise<CreateCompanyResponse> => {
    try {
        return await instance.post('/teachers/company', body);
    } catch (err) {
        throw err;
    }
};
