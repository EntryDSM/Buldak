export interface AddFeedbackRequest {
    sequence: number;
    comment: string;
}
export interface EditCompanyInfoRequest {
    name: string;
    email: string;
    phone_number: string;
    location: string;
    profile_image_path: string;
    company_name: string;
    start_at: string;
    end_at: string;
}
export interface CreateCompanyRequest extends EditCompanyInfoRequest {
    is_mou: boolean;
}
export type GradeValue = '1' | '2' | '3' | null;
export type ClassNumValue = '1' | '2' | '3' | '4' | null;
// LOCAL이 일반
// STAY가 대기 요청 문서
// PROTECTED는 url로만 접근 가능
// PUBLIC은 공개 문서
export type DocumentStatusValue = 'LOCAL' | 'STAY' | 'PROTECTED' | 'PUBLIC' | null;
