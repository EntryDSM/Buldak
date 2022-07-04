import styled from '@emotion/styled';

function ShowPage() {
    return <Background>ㅈㅂㄹㄹㅈㅂ</Background>;
}

const Background = styled.div`
    background-color: ${({ theme }) => theme.color.gray100};
    width: 100%;
`;

export default ShowPage;
