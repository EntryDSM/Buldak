import styled from '@emotion/styled';
import CompanyBox from './Box';

const ManageCompany = () => {
    return (
        <_Wrapper>
            <_Title>전체 기업 리스트</_Title>
            <_FlexWrapper>
                <div className="input" />
                <div className="button" />
            </_FlexWrapper>
            <_List>
                <CompanyBox />
                <CompanyBox />
            </_List>
        </_Wrapper>
    );
};
export default ManageCompany;

const _Wrapper = styled.section`
    margin: 50px auto 0 auto;
    width: 800px;
`;
const _Title = styled.h1`
    font-size: 25px;
    line-height: 31px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.black};
`;
const _FlexWrapper = styled.div`
    display: flex;
    margin-top: 25px;
    > .input {
        width: 400px;
        height: 44px;
        background-color: ${({ theme }) => theme.color.gray700};
    }
    > .button {
        width: 44px;
        height: 44px;
        background-color: ${({ theme }) => theme.color.main};
        margin-left: 15px;
    }
`;
const _List = styled.ul`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px 0;
`;
