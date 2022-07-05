import SideBar from '../components/SideBar';
import styled from '@emotion/styled';
import ManageCompany from '../components/company';
import EditInfo from '../components/company/EditInfo';
import CompanyInfo from '../components/company/CompanyInfo';
import useModal from '../hooks/useModal';

const ManagementCompany = () => {
    const { selectedModal } = useModal();
    return (
        <_Wrapper>
            {selectedModal === 'PATCH_COMPANY_DETAIL' && <EditInfo />}
            {selectedModal === 'COMPANY_DETAIL' && <CompanyInfo />}
            <SideBar managementType="company" />
            <ManageCompany />
        </_Wrapper>
    );
};
export default ManagementCompany;

const _Wrapper = styled.section`
    display: flex;
`;
