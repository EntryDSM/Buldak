import styled from '@emotion/styled';
import FeedBack from './FeedBack';

interface Props {
    height: number;
    feedback?: {
        isRead: boolean;
        feedInfo: string;
    };
}

export default function Gap({ height, feedback }: Props) {
    return (
        <Wrapper style={{ height: height + 'px' }}>
            {feedback && <FeedBack feedInfo={feedback.feedInfo} isRead={feedback.isRead} />}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    width: 1000px;
    height: 50px;
`;
