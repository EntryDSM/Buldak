import studentSVG from '../../assets/svg/Student.svg';
import teacherSVG from '../../assets/svg/Teacher.svg';
import companySVG from '../../assets/svg/Company.svg';

interface mapType {
    loginType: string;
    text: string;
    img: string;
}

export const selectData: mapType[] = [
    { loginType: '학생', text: 'DSM 학생이시라면 \n학생 로그인을 이용해 주세요', img: studentSVG },
    { loginType: '선생님', text: '선생님이시라면\n선생님 로그인을 이용해 주세요', img: teacherSVG },
];
