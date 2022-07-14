export interface StudentInfo {
    student_id: string;
    name: string;
    gcn: number;
    profile_image_path: string;
    feedback_status: boolean;
    public_status: boolean;
    is_submitted: boolean;
}
export interface GetStudentListResponse {
    student_list: StudentInfo[];
}
export interface GetStudentDetailResponse {
    name: string;
    gcn: number;
    email: string;
    phone_number: string;
    major: string;
    tag: string[];
}
export interface CompanyInfo {
    company_id: number;
    profile_image_path: string;
    company_name: string;
    email: string;
}
export interface SearchCompanyResponse {
    company_list: CompanyInfo[];
}
export interface GetCompanyDetailResponse extends CompanyInfo {
    location: string;
    name: string;
    phone_number: string;
}
export interface CreateCompanyResponse {
    id: string;
    password: string;
}
export interface ResetCompanyPasswordResponse {
    password: string;
}
