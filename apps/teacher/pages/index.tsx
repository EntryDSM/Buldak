import SideBar from '../components/SideBar';
import ManageStudent from '../components/student';
import styled from '@emotion/styled';
import UserDetail from '../components/modals/userDetail';
import PdfModal from '../components/modals/pdf';
import useModal from '../hooks/useModal';
import { useState } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { getStudentList } from '../api/teachers';
import { GetStudentListResponse } from '../models/teachers/responses';
import { ClassNumValue, DocumentStatusValue, GradeValue } from '../models/teachers/requests';
import { queryKeys } from '../utils/constant';
import useStudentFilter from '../hooks/useStudentFilter';

export interface FilterProps {
    grade: GradeValue;
    classNum: ClassNumValue;
    docStatus: DocumentStatusValue;
}

export default function Home() {
    const { selectedModal } = useModal();
    const { studentList, onChangeClassNum, onChangeDocStatus, onChangeGrade } = useStudentFilter();
    return (
        <>
            {selectedModal === 'USER_DETAIL' && <UserDetail />}
            {selectedModal === 'PDF' && <PdfModal />}
            <Wrapper>
                <SideBar managementType="student" />
                <ManageStudent
                    studentList={studentList?.student_list || []}
                    onChangeGrade={onChangeGrade}
                    onChangeDocStatus={onChangeDocStatus}
                    onChangeClassNum={onChangeClassNum}
                />
            </Wrapper>
        </>
    );
}

export async function getServerSideProps() {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(queryKeys.getStudentList, () =>
        getStudentList(null, null, null),
    );
    return { props: { dehydratedState: dehydrate(queryClient) } };
}

const Wrapper = styled.section`
    display: flex;
`;
