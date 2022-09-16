import styled from '@emotion/styled';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import FeedBack from './FeedBackRead';

interface Props {
    topText1: string;
    bottomText1: string;
    topText2?: string;
    bottomText2?: string;
    topText3?: string;
    bottomText3?: string;
    grade: number;
    color: string[];
    feedback?: {
        isRead: boolean;
        feedInfo: string;
    };
}

export default function DoubleText({
    topText1,
    bottomText2,
    bottomText1,
    bottomText3,
    grade,
    color,
    topText2,
    topText3,
    feedback,
}: Props) {
    const [isSelected, setIsSelected] = useState(false);

    if (grade == 1)
        return (
            <OutsideClickHandler
                onOutsideClick={() => {
                    setIsSelected(false);
                }}>
                <TotalWrapper isSelected={isSelected} onClick={() => setIsSelected(true)}>
                    {feedback?.feedInfo && <FeedBack feedInfo={feedback.feedInfo} isRead={feedback.isRead} />}
                    <Wrapper>
                        <div id="top">
                            <p style={{ color: color[0] }}>{topText1}</p>
                        </div>
                        <div id="bottom">
                            <p style={{ color: color[1] }}>{bottomText1}</p>
                        </div>
                    </Wrapper>
                </TotalWrapper>
            </OutsideClickHandler>
        );
    if (grade == 2)
        return (
            <TotalWrapper>
                {feedback && <FeedBack feedInfo={feedback.feedInfo} isRead={feedback.isRead} />}
                <Wrapper style={{ width: '500px' }}>
                    <div id="top">
                        <p>{topText1}</p>
                    </div>
                    <div id="bottom">
                        <p>{bottomText1}</p>
                    </div>
                </Wrapper>
                <Wrapper style={{ width: '500px' }}>
                    <div id="top">
                        <p>{topText2}</p>
                    </div>
                    <div id="bottom">
                        <p>{bottomText2}</p>
                    </div>
                </Wrapper>
            </TotalWrapper>
        );
    if (grade == 3)
        return (
            <TotalWrapper>
                {feedback && <FeedBack feedInfo={feedback.feedInfo} isRead={feedback.isRead} />}
                <Wrapper style={{ width: '333px' }}>
                    <div id="top">
                        <p>{topText1}</p>
                    </div>
                    <div id="bottom">
                        <p>{bottomText1}</p>
                    </div>
                </Wrapper>
                <Wrapper style={{ width: '333px' }}>
                    <div id="top">
                        <p>{topText2}</p>
                    </div>
                    <div id="bottom">
                        <p>{bottomText2}</p>
                    </div>
                </Wrapper>
                <Wrapper style={{ width: '333px' }}>
                    <div id="top">
                        <p>{topText3}</p>
                    </div>
                    <div id="bottom">
                        <p>{bottomText3}</p>
                    </div>
                </Wrapper>
            </TotalWrapper>
        );
    return <></>;
}

const TotalWrapper = styled.div<{ isSelected?: boolean }>`
    border: ${(props) => (props.isSelected ? '1px solid ' + props.theme.color.skyblue : '')};

    position: relative;
    width: 1000px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p {
    }
`;

const Wrapper = styled.div`
    width: 1000px;
    min-height: 96px;
    > #top {
        min-height: 52px;
        width: 100%;
        font-size: 22px;
        word-break: break-all;
        padding: 13px 40px;
    }
    > #bottom {
        min-height: 44px;
        width: 100%;
        font-size: 18px;
        word-break: break-all;
        padding: 11px 40px;
    }
`;
