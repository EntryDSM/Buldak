import styled from '@emotion/styled';

function ShowPage() {
    return <Background></Background>;
}

const Background = styled.div`
    background-color: ${({ theme }) => theme.color.gray100};
    width: 100%;
    padding-left: 350px;
    height: 100vh;
    padding-top: 70px;
`;

export default ShowPage;
