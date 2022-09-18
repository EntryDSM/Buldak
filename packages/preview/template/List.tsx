import styled from '@emotion/styled';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { FeedBackType } from '../types/Feedback';
import FeedBack from './FeedBackRead';
import {WriteFeed} from './FeedBackWrite';

interface Props {
    title: string;
    list: string[];
    color: string;
    feedback?: FeedBackType;
    isTeacher?: boolean;
}

export default function List({ color, title, list, feedback, isTeacher }: Props) {
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
                )}{' '}
                <p>{title}</p>
                <TextBox>
                    {list.map((value) => (
                        <EachList color={color[1]} value={value} />
                    ))}
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
    min-height: 285px;
    padding: 41px 96px;
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
    width: 0px;
    height: 0px;
    padding: 2.5px;
    margin-left: 10px;
    margin-top: 8px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.color.gray900};
`;

const EachListWrapper = styled.div`
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
