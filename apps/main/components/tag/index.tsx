import styled from '@emotion/styled';
import AddInputButton from '../AddInputButton';
import { Tag, TextBox } from '@packages/ui';

const TagList = () => {
    return (
        <_Wrapper>
            <_Title>현재 있는 태그 목록</_Title>
            <_InputWrapper>
                <TextBox
                    width={300}
                    type="search"
                    correct={true}
                    placeholder="검색어를 입력해 주세요"
                />
            </_InputWrapper>
            <_FlexWrapper>
                <_ListType>태그 목록</_ListType>
                <AddInputButton />
            </_FlexWrapper>
            <_List>
                <EmptyArea listType="태그" />
            </_List>
            <_FlexWrapper>
                <_ListType>대표분야 목록</_ListType>
                <AddInputButton />
            </_FlexWrapper>
            <_List>
                {/*<EmptyArea listType="대표분야" />*/}
                {Array(20)
                    .fill(void 0)
                    .map((item, index) => (
                        <Tag color="bdblue" tagName={String(index)} />
                    ))}
            </_List>
        </_Wrapper>
    );
};
export default TagList;

type listType = '태그' | '대표분야';

const EmptyArea = ({ listType }: { listType: listType }) => {
    return <_Empty>{listType}가 존재하지 않습니다.</_Empty>;
};

const _Wrapper = styled.section`
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
const _Tag = styled.li`
    width: 100px;
    height: 36px;
    background-color: ${({ theme }) => theme.color.gray500};
    border-radius: 100px;
`;
