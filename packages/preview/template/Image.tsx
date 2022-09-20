import styled from '@emotion/styled';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { NoImg } from '../assets';
import { FeedBackType } from '../types/Feedback';
import FeedBack from './FeedBackRead';
import FeedbackComment from './FeedbackComment';

interface Props {
    url: string;
    url2?: string;
    url3?: string;
    grade: number;
    feedback?: FeedBackType;
    isTeacher?: boolean;
}

export default function Image({ url, url2 = '', url3 = '', grade, feedback, isTeacher }: Props) {
    const [isSelected, setIsSelected] = useState(false);

    if (grade == 1)
        return (
            <OutsideClickHandler
                onOutsideClick={() => {
                    setIsSelected(false);
                }}>
                <Wrapper isSelected={isSelected} onClick={() => setIsSelected(true)}>
                    {!isTeacher && feedback?.feedInfo && (
                        <FeedBack
                            feedInfo={feedback.feedInfo}
                            sequence={feedback.sequence}
                            isRead={feedback.isRead}
                        />
                    )}
                    {isTeacher && (
                        <FeedbackComment
                            isRead={feedback?.isRead}
                            feedInfo={feedback?.feedInfo}
                            sequence={feedback?.sequence}
                            isSelected={isSelected}
                        />
                    )}{' '}
                    <Img url={url}>{!url ? <></> : <NoImg />}</Img>
                </Wrapper>
            </OutsideClickHandler>
        );
    if (grade == 2)
        return (
            <Wrapper>
                {feedback && <FeedBack feedInfo={feedback.feedInfo} isRead={feedback.isRead} />}
                <Img style={{ width: '430px' }} url={url}>
                    {url ? <></> : <NoImg />}
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
                <Img style={{ width: '280px' }} url={url}>
                    {url ? <></> : <NoImg />}
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
    width: 530px;
    height: 191px;
    padding: 11px 27px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    > #img {
    }
`;
const Img = styled.div<{ url: string }>`
    width: 477px;
    height: 170px;
    background-image: url(${(props) => props.url});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.gray300};
`;
