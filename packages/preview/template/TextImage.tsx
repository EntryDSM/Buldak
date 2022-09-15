import styled from '@emotion/styled';
import { NoImg } from '../assets';
import FeedBack from './FeedBack';

interface Props {
    url: string;
    topText: string;
    bottomText: string;
    color:string;
    feedback?: {
        isRead: boolean;
        feedInfo: string;
    };
}

export default function TextImage({color,url, bottomText, topText }: Props) {
    return (
        <Wrapper style={{color:color}}>
            <TextBox>
                <div id="top">
                    <p>{topText}</p>
                </div>
                <div id="bottom">
                    <p>{bottomText}</p>
                </div>
            </TextBox>
            <Img url={url}>{!url && <NoImg />}</Img>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    width: 1000px;
    height: 360px;
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
