import SideBar from '../components/SideBar';
import ManageStudent from '../components/student';
import styled from '@emotion/styled';
import UserDetail from '../components/student/userDetail';
import PdfModal from '../components/student/pdf';
import useModal from '../hooks/useModal';

export default function Home() {
    const { selectedModal } = useModal();
    return (
        <>
            {selectedModal === 'USER_DETAIL' && <UserDetail />}
            {selectedModal === 'PDF' && <PdfModal />}
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
