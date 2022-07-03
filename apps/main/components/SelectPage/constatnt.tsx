import studentSVG from '../../assets/svg/Student.svg';
import teacherSVG from '../../assets/svg/Teacher.svg';
import companySVG from '../../assets/svg/Company.svg';

export const Student: string = 'DSM 학생이시라면 \n학생 로그인을 이용해주세요';
export const Teacher: string = '선생님이시라면\n선생님 로그인을 이용해주세요';
export const Company: string = '기업이시라면\n기업 로그인을 이용해주세요';

interface MapType {
    LoginType: string;
    Text: string;
    Img: string;
}

export const SelectData: MapType[] = [
    { LoginType: '학생', Text: Student, Img: studentSVG },
    { LoginType: '선생님', Text: Teacher, Img: teacherSVG },
    { LoginType: '기업', Text: Company, Img: companySVG },
];
