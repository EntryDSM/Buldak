import styled from '@emotion/styled';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { FeedBackType } from '../types/Feedback';
import FeedBack from './FeedBackRead';
import FeedbackComment from './FeedbackComment';

interface Props {
    topText1: string;
    bottomText1: string;
    topText2?: string;
    bottomText2?: string;
    topText3?: string;
    bottomText3?: string;
    grade: number;
    color: string[];
    feedback?: FeedBackType;
    isTeacher?: boolean;
}

export default function DoubleText({
    topText1,
    bottomText2,
    bottomText1,
    bottomText3,
    grade,
    color,
    topText2,
    topText3,
    feedback,
    isTeacher,
}: Props) {
    const [isSelected, setIsSelected] = useState(false);

    if (grade == 1)
        return (
            <OutsideClickHandler
                onOutsideClick={() => {
                    setIsSelected(false);
                }}>
                <TotalWrapper isSelected={isSelected} onClick={() => setIsSelected(true)}>
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
                    <Wrapper>
                        <div id="top">
                            <p style={{ color: color[0] }}>{topText1}</p>
                        </div>
                        <div id="bottom">
                            <p style={{ color: color[1] }}>{bottomText1}</p>
                        </div>
                    </Wrapper>
                </TotalWrapper>
            </OutsideClickHandler>
        );
    if (grade == 2)
        return (
            <TotalWrapper>
                {feedback && <FeedBack feedInfo={feedback.feedInfo} isRead={feedback.isRead} />}
                <Wrapper style={{ width: '500px' }}>
                    <div id="top">
                        <p>{topText1}</p>
                    </div>
                    <div id="bottom">
                        <p>{bottomText1}</p>
                    </div>
                </Wrapper>
                <Wrapper style={{ width: '500px' }}>
                    <div id="top">
                        <p>{topText2}</p>
                    </div>
                    <div id="bottom">
                        <p>{bottomText2}</p>
                    </div>
                </Wrapper>
            </TotalWrapper>
        );
    if (grade == 3)
        return (
            <TotalWrapper>
                {feedback && <FeedBack feedInfo={feedback.feedInfo} isRead={feedback.isRead} />}
                <Wrapper style={{ width: '333px' }}>
                    <div id="top">
                        <p>{topText1}</p>
                    </div>
                    <div id="bottom">
                        <p>{bottomText1}</p>
                    </div>
                </Wrapper>
                <Wrapper style={{ width: '333px' }}>
                    <div id="top">
                        <p>{topText2}</p>
                    </div>
                    <div id="bottom">
                        <p>{bottomText2}</p>
                    </div>
                </Wrapper>
                <Wrapper style={{ width: '333px' }}>
                    <div id="top">
                        <p>{topText3}</p>
                    </div>
                    <div id="bottom">
                        <p>{bottomText3}</p>
                    </div>
                </Wrapper>
            </TotalWrapper>
        );
    return <></>;
}

const TotalWrapper = styled.div<{ isSelected?: boolean }>`
    border: ${(props) => (props.isSelected ? '1px solid ' + props.theme.color.skyblue : '')};
    position: relative;
    width: 530px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p {
    }
`;

const Wrapper = styled.div`
    width: 530px;
    min-height: 51px;
    > #top {
        min-height: 28px;
        width: 100%;
        font-size: 12px;
        word-break: break-all;
        padding: 7px 21px;
    }
    > #bottom {
        min-height: 23px;
        width: 100%;
        font-size: 10px;
        word-break: break-all;
        padding: 6px 23px;
    }
`;
