import styled from '@emotion/styled';
import RepoLogo from '../../assets/svgs/RepoLogo';

function Header() {
    return (
        <HeaderBox>
            <div>
                <RepoLogo />
                <nav>
                    <DeleteBtn>삭제하기</DeleteBtn>
                    <TemporaryBtn>임시저장</TemporaryBtn>
                    <OpenBtn>공개요청</OpenBtn>
                </nav>
            </div>
        </HeaderBox>
    );
}

const HeaderBox = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    background-color: ${({ theme }) => theme.color.white};
    z-index: 1;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray300};
    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 1400px;
        > nav {
            width: 400px;
            display: flex;
            justify-content: space-between;
        }
    }
`;

const DeleteBtn = styled.button`
    width: 120px;
    height: 40px;
    font-weight: bold;
    font-size: 16px;
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.color.gray700};
    color: ${({ theme }) => theme.color.error};
`;

const TemporaryBtn = styled.button`
    width: 120px;
    height: 40px;
    font-weight: bold;
    font-size: 16px;
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.color.gray700};
`;

const OpenBtn = styled.button`
    width: 120px;
    height: 40px;
    font-size: 16px;
    border-radius: 3px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.skyblue};
    border: 1px solid ${({ theme }) => theme.color.gray700};
`;

export default Header;
