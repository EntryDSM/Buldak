import styled from '@emotion/styled';

interface Props {
    url: string;
    topText: string;
    bottomText: string;
}

export default function TextImage({ url, bottomText, topText }: Props) {
    return (
        <Wrapper>
            <TextBox>
                <div id="top">
                    <p>{topText}</p>
                </div>
                <div id="bottom">
                    <p>{bottomText}</p>
                </div>
            </TextBox>
            <Img url={url}></Img>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 1000px;
    height: 360px;
    border: 1px solid black;
    padding: 20px 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const Img = styled.div<{ url: string }>`
    width: 440px;
    height: 320px;
    background-image: url(${(props) => props.url});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 10px;
    border: 1px solid black;
`;
const TextBox = styled.div`
    width: 430px;
    > #top {
        width: 100%;
        font-size: 25px;
        word-break: break-all;
        margin-bottom: 15px;
        font-weight: bold;
    }
    > #bottom {
        width: 100%;
        font-size: 18px;
        word-break: break-all;
    }
`;
