import styled from '@emotion/styled';
import { Tag } from '@packages/ui';
import { createTag } from '../../api/tags';
import { TagInfo } from '../../models/tags/responses';
import AddInputButton from '../AddInputButton';

type listType = '태그' | '대표분야';

interface Props {
    listType: listType;
    list: TagInfo[];
}

const TagList = ({ listType, list }: Props) => {
    const onClickCreateTag = (name: string) => {
        createTag({
            name,
            is_major: listType === '대표분야',
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
                    list.map((info) => <Tag color="bdblue" tagName={info.name} />)
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
