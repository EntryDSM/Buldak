import styled from '@emotion/styled';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { NoImg } from '../assets';
import { FeedBackType } from '../types/Feedback';
import FeedBack from './FeedBackRead';
import FeedbackComment from './FeedbackComment';

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
                    <FeedbackComment
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
    width: 530px;
    height: 191px;
    padding: 11px 27px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const Img = styled.div<{ url: string }>`
    width: 223px;
    height: 170px;
    background-image: url(${(props) => props.url});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.gray300};
`;
const TextBox = styled.div`
    width: 228px;
    > #top {
        width: 100%;
        font-size: 13px;
        word-break: break-all;
        margin-bottom: 8px;
        font-weight: bold;
    }
    > #bottom {
        width: 100%;
        font-size: 10px;
        word-break: break-all;
    }
`;
