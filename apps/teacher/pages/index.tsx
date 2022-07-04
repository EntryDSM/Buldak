import SideBar from '../components/SideBar';
import ManageStudent from '../components/student';
import styled from '@emotion/styled';
import UserDetail from '../components/student/userDetail';
import PdfModal from '../components/student/pdf';
import { ModalDispatchContext, ModalStateContext } from '../context/ModalContext';
import { useContext } from 'react';

export default function Home() {
    const modalState = useContext(ModalStateContext);
    return (
        <>
            {modalState.selectedModal === 'USER_DETAIL' && <UserDetail />}
            {modalState.selectedModal === 'PDF' && <PdfModal />}
            <Wrapper>
                <SideBar managementType="student" />
                <ManageStudent />
            </Wrapper>
        </>
    );
}
const Wrapper = styled.section`
    display: flex;
`;
