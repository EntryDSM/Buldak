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
                            <pre style={{ color: color[0] }}>{topText1}</pre>
                        </div>
                        <div id="bottom">
                            <pre style={{ color: color[1] }}>{bottomText1}</pre>
                        </div>
                    </Wrapper>
                </TotalWrapper>
            </OutsideClickHandler>
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
    pre {
        white-space: pre-wrap;
        word-break: break-all;
    }
    > #top {
        min-height: 28px;
        width: 100%;
        font-size: 12px;
        padding: 7px 21px;
    }
    > #bottom {
        min-height: 23px;
        width: 100%;
        font-size: 10px;
        padding: 6px 23px;
    }
`;
