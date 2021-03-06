import styled from '@emotion/styled';
import Arrow from '../../assets/svgs/Arrow';

function MoveBox() {
    return (
        <_Wrapper>
            <_BackBtn>
                <Arrow />
                <span>돌아가기</span>
            </_BackBtn>
            <_ChangePwdBtn>비밀번호 변경</_ChangePwdBtn>
        </_Wrapper>
    );
}

const _Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const _BackBtn = styled.button`
    font-size: 22px;
    color: ${({ theme }) => theme.color.main};
    font-weight: bold;
    > span {
        margin-left: 5px;
    }
`;

const _ChangePwdBtn = styled.button`
    width: 200px;
    height: 40px;
    text-align: center;
    border-radius: 5px;
    border: 3px solid ${({ theme }) => theme.color.skyblue};
    color: ${({ theme }) => theme.color.skyblue};
    font-size: 20px;
    font-weight: bold;
`;

export default MoveBox;
