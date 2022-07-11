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
