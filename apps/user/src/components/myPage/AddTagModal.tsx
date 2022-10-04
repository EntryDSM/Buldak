import styled from '@emotion/styled';
import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import Close from '../../assets/svgs/Close';
import ModalCommitBtn from './ModalCommitBtn';
import ModalExplain from './ModalType';
import ModalSearchInput from './ModalSearchInput';
import useQueryDebounce from '../../hook/useQueryDebounce';
import useSearchTag from '../../hook/useSearchTag';
import { QueryClient, useMutation, useQuery } from 'react-query';
import { tagDeleteConverter, tagSettingConverter } from '../../utils/api/userConverter';
import { queryKey } from '../../utils/queryKey';
import { DropDown } from '@packages/ui';
import { myInfomationResource, TagListParams } from '../../utils/api/userResouce';
interface PropsType {
    setOpenAddTagModal: Dispatch<SetStateAction<boolean>>;
}

function AddTagModal({ setOpenAddTagModal }: PropsType) {
    const [searchTagInfo, setSearchTagInfo] = useState<string>('');
    const debounceSearchInput = useQueryDebounce(searchTagInfo, 300);
    const queryClient = new QueryClient();
    const { data: myInformation } = useQuery(myInfomationResource);
    const { mutate: tagSettingMutate } = useMutation(tagSettingConverter, {
        onSuccess: () => {
            queryClient.invalidateQueries([queryKey.students.index()]);
            setOpenAddTagModal(false);
        },
    });
    const { data: searchTagResult } = useSearchTag(debounceSearchInput, false);
    const [selectTag, setSelectTag] = useState<TagListParams>(
        myInformation?.skill_tag_list.map((x) => ({ tag_id: x.id, name: x.name })) || [],
    );

    const infoChange = (textValue: string) => {
        const tagInfo = searchTagResult?.tag_list.find((info) => info.name === textValue);
        const duplicateInfo = selectTag.find((info) => info.name === textValue);
        !duplicateInfo && tagInfo && setSelectTag((state) => [...state, tagInfo]);
    };

    const deleteInfo = (textValue: string) => {
        setSelectTag((state) => state.filter((info) => info.name !== textValue));
    };

    const deleteMenu = useMemo(
        () => searchTagResult?.tag_list.map((info) => info.name),
        [searchTagResult],
    );
    return (
        <Background onClick={() => setOpenAddTagModal(false)}>
            <RepresentativeBox onClick={(e) => e.stopPropagation()}>
                <ModalExplain title="태그 추가" setIsOpen={() => setOpenAddTagModal(false)} />
                <ContentBox>
                    <ModalSearchInput
                        subtitle="기술스택"
                        placeholder="태그를 검색해주세요"
                        addTags={infoChange}
                        searchTagInfo={deleteMenu}
                        onChange={(e) => setSearchTagInfo(e.currentTarget.value)}
                    />
                    <TagContainer>
                        {selectTag.map((tagInfo) => (
                            <TagBox key={tagInfo.tag_id} onClick={() => deleteInfo(tagInfo.name)}>
                                <span>{tagInfo.name}</span>
                                <Close />
                            </TagBox>
                        ))}
                    </TagContainer>
                </ContentBox>
                <ModalCommitBtn
                    content="추가하기"
                    onClick={() => {
                        tagSettingMutate(selectTag.map((info) => info.tag_id));
                    }}
                />
            </RepresentativeBox>
        </Background>
    );
}

const ContentBox = styled.div`
    padding: 0px 50px;
`;

const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 300px;
    overflow-y: auto;
`;

const TagBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.background};
    border-radius: 100px;
    height: 40px;
    font-size: 18px;
    padding: 0px 15px;
    margin: 20px 20px 0px 0px;
    > span {
        margin-right: 10px;
    }
`;

const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.4);
`;

const RepresentativeBox = styled.div`
    width: 700px;
    height: 550px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.color.white};
`;

export default AddTagModal;
