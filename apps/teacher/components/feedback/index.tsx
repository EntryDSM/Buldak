import styled from '@emotion/styled';
import Header from './Header';
import FeedbackComment from './FeedbackComment';

const 
Feedback = () => {
    return (
        <_Wrapper>
            <Header />
            <FeedbackComment />
        </_Wrapper>
    );
};
export default Feedback;

const _Wrapper = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.gray300};
`;
