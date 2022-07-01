import SideBar from '../components/SideBar';
import ManageStudent from '../components/student';
import styled from '@emotion/styled';
import UserDetail from '../components/student/userDetail';
import PdfModal from '../components/student/pdf';

export default function Home() {
    return (
        <>
            {/*<UserDetail />*/}
            <PdfModal />
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
