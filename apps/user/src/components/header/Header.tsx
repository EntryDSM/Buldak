import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import RepoLogo from '../../assets/svgs/RepoLogo';
import BtnWrapper from './BtnWrapper';

function Header() {
    const router = useRouter();

    return (
        <_Wrapper>
            <_Inner>
                <_LogoWrapper onClick={() => router.push('/')}>
                    <RepoLogo />
                </_LogoWrapper>
                <BtnWrapper id={router.query.id as string} />
            </_Inner>
        </_Wrapper>
    );
}

const _LogoWrapper = styled.span`
    cursor: pointer;
`;

const _Wrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    height: 70px;
    background-color: ${({ theme }) => theme.color.white};
    z-index: 1;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray300};
`;

const _Inner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
`;

export default Header;
