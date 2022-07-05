import styled from '@emotion/styled';
import Arrow from '../../assets/svgs/Arrow';

function MoveBox() {
    return (
        <MoveWrapper>
            <BackBtn>
                <Arrow />
                <span>돌아가기</span>
            </BackBtn>
            <EditPassWord>비밀번호 변경</EditPassWord>
        </MoveWrapper>
    );
}

const MoveWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const BackBtn = styled.button`
    all: unset;
    cursor: pointer;
    font-size: 22px;
    color: ${({ theme }) => theme.color.main};
    font-weight: bold;
    > span {
        margin-left: 5px;
    }
`;

const EditPassWord = styled.button`
    all: unset;
    width: 200px;
    height: 40px;
    text-align: center;
    border-radius: 5px;
    border: 3px solid ${({ theme }) => theme.color.skyblue};
    color: ${({ theme }) => theme.color.skyblue};
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
`;

export default MoveBox;
