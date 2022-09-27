import styled from '@emotion/styled';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { FeedBackType } from '../types/Feedback';
import FeedBack from './FeedBackRead';
import FeedbackComment from './FeedbackComment';

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
                )}
                <div>
                    <EachList color={color} value={text} />
                </div>
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
    width: 530px;
    min-height: 21px;
    height: fit-content;
    padding: 3px 27px;
    > p {
        font-size: 12px;
        margin-bottom: 4px;
    }
`;

const Dot = styled.div`
    width: 2px;
    height: 2px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.color.gray900};
    position: absolute;
    left: -6px;
    top: 6px;
`;

const EachListWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 4px;
`;

const EachListText = styled.div`
    width: calc(100% - 15px);
    height: fit-content;
`;
