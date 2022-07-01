import SideBar from '../components/SideBar';
import styled from '@emotion/styled';
import ManageCompany from '../components/company';

const ManagementCompany = () => {
    return (
        <_Wrapper>
            <SideBar managementType="company" />
            <ManageCompany />
        </_Wrapper>
    );
};
export default ManagementCompany;

const _Wrapper = styled.section`
    display: flex;
`;
