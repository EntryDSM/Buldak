import styled from '@emotion/styled';
import Profile from '@packages/ui/components/Profile';
import useModal from '../../hooks/useModal';
import { CompanyInfo } from '../../models/teachers/responses';

interface Props {
    companyInfo: CompanyInfo;
}

const CompanyBox = ({ companyInfo }: Props) => {
    const { selectModal } = useModal();
    return (
        <_Wrapper onClick={() => selectModal('COMPANY_DETAIL')}>
            <Profile type="image" width="56px" height="56px" src={companyInfo.profile_image_path} />
            <_Name>{companyInfo.company_name}</_Name>
            <_Email>{companyInfo.email}</_Email>
        </_Wrapper>
    );
};
export default CompanyBox;

const _Wrapper = styled.li`
    width: 100%;
    height: 80px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.color.gray300};
    padding: 12px 30px;
    display: flex;
    align-items: center;
`;
const _Name = styled.strong`
    font-size: 22px;
    line-height: 27px;
    color: ${({ theme }) => theme.color.black};
    margin-left: 15px;
    font-weight: 500;
`;
const _Email = styled.em`
    font-size: 20px;
    line-height: 25px;
    margin-left: 10px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.gray700};
`;
