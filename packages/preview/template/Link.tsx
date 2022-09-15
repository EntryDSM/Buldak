import styled from '@emotion/styled';
import FeedBack from './FeedBack';

interface Props {
    grade: number;
    href1: string;
    href2?: string;
    href3?: string;
    feedback?: {
        isRead: boolean;
        feedInfo: string;
    };
}

export default function Link({ href1, href2, href3, grade, feedback }: Props) {
    if (grade == 1) {
        return (
            <TotalWrapper>
                {feedback && <FeedBack feedInfo={feedback.feedInfo} isRead={feedback.isRead} />}
                <Wrapper1>
                    <a href={href1}>{href1}</a>
                </Wrapper1>
            </TotalWrapper>
        );
    } else if (grade == 2) {
        return (
            <TotalWrapper>
                {feedback && <FeedBack feedInfo={feedback.feedInfo} isRead={feedback.isRead} />}
                <Wrapper2>
                    <a href={href1}>{href1}</a>
                </Wrapper2>
                <Wrapper2>
                    <a href={href2}>{href2}</a>
                </Wrapper2>
            </TotalWrapper>
        );
    } else if (grade == 3) {
        return (
            <TotalWrapper>
                {feedback && <FeedBack feedInfo={feedback.feedInfo} isRead={feedback.isRead} />}
                <Wrapper3>
                    <a href={href1}>{href1}</a>
                </Wrapper3>
                <Wrapper3>
                    <a href={href2}>{href2}</a>
                </Wrapper3>
                <Wrapper3>
                    <a href={href3}>{href3}</a>
                </Wrapper3>
            </TotalWrapper>
        );
    } else {
        return <></>;
    }
}

const TotalWrapper = styled.div`
    position: relative;
    width: 1000px;
    min-height: 44px;
    display: flex;
    flex-direction: row;
    font-size: 18px;
    word-break: break-all;
    a {
        color: ${({ theme }) => theme.color.skyblue};
        text-decoration: underline;
    }
`;

const Wrapper1 = styled.div`
    width: 1000px;
    min-height: 44px;
    padding: 47px 95px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 11px 30px;
`;

const Wrapper2 = styled.div`
    width: 500px;
    min-height: 44px;
    padding: 47px 95px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 11px 30px;
`;
const Wrapper3 = styled.div`
    width: 333px;
    min-height: 44px;
    padding: 47px 95px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 11px 30px;
`;
