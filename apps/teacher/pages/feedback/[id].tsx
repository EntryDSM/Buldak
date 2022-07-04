import styled from '@emotion/styled';
import Header from '../../components/feedback/Header';
import FeedbackArea from '../../components/feedback/FeedbackArea';

const FeedbackPage = () => {
    return (
        <_Wrapper>
            <FeedbackArea />
            <Header />
        </_Wrapper>
    );
};
export default FeedbackPage;

const _Wrapper = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.gay300};
`;
