import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import FeedBack from './FeedBack';

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
}

export default function Text({ color, grade, text1, text2, text3, feedback }: Props) {
    const [isSelected, setIsSelected] = useState(false);
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
                    {feedback?.feedInfo && (
                        <FeedBack feedInfo={feedback.feedInfo} isRead={feedback.isRead} />
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
    border-collapse: collapse;
    box-sizing: content-box;
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
