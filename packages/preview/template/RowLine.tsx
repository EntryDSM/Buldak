import styled from '@emotion/styled';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { FeedBackType } from '../types/Feedback';
import FeedBack from './FeedBackRead';
import { WriteFeed } from './FeedBackWrite';

interface Props {
    height: number;
    feedback?: FeedBackType;
    isTeacher?: boolean;
}

export default function RowLine({ height, feedback, isTeacher }: Props) {
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
                        sequence={feedback.sequence}
                        isRead={feedback.isRead}
                    />
                )}
                {isTeacher && (
                    <WriteFeed
                        isRead={feedback?.isRead}
                        feedInfo={feedback?.feedInfo}
                        sequence={feedback?.sequence}
                        isSelected={isSelected}
                    />
                )}
                <div id="line" />
            </Wrapper>
        </OutsideClickHandler>
    );
}

const Wrapper = styled.div<{ isSelected?: boolean }>`
    border: ${(props) => (props.isSelected ? '1px solid ' + props.theme.color.skyblue : '')};

    position: relative;
    width: 530px;
    height: 23px;
    padding: 11px 53px;
    display: flex;
    align-items: center;
    justify-content: center;
    > #line {
        width: 424px;
        height: 1px;
        border-radius: 100px;
        background-color: ${({ theme }) => theme.color.gray300};
    }
`;
