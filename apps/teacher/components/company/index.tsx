import styled from '@emotion/styled';
import CompanyBox from './Box';
import { Button, TextBox } from '@packages/ui';
import { theme } from '@packages/emotion-style-provider/src/theme';
import Link from 'next/link';
import { ChangeEvent } from 'react';
import { CompanyInfo } from '../../models/teachers/responses';

interface Props {
    searchName: string;
    onChangeSearchName: (e: ChangeEvent<HTMLInputElement>) => void;
    companyList: CompanyInfo[];
}

const ManageCompany = ({ searchName, onChangeSearchName, companyList }: Props) => {
    return (
        <_Wrapper>
            <_Title>전체 기업 리스트</_Title>
            <_FlexWrapper>
                <TextBox
                    width={400}
                    type="search"
                    correct={true}
                    placeholder="검색어를 입력해주세요"
                    value={searchName}
                    onChange={onChangeSearchName}
                />
                <Link href={'/add-company'}>
                    <Button width={44} height={44} backgroundColor={theme.color.skyblue} />
                </Link>
            </_FlexWrapper>
            <_List>
                {companyList.map((i) => (
                    <CompanyBox companyInfo={i} />
                ))}
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
    > div {
        height: 44px;
    }
    > button {
        margin-left: 15px;
    }
`;
const _List = styled.ul`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px 0;
`;
