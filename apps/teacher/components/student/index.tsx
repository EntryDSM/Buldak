import styled from '@emotion/styled';
import Filter from './Filter';
import StudentBox from './Box';
import { StudentInfo } from '../../models/teachers/responses';
import { FilterProps } from '../../pages';
import { Dispatch, SetStateAction } from 'react';

export interface FilterStateProps {
    filter: FilterProps;
    setFilter: Dispatch<SetStateAction<FilterProps>>;
}

interface Props extends FilterStateProps {
    studentList: StudentInfo[];
}

const ManageStudent: React.FC<Props> = ({ studentList, filter, setFilter }) => {
    return (
        <_Wrapper>
            <_FlexWrapper>
                <_PageTitle>전체 학생 리스트</_PageTitle>
                <_ReviewPeriod>
                    <strong className="summary">검토기간</strong>
                </_ReviewPeriod>
            </_FlexWrapper>
            <Filter filter={filter} setFilter={setFilter} />
            <_List>
                {studentList.map((studentInfo) => {
                    <StudentBox studentInfo={studentInfo} />;
                })}
            </_List>
        </_Wrapper>
    );
};
export default ManageStudent;

const _Wrapper = styled.section`
    width: 800px;
    margin: 40px auto 0 auto;
`;
const _FlexWrapper = styled.div`
    display: flex;
`;
const _PageTitle = styled.h1`
    font-size: 25px;
    line-height: 31px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.black};
`;
const _ReviewPeriod = styled.div`
    display: flex;
    margin-left: auto;
    > .summary {
        font-size: 21px;
        font-weight: 500;
        line-height: 26px;
        color: ${({ theme }) => theme.color.navy};
        margin-right: 10px;
    }
    > .switch {
        width: 43px;
        height: 22px;
        background-color: black;
        box-shadow: 0 2px 9px rgba(0, 0, 0, 0.15);
    }
`;
const _List = styled.ul`
    margin-top: 20px;
`;
