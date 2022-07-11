export interface EachStudentType {
    student_id: string; //'550e8400-e29b-41d4-a716-446655440000'
    major: string; //'프론트엔드'
    tag_list: string[];
    name: string; //'김의찬'
    gcn: string; //'2106'
    preview_image_path: string; // 'https://'
    profile_image_path: string; // 'https://~'
}

export interface StudentsListResponseType {
    student_list: EachStudentType[];
}

// https://{{BASE_URL}}/companies/student/list
