import styled from '@emotion/styled';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { FeedBackType } from '../types/Feedback';
import FeedBack from './FeedBackRead';
import FeedbackComment from './FeedbackComment';

interface Props {
    height: number;
    feedback?: FeedBackType;
    isTeacher?: boolean;
}

export default function Gap({ height, feedback, isTeacher }: Props) {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <OutsideClickHandler
            onOutsideClick={() => {
                setIsSelected(false);
            }}>
            <Wrapper
                isSelected={isSelected}
                onClick={() => setIsSelected(true)}
                style={{ height: `${height}px` }}>
                {!isTeacher && feedback?.feedInfo && (
                    <FeedBack
                        feedInfo={feedback.feedInfo}
                        isRead={feedback.isRead}
                        sequence={feedback.sequence}
                    />
                )}
                {isTeacher && (
                    <FeedbackComment
                        isRead={feedback?.isRead}
                        feedInfo={feedback?.feedInfo}
                        isSelected={isSelected}
                        sequence={feedback?.sequence}
                    />
                )}{' '}
            </Wrapper>
        </OutsideClickHandler>
    );
}

const Wrapper = styled.div<{ isSelected?: boolean }>`
    border: ${(props) => (props.isSelected ? '1px solid ' + props.theme.color.skyblue : '')};

    position: relative;
    width: 530px;
    height: 27px;
`;
