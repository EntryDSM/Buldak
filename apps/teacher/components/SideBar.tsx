<<<<<<< HEAD
import styled from '@emotion/styled';
import Link from 'next/link';
import { Profile } from '@packages/ui';
import Image from 'next/image';
import { companyIcon, studentIcon, tagIcon } from '../assets';
import { pages } from '../utils/constant';

type ManagementType = 'tag' | 'student' | 'company';

interface Props {
    managementType: ManagementType;
}

const SideBar = ({ managementType }: Props) => {
    return (
        <_Margin>
            <_Wrapper>
                <Profile type="school" width="90px" height="90px" />
                <_AccountType>선생님 계정</_AccountType>
                <_Navigation>
                    {navArray.map((item) => (
                        <Link href={item.url} key={item.managementType}>
                            <_NavButton isSelected={managementType === item.managementType}>
                                <Image src={item.image} width={26} height={26} />
                                <p className="managementType">{item.summary}</p>
                            </_NavButton>
                        </Link>
                    ))}
                </_Navigation>
            </_Wrapper>
        </_Margin>
    );
};
export default SideBar;

const _Margin = styled.div`
    margin-right: 360px;
`;

const _Wrapper = styled.aside`
    width: 360px;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.skyblue};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    position: fixed;
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
    display: flex;
    flex-wrap: wrap;
    gap: 15px 0;
`;

interface NavButtonProps {
    isSelected: boolean;
}
const _NavButton = styled.a<NavButtonProps>`
    width: 100%;
    height: 50px;
    padding: 12px 20px;
    display: flex;
    cursor: pointer;
    background-color: ${(props) => props.isSelected && '#477DE3'};
    > .managementType {
        margin-left: 19px;
        color: ${({ theme }) => theme.color.white};
        font-size: 20px;
        line-height: 25px;
        font-weight: 700;
    }
`;

interface NavItem {
    summary: string;
    image: string;
    url: string;
    managementType: ManagementType;
}
const navArray: NavItem[] = [
    {
        summary: '학생 관리',
        image: studentIcon,
        url: pages.manageStudent,
        managementType: 'student',
    },
    {
        summary: '태그 관리',
        image: tagIcon,
        url: pages.manageTag,
        managementType: 'tag',
    },
    {
        summary: '기업 관리',
        image: companyIcon,
        url: pages.manageCompany,
        managementType: 'company',
    },
];
=======
import styled from '@emotion/styled';
import Link from 'next/link';
import { Profile } from '@packages/ui';
import Image from 'next/image';
import { companyIcon, studentIcon, tagIcon } from '../assets';
import { pages } from '../utils/constant';

type ManagementType = 'tag' | 'student' | 'company';

interface Props {
    managementType: ManagementType;
}

const SideBar = ({ managementType }: Props) => {
    return (
        <_Margin>
            <_Wrapper>
                <Profile type="school" width="90px" height="90px" />
                <_AccountType>선생님 계정</_AccountType>
                <_Navigation>
                    {navArray.map((item) => (
                        <Link href={item.url} key={item.managementType}>
                            <_NavButton isSelected={managementType === item.managementType}>
                                <Image src={item.image} width={26} height={26} />
                                <p className="managementType">{item.summary}</p>
                            </_NavButton>
                        </Link>
                    ))}
                </_Navigation>
            </_Wrapper>
        </_Margin>
    );
};
export default SideBar;

const _Margin = styled.div`
    margin-right: 360px;
`;

const _Wrapper = styled.aside`
    width: 360px;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.skyblue};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    position: fixed;
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
    display: flex;
    flex-wrap: wrap;
    gap: 15px 0;
`;

interface NavButtonProps {
    isSelected: boolean;
}
const _NavButton = styled.a<NavButtonProps>`
    width: 100%;
    height: 50px;
    padding: 12px 20px;
    display: flex;
    cursor: pointer;
    background-color: ${(props) => props.isSelected && '#477DE3'};
    > .managementType {
        margin-left: 19px;
        color: ${({ theme }) => theme.color.white};
        font-size: 20px;
        line-height: 25px;
        font-weight: 700;
    }
`;

interface NavItem {
    summary: string;
    image: string;
    url: string;
    managementType: ManagementType;
}
const navArray: NavItem[] = [
    {
        summary: '학생 관리',
        image: studentIcon,
        url: pages.manageStudent,
        managementType: 'student',
    },
    {
        summary: '태그 관리',
        image: tagIcon,
        url: pages.manageTag,
        managementType: 'tag',
    },
    {
        summary: '기업 관리',
        image: companyIcon,
        url: pages.manageCompany,
        managementType: 'company',
    },
];
>>>>>>> e00e9c85974154ffb8db7f5caf1c1292b3c3e366
