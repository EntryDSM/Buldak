export interface AddFeedbackRequest {
    sequence: number;
    comment: string;
}
export interface EditCompanyInfoRequest {
    profile_image_path: string;
    company_name: string;
    location: string;
    name: string;
    phone_number: string;
    email: string;
    start_at: string;
    end_at: string;
}
export interface CreateCompanyRequest extends EditCompanyInfoRequest {
    profile_image_path: string;
}
export type GradeValue = '1' | '2' | '3' | null;
export type ClassNumValue = '1' | '2' | '3' | '4' | null;
// LOCAL이 일반
// STAY가 대기 요청 문서
// PROTECTED는 url로만 접근 가능
// PUBLIC은 공개 문서
export type DocumentStatusValue = 'LOCAL' | 'STAY' | 'PROTECTED' | 'PUBLIC' | null;
