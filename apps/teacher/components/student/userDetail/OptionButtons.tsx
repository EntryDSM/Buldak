import styled from '@emotion/styled';

const OptionButtons = () => {
    return (
        <_Wrapper>
            <_Button>학생 탈퇴</_Button>
            <_Button>공개 문서 삭제</_Button>
        </_Wrapper>
    );
};
export default OptionButtons;

const _Wrapper = styled.section`
    width: 250px;
    padding-left: 35px;
`;
const _Button = styled.button`
    width: 180px;
    height: 44px;
    color: ${({ theme }) => theme.color.error};
    border: 2px solid ${({ theme }) => theme.color.error};
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 3px;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    :last-child {
        margin-bottom: 0;
    }
`;
