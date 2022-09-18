import styled from '@emotion/styled';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { NoImg } from '../assets';
import { FeedBackType } from '../types/Feedback';
import FeedBack from './FeedBackRead';
import { WriteFeed } from './FeedBackWrite';

interface Props {
    url: string;
    topText: string;
    bottomText: string;
    feedback?: FeedBackType;
    isTeacher?: boolean;
}

export default function TextImage({ url, bottomText, topText, feedback, isTeacher }: Props) {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <OutsideClickHandler
            onOutsideClick={() => {
                setIsSelected(false);
            }}>
            <Wrapper isSelected={isSelected} onClick={() => setIsSelected(true)}>
                {!isTeacher && feedback?.feedInfo && (
                    <FeedBack
                        feedInfo={feedback.feedInfo}
                        sequence={feedback.sequence}
                        isRead={feedback.isRead}
                    />
                )}
                {isTeacher && (
                    <WriteFeed
                        isRead={feedback?.isRead}
                        feedInfo={feedback?.feedInfo}
                        isSelected={isSelected}
                        sequence={feedback?.sequence}
                    />
                )}
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
        </OutsideClickHandler>
    );
}

const Wrapper = styled.div<{ isSelected?: boolean }>`
    border: ${(props) => (props.isSelected ? '1px solid ' + props.theme.color.skyblue : '')};

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
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.gray300};
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
