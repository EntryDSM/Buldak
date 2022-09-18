import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import FeedBack from './FeedBackRead';
import {WriteFeed} from './FeedBackWrite';

interface Props {
    text1: string;
    text2?: string;
    text3?: string;
    grade: number;
    color: string;
    feedback?: {
        isRead: boolean;
        feedInfo: string;
    };
    isTeacher?: boolean;
}

export default function Text({ color, grade, text1, text2, text3, feedback, isTeacher }: Props) {
    const [isSelected, setIsSelected] = useState(false);
    useEffect(() => {
        console.log(isTeacher);
    }, []);
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
                        <FeedBack feedInfo={feedback.feedInfo} isRead={feedback.isRead} />
                    )}
                    {isTeacher && (
                        <WriteFeed
                            isRead={feedback?.isRead}
                            feedInfo={feedback?.feedInfo}
                            isSelected={isSelected}
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
    width: 1000px;
    min-height: 44px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    border: ${(props) => (props.isSelected ? '1px solid ' + props.theme.color.skyblue : '')};
    #textWrapper {
        min-height: 44px;
        width: 1000px;
        padding: 10px 30px;
    }
    > p {
        font-size: 18px;
        word-break: break-all;
    }
`;
