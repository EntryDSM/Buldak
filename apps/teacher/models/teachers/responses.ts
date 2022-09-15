<<<<<<< HEAD
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
    profile_image_path: string;
    email: string;
    phone_number: string;
    major_tag_name: string;
    my_skill_name_list: string[];
}
export interface CompanyInfo {
    company_id: string;
    profile_image_path: string;
    company_name: string;
    email: string;
}
export interface SearchCompanyResponse {
    company_element_list: CompanyInfo[];
}
export interface GetCompanyDetailResponse extends CompanyInfo {
    location: string;
    name: string;
    phone_number: string;
    start_at: string;
    end_at: string;
    is_mou: boolean;
}
export interface CreateCompanyResponse {
    id: string;
    password: string;
}
export interface ResetCompanyPasswordResponse {
    password: string;
}
=======
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
    profile_image_path: string;
    email: string;
    phone_number: string;
    major_tag_name: string;
    my_skill_name_list: string[];
}
export interface CompanyInfo {
    company_id: string;
    profile_image_path: string;
    company_name: string;
    email: string;
}
export interface SearchCompanyResponse {
    company_element_list: CompanyInfo[];
}
export interface GetCompanyDetailResponse extends CompanyInfo {
    location: string;
    name: string;
    phone_number: string;
    start_at: string;
    end_at: string;
    is_mou: boolean;
}
export interface CreateCompanyResponse {
    id: string;
    password: string;
}
export interface ResetCompanyPasswordResponse {
    password: string;
}
>>>>>>> e00e9c85974154ffb8db7f5caf1c1292b3c3e366
