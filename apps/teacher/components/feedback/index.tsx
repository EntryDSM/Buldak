import styled from '@emotion/styled';
import Header from './Header';
import PageArea from './PageArea';

interface FeedProps {
    id: string;
}

const Feedback = ({ id }: FeedProps) => {
    return (
        <_Wrapper>
            <Header id={id} />
            <PageArea id={id} />
        </_Wrapper>
    );
};
export default Feedback;

const _Wrapper = styled.section`
    width: 100vw;
    min-height: 100vh;
    height: fit-content;
    background-color: ${({ theme }) => theme.color.gray300};
`;
