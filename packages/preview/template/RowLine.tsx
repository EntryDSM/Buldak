import styled from '@emotion/styled';
import FeedBack from './FeedBack';

interface Props {
    height: number;
    feedback?: {
        isRead: boolean;
        feedInfo: string;
    };
}

export default function RowLine({ height, feedback }: Props) {
    return (
        <Wrapper style={{ height: `${height}px` }}>
            {feedback && <FeedBack feedInfo={feedback.feedInfo} isRead={feedback.isRead} />}
            <div />
        </Wrapper>
}

const Wrapper = styled.div`
    position: relative;
    width: 1000px;
    height: 44px;
    padding: 21px 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
        width: 800px;
        height: 2px;
        border-radius: 100px;
        background-color: ${({ theme }) => theme.color.gray300};
    }
`;
