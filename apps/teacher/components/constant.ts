export type GradeDropdownType = '전체' | '1학년' | '2학년' | '3학년';
export const gradeDropdownItems: GradeDropdownType[] = ['전체', '1학년', '2학년', '3학년'];

export type ClassNumDropdownType = '전체' | '1반' | '2반' | '3반' | '4반';
export const classRoomDropdownItems: ClassNumDropdownType[] = ['전체', '1반', '2반', '3반', '4반'];

export type DocumentStatusDropdownType = '전체' | '미제출' | '요청 대기 문서' | '공개 문서';
export const documentStatusDropdownItems: DocumentStatusDropdownType[] = [
    '전체',
    '미제출',
    '요청 대기 문서',
    '공개 문서',
];

export type keyValue =
    | 'name'
    | 'email'
    | 'phone_number'
    | 'location'
    | 'profile_image_path'
    | 'company_name'
    | 'start_at'
    | 'end_at';

export interface CompanyInputArray {
    title: string;
    name: keyValue;
    placeholder?: string;
}

export const inputArray: CompanyInputArray[] = [
    {
        title: '담당자 이름',
        name: 'name',
        placeholder: '담당자 이름을 입력해 주세요',
    },
    {
        title: '담당자 이메일',
        name: 'email',
        placeholder: '담당자 이메일을 입력해 주세요',
    },
    {
        title: '담당자 연락처',
        name: 'phone_number',
        placeholder: '담당자 연락처를 입력해 주세요',
    },
    {
        title: '기업 이름',
        name: 'company_name',
        placeholder: '기업 이름을 입력해 주세요',
    },
    {
        title: '기업 주소',
        name: 'location',
        placeholder: '기업 주소를 입력해 주세요',
    },
];
