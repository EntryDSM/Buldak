import styled from '@emotion/styled';
import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import ModalCommitBtn from './ModalCommitBtn';
import ModalExplain from './ModalType';
import ModalSearchInput from './ModalSearchInput';
import { useResource } from '../../hook/useResource';
import { myInfomationResource, TagParams } from '../../utils/api/userResouce';
import useQueryDebounce from '../../hook/useQueryDebounce';
import useSearchTag from '../../hook/useSearchTag';
import { QueryClient, useMutation } from 'react-query';
import { majorTagConverter } from '../../utils/api/userConverter';
import { queryKey } from '../../utils/queryKey';

interface PropsType {
    setOpenRepresentativeModal: Dispatch<SetStateAction<boolean>>;
}

function RepresentativeModal({ setOpenRepresentativeModal }: PropsType) {
    const { data: myInfomationData, refetch } = useResource(myInfomationResource);
    const [searchMajor, setSearchMajor] = useState<string>('');
    const debounceSearchMajor = useQueryDebounce(searchMajor, 300);
    const { data: searchTagResult } = useSearchTag(debounceSearchMajor, true);
    const [selectMajor, setSelectMajor] = useState<Record<TagParams, string>>({
        name: '',
        tag_id: '',
    });
    const searchMemoResult = useMemo(
        () => searchTagResult?.tag_list.map((info) => info.name),
        [searchTagResult],
    );
    const queryClient = new QueryClient();
    const { mutate: majorTagMutate } = useMutation(majorTagConverter, {
        onSuccess: () => {
            refetch();
            setOpenRepresentativeModal(false);
        },
    });

    const infoChange = (textValue: string) => {
        const tagInfo = searchTagResult?.tag_list.find((info) => info.name === textValue);
        tagInfo && setSelectMajor(tagInfo);
    };

    return (
        <_Background onClick={() => setOpenRepresentativeModal(false)}>
            <_AddTagBox onClick={(e) => e.stopPropagation()}>
                <ModalExplain
                    title="대표분야 설정"
                    setIsOpen={() => setOpenRepresentativeModal(false)}
                />
                <_ContentBox>
                    <ModalSearchInput
                        subtitle="대표분야 검색"
                        placeholder="대표분야를 검색해주세요"
                        addTags={(value) => infoChange(value)}
                        searchTagInfo={searchMemoResult}
                        onChange={(e) => setSearchMajor(e.currentTarget.value)}
                    />
                    <_Representative>
                        대표분야 :{' '}
                        <strong>{selectMajor.name || myInfomationData?.major_tag}</strong>
                    </_Representative>
                </_ContentBox>
                <ModalCommitBtn
                    content="설정하기"
                    onClick={() => majorTagMutate(selectMajor.tag_id)}
                />
            </_AddTagBox>
        </_Background>
    );
}

const _Representative = styled.p`
    font-size: 20px;
    margin-top: 15px;
    > strong {
        color: ${({ theme }) => theme.color.main};
    }
`;

const _ContentBox = styled.div`
    padding: 0px 50px;
    height: 295px;
`;

const _Background = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.4);
`;

const _AddTagBox = styled.div`
    width: 700px;
    height: 450px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.color.white};
`;

export default RepresentativeModal;
