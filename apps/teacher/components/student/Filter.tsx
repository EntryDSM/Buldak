import styled from '@emotion/styled';

const Filter = () => {
    return (
        <_Wrapper>
            <_Dropdown1 />
            <_Dropdown1 />
            <_Dropdown2 />
            <_Button />
            <_Button />
        </_Wrapper>
    );
};
export default Filter;

const _Wrapper = styled.section`
    display: flex;
    margin-top: 25px;
`;
const _Dropdown1 = styled.div`
    width: 150px;
    height: 42px;
    margin-right: 10px;
    background-color: ${({ theme }) => theme.color.background};
    :last-child {
        margin-right: 0;
    }
`;
const _Dropdown2 = styled.div`
    width: 180px;
    height: 42px;
    background-color: ${({ theme }) => theme.color.background};
    margin-right: 30px;
`;
const _Button = styled.div`
    width: 130px;
    height: 42px;
    margin-right: 10px;
    background-color: ${({ theme }) => theme.color.skyblue};
    :last-child {
        margin-right: 0;
    }
`;
