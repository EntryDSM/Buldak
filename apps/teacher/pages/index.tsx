import SideBar from '../components/SideBar';
import ManageStudent from '../components/student';
import styled from '@emotion/styled';
import UserDetail from '../components/student/userDetail';
import PdfModal from '../components/student/pdf';
import useModal from '../hooks/useModal';
import { useState } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { getStudentList } from '../api/teachers';
import { GetStudentListResponse } from '../models/teachers/responses';
import { ClassNumValue, DocumentStatusValue, GradeValue } from '../models/teachers/requests';

export interface FilterProps {
    grade: GradeValue;
    classNum: ClassNumValue;
    docStatus: DocumentStatusValue;
}

export default function Home() {
    const { selectedModal } = useModal();
    const [filter, setFilter] = useState<FilterProps>({
        grade: null,
        classNum: null,
        docStatus: null,
    });
    // const { data } = useQuery(
    //     ['getStudentList', filter.docStatus, filter.classNum, filter.grade],
    //     () => getStudentList(filter.grade, filter.classNum, filter.docStatus),
    // );
    return (
        <>
            {selectedModal === 'USER_DETAIL' && <UserDetail />}
            {selectedModal === 'PDF' && <PdfModal />}
            <Wrapper>
                <SideBar managementType="student" />
                <ManageStudent studentList={[]} filter={filter} setFilter={setFilter} />
            </Wrapper>
        </>
    );
}

export async function getServerSideProps() {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery('getStudentList', () => getStudentList(null, null, null));
    return { props: { dehydratedState: dehydrate(queryClient) } };
}

const Wrapper = styled.section`
    display: flex;
`;
