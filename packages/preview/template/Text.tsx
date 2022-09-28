import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { FeedBackType } from '../types/Feedback';
import FeedBack from './FeedBackRead';
import FeedbackComment from './FeedbackComment';

interface Props {
    text1: string;
    text2?: string;
    text3?: string;
    grade: number;
    color: string;
    feedback?: FeedBackType;
    isTeacher?: boolean;
}

export default function Text({ color, grade, text1, text2, text3, feedback, isTeacher }: Props) {
    const [isSelected, setIsSelected] = useState<boolean>(false);
    if (grade == 1)
        return (
            <OutsideClickHandler
                onOutsideClick={() => {
                    setIsSelected(false);
                }}>
                <Wrapper
                    isSelected={isSelected}
                    onClick={() => setIsSelected(true)}
                    style={{ color: color }}>
                    <div id="textWrapper">
                        <p>{text1}</p>
                    </div>
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
                </Wrapper>
            </OutsideClickHandler>
        );
    if (grade == 2)
        return (
            <Wrapper style={{ color: color }}>
                <div style={{ width: '500px' }}>
                    <p>{text1}</p>
                </div>
                <div style={{ width: '500px' }}>
                    <p>{text2}</p>
                </div>
            </Wrapper>
        );
    if (grade == 3)
        return (
            <Wrapper style={{ color: color }}>
                <div style={{ width: '333px' }}>
                    <p>{text1}</p>
                </div>
                <div style={{ width: '333px' }}>
                    <p>{text2}</p>
                </div>
                <div style={{ width: '333px' }}>
                    <p>{text3}</p>
                </div>
            </Wrapper>
        );
    return <></>;
}

const Wrapper = styled.div<{ isSelected?: boolean }>`
    width: 530px;
    min-height: 23px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    border: ${(props) => (props.isSelected ? '1px solid ' + props.theme.color.skyblue : '')};
    #textWrapper {
        min-height: 23px;
        width: 530px;
        padding: 5px 16px;
        > p {
            font-size: 12px;
            word-break: break-all;
        }
    }
`;
