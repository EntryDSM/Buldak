<<<<<<< Updated upstream
=======
<<<<<<< HEAD

>>>>>>> Stashed changes
import { type } from "os";

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
    student_list:EachStudentType[];
}

export interface SearchProps {
    search?:string,
    classnum?:string,
    major?:string
}


<<<<<<< Updated upstream
// https://{{BASE_URL}}/companies/student/list
=======
=======

import { type } from "os";

export interface EachStudentType {
    student_id: string; //'550e8400-e29b-41d4-a716-446655440000'
    major_tag: string; //'프론트엔드'
    skill_tag_list: string[];
    name: string; //'김의찬'
    gcn: string; //'2106'
    preview_image_path: string; // 'https://'
    profile_image_path: string; // 'https://~'
}

export interface StudentsListResponseType {
    student_list:EachStudentType[];
}

export interface SearchProps {
    search?:string,
    classnum?:string,
    major?:string
}


>>>>>>> e00e9c85974154ffb8db7f5caf1c1292b3c3e366
>>>>>>> Stashed changes
