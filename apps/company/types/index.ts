import { type } from 'os';

export interface EachStudentType {
    student_id: string; //'550e8400-e29b-41d4-a716-446655440000'
    major_tag: string; //'프론트엔드'
    skill_tag_list: string[];
    name: string; //'김의찬'
    gcn: string; //'2106'
    preview_image_path: string; // 'https://'
    profile_image_path: string; // 'https://~'
    public_document_id: string;
}

export interface StudentsListResponseType {
    student_list: EachStudentType[];
}

export interface SearchProps {
    search?: string;
    classnum?: string;
    major?: string;
}
