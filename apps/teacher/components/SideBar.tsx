import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

type ManagementType = 'tag' | 'student' | 'company';

interface Props {
    managementType: ManagementType;
}

const SideBar: React.FC<Props> = ({ managementType }) => {
    return (
        <_Wrapper>
            <_SchoolImage />
            <_AccountType>선생님 계정</_AccountType>
            <_Navigation>
                <Link href="/manageTag">
                    <_NavButton isSelected={managementType === 'tag'}>
                        <div className="icon"></div>
                        <p className="managementType">태그 관리</p>
                    </_NavButton>
                </Link>
                <Link href="/">
                    <_NavButton isSelected={managementType === 'student'}>
                        <div className="icon"></div>
                        <p className="managementType">학생 관리</p>
                    </_NavButton>
                </Link>
                <Link href="/manageCompany">
                    <_NavButton isSelected={managementType === 'company'}>
                        <div className="icon"></div>
                        <p className="managementType">기업 관리</p>
                    </_NavButton>
                </Link>
            </_Navigation>
        </_Wrapper>
    );
};
export default SideBar;

const _Wrapper = styled.aside`
    width: 360px;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.skyblue};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
`;

// todo styled.div -> styled(Image)로 바꿔야함
const _SchoolImage = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.background};
`;
const _AccountType = styled.strong`
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    color: ${({ theme }) => theme.color.white};
    margin-top: 15px;
`;
const _Navigation = styled.nav`
    margin-top: 30px;
    width: 100%;
`;

interface NavButtonProps {
    isSelected: boolean;
}
const _NavButton = styled.a<NavButtonProps>`
    width: 100%;
    height: 50px;
    padding: 12px 20px;
    margin-bottom: 15px;
    display: flex;
    cursor: pointer;
    background-color: ${(props) => props.isSelected && '#477DE3'};
    :last-child {
        margin-bottom: 0;
    }
    > .icon {
        width: 26px;
        height: 26px;
        margin-right: 19px;
        background-color: #ffffff;
    }
    > .managementType {
        color: ${({ theme }) => theme.color.white};
        font-size: 20px;
        line-height: 25px;
        font-weight: 700;
    }
`;
