import SideBar from '../components/SideBar';
import styled from '@emotion/styled';
import ManageCompany from '../components/company';
import { useContext } from 'react';
import { ModalStateContext } from '../context/ModalContext';
import EditInfo from '../components/company/EditInfo';
import CompanyInfo from '../components/company/CompanyInfo';

const ManagementCompany = () => {
    const modalState = useContext(ModalStateContext);
    return (
        <_Wrapper>
            {modalState.selectedModal === 'PATCH_COMPANY_DETAIL' && <EditInfo />}
            {modalState.selectedModal === 'COMPANY_DETAIL' && <CompanyInfo />}
            <SideBar managementType="company" />
            <ManageCompany />
        </_Wrapper>
    );
};
export default ManagementCompany;

const _Wrapper = styled.section`
    display: flex;
`;
