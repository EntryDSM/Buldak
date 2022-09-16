import SideBar from '../components/SideBar';
import styled from '@emotion/styled';
import ManageCompany from '../components/company';
import EditInfo from '../components/company/EditInfo';
import CompanyInfo from '../components/company/CompanyInfo';
import useModal from '../hooks/useModal';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { searchCompany } from '../api/teachers';
import { ChangeEvent, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import SuccessModal from '../components/modals/SuccessModal';
import { queryKeys } from '../utils/constant';

const ManagementCompany = () => {
    const { selectedModal, password } = useModal();
    const [name, setName] = useState('');
    const [searchName, setSearchName] = useState(name);
    const { debounce } = useDebounce();
    const { data: companyList } = useQuery(['searchCompany', searchName], () =>
        searchCompany(searchName),
    );
    const debounceSearchName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        debounce(() => setSearchName(e.target.value), 500);
    };
    return (
        <_Wrapper>
            {selectedModal === 'PATCH_COMPANY_DETAIL' && <EditInfo />}
            {selectedModal === 'COMPANY_DETAIL' && <CompanyInfo />}
            {selectedModal === 'RESET_SUCCESS' && (
                <SuccessModal type="RESET_PASSWORD" password={password || ''} />
            )}
            <SideBar managementType="company" />
            <ManageCompany
                searchName={name}
                onChangeSearchName={debounceSearchName}
                companyList={companyList?.company_element_list || []}
            />
        </_Wrapper>
    );
};

export async function getServerSideProps() {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery([queryKeys.searchCompany], () => searchCompany(''));
    return { props: { dehydratedState: dehydrate(queryClient) } };
}

export default ManagementCompany;
const _Wrapper = styled.section`
    display: flex;
`;
