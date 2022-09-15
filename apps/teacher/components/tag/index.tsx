import styled from '@emotion/styled';
import { Tag } from '@packages/ui';
import { createTag, deleteTag } from '../../api/tags';
import { TagInfo } from '../../models/tags/responses';
import AddInputButton from '../AddInputButton';
import { useRouter } from 'next/router';

type listType = '태그' | '대표분야';

interface Props {
    listType: listType;
    list: TagInfo[];
    addTagIsSuccess: () => void;
}

const TagList = ({ listType, list, addTagIsSuccess }: Props) => {
    const router = useRouter();
    const onClickCreateTag = (name: string) => {
        createTag({
            name,
            is_major: listType === '대표분야',
        }).then(() => {
            addTagIsSuccess();
        });
    };
    // todo : 태그에 onClick Event 연결하기
    const onClickDeleteTag = (id: string) => {
        deleteTag(id).then(() => {
            router.reload();
        });
    };
    return (
        <_Wrapper>
            <_FlexWrapper>
                <_ListType>{listType} 목록</_ListType>
                <AddInputButton onClickCreate={onClickCreateTag} />
            </_FlexWrapper>
            <_List>
                {list.length !== 0 ? (
                    list.map((info) => (
                        <div onClick={() => onClickDeleteTag(info.tag_id)}>
                            <Tag color="bdblue" tagName={info.name} />
                        </div>
                    ))
                ) : (
                    <EmptyArea listType={listType} />
                )}
            </_List>
        </_Wrapper>
    );
};
export default TagList;

const EmptyArea = ({ listType }: { listType: listType }) => {
    return <_Empty>{listType}가 존재하지 않습니다.</_Empty>;
};

const _Wrapper = styled.section``;

const _FlexWrapper = styled.div`
    display: flex;
    margin-top: 30px;
`;
const _ListType = styled.strong`
    font-size: 23px;
    line-height: 29px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.black};
`;
const _List = styled.ul`
    margin-top: 20px;
    max-height: 210px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    overflow: scroll;
`;
const _Empty = styled.em`
    font-size: 22px;
    line-height: 28px;
    color: ${({ theme }) => theme.color.gray700};
    font-weight: 500;
`;
