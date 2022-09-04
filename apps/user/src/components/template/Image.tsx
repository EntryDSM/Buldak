import styled from '@emotion/styled';

interface Props {
    url1: string;
    url2?: string;
    url3?: string;
    grade: number;
}

export default function Image({ url1, url2 = '', url3 = '', grade }: Props) {
    if (grade == 1)
        return (
            <Wrapper>
                <Img url={url1}></Img>
            </Wrapper>
        );
    if (grade == 2)
        return (
            <Wrapper>
                <Img style={{ width: '430px' }} url={url1} />
                <Img style={{ width: '430px' }} url={url2} />
            </Wrapper>
        );
    if (grade == 3)
        return (
            <Wrapper>
                <Img style={{ width: '280px' }} url={url1} />
                <Img style={{ width: '280px' }} url={url2} />
                <Img style={{ width: '280px' }} url={url3} />
            </Wrapper>
        );
    return <></>;
}

const Wrapper = styled.div`
    width: 1000px;
    height: 360px;
    border: 1px solid black;
    padding: 20px 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    > #img {
    }
`;
const Img = styled.div<{ url: string }>`
    width: 900px;
    height: 320px;
    background-image: url(${(props) => props.url});
    border: 1px solid black;

    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 10px;
`;
