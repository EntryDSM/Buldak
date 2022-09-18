import styled from '@emotion/styled';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import FeedBack from './FeedBackRead';
import {WriteFeed} from './FeedBackWrite';

interface Props {
    height: number;
    feedback?: {
        isRead: boolean;
        feedInfo: string;
    };
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
                    <FeedBack feedInfo={feedback.feedInfo} isRead={feedback.isRead} />
                )}
                {isTeacher && (
                    <WriteFeed
                        isRead={feedback?.isRead}
                        feedInfo={feedback?.feedInfo}
                        isSelected={isSelected}
                    />
                )}{' '}
            </Wrapper>
        </OutsideClickHandler>
    );
}

const Wrapper = styled.div<{ isSelected?: boolean }>`
    border: ${(props) => (props.isSelected ? '1px solid ' + props.theme.color.skyblue : '')};

    position: relative;
    width: 1000px;
    height: 50px;
`;
