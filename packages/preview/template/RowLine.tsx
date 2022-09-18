import styled from '@emotion/styled';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { FeedBackType } from '../types/Feedback';
import FeedBack from './FeedBackRead';
import {WriteFeed} from './FeedBackWrite';

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
                    <FeedBack feedInfo={feedback.feedInfo} isRead={feedback.isRead} />
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
    width: 1000px;
    height: 44px;
    padding: 21px 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    > #line {
        width: 800px;
        height: 2px;
        border-radius: 100px;
        background-color: ${({ theme }) => theme.color.gray300};
    }
`;
