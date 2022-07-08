import styled from '@emotion/styled';
import StudentBox from './StudentBox';
import { PdfStudentListProps } from '.';

interface Props {
    isSelectedBox: boolean;
    studentList : PdfStudentListProps[]
    onClick : (student_id : string) => void;
}

const StudentList = ({ isSelectedBox,studentList,onClick}: Props) => {
    return (
        <_Wrapper>
            {isSelectedBox && studentList.length === 0 ? (
                <_IsEmpty>
                    <em className="empty">학생을 추가해주세요</em>
                </_IsEmpty>
            ) : (
                studentList.map((item) => <StudentBox onClick={onClick} item={item} />)
            )}
        </_Wrapper>
    );
};
export default StudentList;

const _Wrapper = styled.ul`
    width: 410px;
    height: 430px;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.color.gray300};
    display: flex;
    flex-direction: column;
`;
const _IsEmpty = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    > .empty {
        font-size: 17px;
        line-height: 21px;
        color: ${({ theme }) => theme.color.gray700};
        font-weight: 500;
    }
`;
