import styled from '@emotion/styled';

const PdfFilter = () => {
    return (
        <_Wrapper>
            <_Dropdown />
            <_Dropdown />
        </_Wrapper>
    );
};
export default PdfFilter;

const _Wrapper = styled.div`
    display: flex;
`;
const _Dropdown = styled.div`
    width: 200px;
    height: 42px;
    background-color: ${({ theme }) => theme.color.gray500};
    margin-right: 10px;
`;
