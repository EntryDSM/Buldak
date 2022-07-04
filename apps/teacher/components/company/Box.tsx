import styled from '@emotion/styled';
import Profile from '@packages/ui/components/Profile';

const CompanyBox = () => {
    return (
        <_Wrapper>
            <Profile type="school" />
            <_Name>김의찬</_Name>
            <_Email>company@gmail.com</_Email>
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
