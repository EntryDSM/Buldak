import styled from '@emotion/styled';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { FeedBackType } from '../types/Feedback';
import FeedBack from './FeedBackRead';
import { WriteFeed } from './FeedBackWrite';

interface Props {
    text: string;
    color: string;
    feedback?: FeedBackType;
    isTeacher?: boolean;
}

export default function List({ color, text, feedback, isTeacher }: Props) {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <OutsideClickHandler
            onOutsideClick={() => {
                setIsSelected(false);
            }}>
            <Wrapper
                isSelected={isSelected}
                onClick={() => setIsSelected(true)}
                style={{ color: color[0] }}>
                {!isTeacher && feedback?.feedInfo && (
                    <FeedBack feedInfo={feedback.feedInfo} isRead={feedback.isRead} />
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
                    <EachList color={color} value={text} />
                </TextBox>
            </Wrapper>
        </OutsideClickHandler>
    );
}

interface EachListProps {
    value: string;
    color: string;
}

const EachList = ({ value, color }: EachListProps) => {
    return (
        <EachListWrapper>
            <Dot />
            <EachListText>
                <p style={{ color: color }}>{value}</p>
            </EachListText>
        </EachListWrapper>
    );
};

const Wrapper = styled.div<{ isSelected?: boolean }>`
    border: ${(props) => (props.isSelected ? '1px solid ' + props.theme.color.skyblue : '')};

    position: relative;
    width: 1000px;
    height: 40px;
    padding: 5px 50px;
    > p {
        font-size: 22px;
        margin-bottom: 10px;
    }
`;

const TextBox = styled.div`
    width: 800px;
    min-height: 165px;
`;

const Dot = styled.div`
    width: 3px;
    height: 3px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.color.gray900};
    position: absolute;
    left: -10px;
    top: 10px;
`;

const EachListWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const EachListText = styled.div`
    width: calc(100% - 28px);
    min-height: 48px;
    > p {
        font-size: 19px;
    }
`;
