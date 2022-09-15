<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
import SideBar from '../components/SideBar';
import ManageStudent from '../components/student';
import styled from '@emotion/styled';
import UserDetail from '../components/student/userDetail';
import PdfModal from '../components/student/pdf';
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
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
    const { data } = useQuery(
        ['getStudentList', filter.docStatus, filter.classNum, filter.grade],
        () => getStudentList(filter.grade, filter.classNum, filter.docStatus),
    );
    return (
        <>
            {selectedModal === 'USER_DETAIL' && <UserDetail />}
            {selectedModal === 'PDF' && <PdfModal />}
            <Wrapper>
                <SideBar managementType="student" />
                <ManageStudent
                    studentList={data?.student_list || []}
                    filter={filter}
                    setFilter={setFilter}
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
=======
import SideBar from '../components/SideBar';
import ManageStudent from '../components/student';
import styled from '@emotion/styled';
import UserDetail from '../components/modals/userDetail';
import PdfModal from '../components/modals/pdf';
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
import useModal from '../hooks/useModal';
import { useState } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { getStudentList } from '../api/teachers';
import { GetStudentListResponse } from '../models/teachers/responses';
import { ClassNumValue, DocumentStatusValue, GradeValue } from '../models/teachers/requests';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
import { queryKeys } from '../utils/constant';
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

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
    const { data } = useQuery(
        ['getStudentList', filter.docStatus, filter.classNum, filter.grade],
        () => getStudentList(filter.grade, filter.classNum, filter.docStatus),
    );
    return (
        <>
            {selectedModal === 'USER_DETAIL' && <UserDetail />}
            {selectedModal === 'PDF' && <PdfModal />}
            <Wrapper>
                <SideBar managementType="student" />
                <ManageStudent
                    studentList={data?.student_list || []}
                    filter={filter}
                    setFilter={setFilter}
                />
            </Wrapper>
        </>
    );
}

export async function getServerSideProps() {
    const queryClient = new QueryClient();
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    await queryClient.prefetchQuery('getStudentList', () => getStudentList(null, null, null));
=======
    await queryClient.prefetchQuery(queryKeys.getStudentList, () =>
        getStudentList(null, null, null),
    );
>>>>>>> Stashed changes
=======
    await queryClient.prefetchQuery('getStudentList', () => getStudentList(null, null, null));
>>>>>>> Stashed changes
    return { props: { dehydratedState: dehydrate(queryClient) } };
}

const Wrapper = styled.section`
    display: flex;
`;
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
>>>>>>> e00e9c85974154ffb8db7f5caf1c1292b3c3e366
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
