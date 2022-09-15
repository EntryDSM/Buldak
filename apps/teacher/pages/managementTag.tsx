<<<<<<< Updated upstream:apps/teacher/pages/managementTag.tsx
=======
<<<<<<< HEAD:apps/teacher/pages/management-tag.tsx
import styled from '@emotion/styled';
import { TextBox } from '@packages/ui';
import { ChangeEvent, useEffect, useState } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { searchTag } from '../api/tags';
import SideBar from '../components/SideBar';
import TagList from '../components/tag';
import useDebounce from '../hooks/useDebounce';
import { queryKeys } from '../utils/constant';

const ManagementTag = () => {
    const [keyword, setKeyword] = useState('');
    const [name, setName] = useState('');
    const [tagIsAdded, setTagIsAdded] = useState(false);
    const { debounce } = useDebounce();
    const { data: commonTagList } = useQuery(['getCommonTagList', keyword, tagIsAdded], () =>
        searchTag(keyword, false),
    );
    const { data: majorTagList } = useQuery(['getMajorTagList', keyword, tagIsAdded], () =>
        searchTag(keyword, true),
    );
    useEffect(() => {
        setTagIsAdded(false);
    }, [commonTagList, majorTagList]);
    const debounceOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        debounce(() => setKeyword(e.target.value), 500);
        setName(e.target.value);
    };
    const addTagIsSuccess = () => {
        setTagIsAdded(true);
    };
    return (
        <_Wrapper>
            <SideBar managementType="tag" />
            <_ListWrapper>
                <_Title>현재 있는 태그 목록</_Title>
                <_InputWrapper>
                    <TextBox
                        width={300}
                        type="search"
                        correct={true}
                        placeholder="검색어를 입력해 주세요"
                        onChange={debounceOnChangeInput}
                        name="name"
                        value={name}
                    />
                </_InputWrapper>
                <TagList
                    listType="태그"
                    list={commonTagList?.tag_list || []}
                    addTagIsSuccess={addTagIsSuccess}
                />
                <TagList
                    listType="대표분야"
                    list={majorTagList?.tag_list || []}
                    addTagIsSuccess={addTagIsSuccess}
                />
            </_ListWrapper>
        </_Wrapper>
    );
};
export default ManagementTag;

export async function getServerSideProps() {
    const queryClient = new QueryClient();
    queryClient.prefetchQuery([queryKeys.getCommonTagList], () => searchTag('', false));
    queryClient.prefetchQuery([queryKeys.getMajorTagList], () => searchTag('', true));
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}

const _Wrapper = styled.section`
    display: flex;
`;
const _ListWrapper = styled.div`
    box-sizing: border-box;
    padding: 50px 0 0 70px;
    width: calc(100vw - 360px);
`;
const _Title = styled.h1`
    font-size: 25px;
    line-height: 31px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.black};
`;
const _InputWrapper = styled.div`
    margin-top: 24px;
`;
=======
>>>>>>> Stashed changes:apps/teacher/pages/management-tag.tsx
import styled from '@emotion/styled';
import { TextBox } from '@packages/ui';
import { ChangeEvent, useEffect, useState } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { searchTag } from '../api/tags';
import SideBar from '../components/SideBar';
import TagList from '../components/tag';
import useDebounce from '../hooks/useDebounce';
<<<<<<< Updated upstream:apps/teacher/pages/managementTag.tsx
=======
import { queryKeys } from '../utils/constant';
>>>>>>> Stashed changes:apps/teacher/pages/management-tag.tsx

const ManagementTag = () => {
    const [keyword, setKeyword] = useState('');
    const [name, setName] = useState('');
    const [tagIsAdded, setTagIsAdded] = useState(false);
    const { debounce } = useDebounce();
    const { data: commonTagList } = useQuery(['getCommonTagList', keyword, tagIsAdded], () =>
        searchTag(keyword, false),
    );
    const { data: majorTagList } = useQuery(['getMajorTagList', keyword, tagIsAdded], () =>
        searchTag(keyword, true),
    );
    useEffect(() => {
        setTagIsAdded(false);
    }, [commonTagList, majorTagList]);
    const debounceOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        debounce(() => setKeyword(e.target.value), 500);
        setName(e.target.value);
    };
    const addTagIsSuccess = () => {
        setTagIsAdded(true);
    };
    return (
        <_Wrapper>
            <SideBar managementType="tag" />
            <_ListWrapper>
                <_Title>현재 있는 태그 목록</_Title>
                <_InputWrapper>
                    <TextBox
                        width={300}
                        type="search"
                        correct={true}
                        placeholder="검색어를 입력해 주세요"
                        onChange={debounceOnChangeInput}
                        name="name"
                        value={name}
                    />
                </_InputWrapper>
                <TagList
                    listType="태그"
                    list={commonTagList?.tag_list || []}
                    addTagIsSuccess={addTagIsSuccess}
                />
                <TagList
                    listType="대표분야"
                    list={majorTagList?.tag_list || []}
                    addTagIsSuccess={addTagIsSuccess}
                />
            </_ListWrapper>
        </_Wrapper>
    );
};
export default ManagementTag;

export async function getServerSideProps() {
    const queryClient = new QueryClient();
<<<<<<< Updated upstream:apps/teacher/pages/managementTag.tsx
    queryClient.prefetchQuery(['getCommonTagList', () => searchTag('', false)]);
    queryClient.prefetchQuery(['getMajorTagList'], () => searchTag('', true));
=======
    queryClient.prefetchQuery([queryKeys.getCommonTagList], () => searchTag('', false));
    queryClient.prefetchQuery([queryKeys.getMajorTagList], () => searchTag('', true));
>>>>>>> Stashed changes:apps/teacher/pages/management-tag.tsx
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}

const _Wrapper = styled.section`
    display: flex;
`;
const _ListWrapper = styled.div`
    box-sizing: border-box;
    padding: 50px 0 0 70px;
    width: calc(100vw - 360px);
`;
const _Title = styled.h1`
    font-size: 25px;
    line-height: 31px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.black};
`;
const _InputWrapper = styled.div`
    margin-top: 24px;
`;
<<<<<<< Updated upstream:apps/teacher/pages/managementTag.tsx
=======
>>>>>>> e00e9c85974154ffb8db7f5caf1c1292b3c3e366:apps/teacher/pages/managementTag.tsx
>>>>>>> Stashed changes:apps/teacher/pages/management-tag.tsx
