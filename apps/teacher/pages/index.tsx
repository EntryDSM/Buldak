import SideBar from '../components/SideBar';
import ManageStudent from '../components/student';
import styled from '@emotion/styled';
import UserDetail from '../components/student/userDetail';

export default function Home() {
    const asd = () => {};
    return (
        <>
            <UserDetail />
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
