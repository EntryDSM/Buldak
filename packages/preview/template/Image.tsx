import styled from '@emotion/styled';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { NoImg } from '../assets';
import FeedBack from './FeedBackRead';
import {WriteFeed} from './FeedBackWrite';

interface Props {
    url1: string;
    url2?: string;
    url3?: string;
    grade: number;
    feedback?: {
        isRead: boolean;
        feedInfo: string;
    };
    isTeacher?: boolean;
}

export default function Image({ url1, url2 = '', url3 = '', grade, feedback, isTeacher }: Props) {
    const [isSelected, setIsSelected] = useState(false);

    if (grade == 1)
        return (
            <OutsideClickHandler
                onOutsideClick={() => {
                    setIsSelected(false);
                }}>
                <Wrapper isSelected={isSelected} onClick={() => setIsSelected(true)}>
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
                    <Img url={url1}>{url1 ? <></> : <NoImg />}</Img>
                </Wrapper>
            </OutsideClickHandler>
        );
    if (grade == 2)
        return (
            <Wrapper>
                {feedback && <FeedBack feedInfo={feedback.feedInfo} isRead={feedback.isRead} />}
                <Img style={{ width: '430px' }} url={url1}>
                    {url1 ? <></> : <NoImg />}
                </Img>
                <Img style={{ width: '430px' }} url={url2}>
                    {url2 ? <></> : <NoImg />}
                </Img>
            </Wrapper>
        );
    if (grade == 3)
        return (
            <Wrapper>
                {feedback && <FeedBack feedInfo={feedback.feedInfo} isRead={feedback.isRead} />}
                <Img style={{ width: '280px' }} url={url1}>
                    {url1 ? <></> : <NoImg />}
                </Img>
                <Img style={{ width: '280px' }} url={url2}>
                    {url2 ? <></> : <NoImg />}
                </Img>
                <Img style={{ width: '280px' }} url={url3}>
                    {url3 ? <></> : <NoImg />}
                </Img>
            </Wrapper>
        );
    return <></>;
}

const Wrapper = styled.div<{ isSelected?: boolean }>`
    border: ${(props) => (props.isSelected ? '1px solid ' + props.theme.color.skyblue : '')};

    position: relative;
    width: 1000px;
    height: 360px;
    padding: 20px 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    > #img {
    }
`;
const Img = styled.div<{ url: string }>`
    width: 900px;
    height: 320px;
    background-image: url(${(props) => props.url});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.gray300};
`;
