import styled from '@emotion/styled';

interface Props {
    title: string;
    list: string[];
}

export default function List({ title, list }: Props) {
    return (
        <Wrapper>
            <p>{title}</p>
            <TextBox>
                {list.map((value) => (
                    <EachList value={value} />
                ))}
            </TextBox>
        </Wrapper>
    );
}

const EachList = ({ value }: { value: string }) => {
    return (
        <EachListWrapper>
            <Dot />
            <EachListText>
                <p>{value}</p>
            </EachListText>
        </EachListWrapper>
    );
};

const Wrapper = styled.div`
    position:relative;

    width: 1000px;
    min-height: 285px;
    border: 1px solid black;
    padding: 41px 96px;
    > p {
        font-size: 22px;
        margin-bottom: 10px;
    }
`;

const TextBox = styled.div`
    border: 1px solid black;
    width: 800px;
    min-height: 165px;
`;

const Dot = styled.div`
    width: 0px;
    height: 0px;
    padding: 2.5px;
    margin-left: 10px;
    margin-top: 8px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.color.gray900};
`;

const EachListWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const EachListText = styled.div`
    width: calc(100% - 28px);
    min-height: 48px;
    > p {
        font-size: 19px;
    }
`;
