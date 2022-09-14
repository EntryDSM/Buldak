import styled from '@emotion/styled';
import FeedBack from './FeedBack';

interface Props {
    text1: string;
    text2?: string;
    text3?: string;
    grade: number;
    feedback?: {
        isRead: boolean;
        feedInfo: string;
    };
}

export default function Text({ grade, text1, text2, text3, feedback }: Props) {
    if (grade == 1)
        return (
            <Wrapper>
                {feedback && <FeedBack feedInfo={feedback.feedInfo} isRead={feedback.isRead} />}
                <div>
                    <p>{text1}</p>
                </div>
            </Wrapper>
        );
    if (grade == 2)
        return (
            <Wrapper>
                {feedback && <FeedBack feedInfo={feedback.feedInfo} isRead={feedback.isRead} />}
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
            <Wrapper>
                {feedback && <FeedBack feedInfo={feedback.feedInfo} isRead={feedback.isRead} />}
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

const Wrapper = styled.div`
    width: 1000px;
    min-height: 44px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    > div {
        min-height: 44px;
        width: 1000px;
        padding: 10px 30px;
    }
    > p {
        font-size: 18px;
        word-break: break-all;
    }
`;
