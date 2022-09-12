import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@packages/emotion-style-provider/src/theme';

function Loading() {
    return (
        <Box>
            <div id="center">
                <Dot id="left" />
                <Dot style={{ animationDelay: '0.3s' }} id="mid" />
                <Dot style={{ animationDelay: '0.6s' }} id="right" />
            </div>
        </Box>
    );
}

export default Loading;

const animation = keyframes`
    0% {
        background-color: rgb(0, 0, 0, 0);
    }
    50%{
        background-color:${theme.color.main};
    }
    100% {
        background-color: rgb(0, 0, 0, 0);
    }   
`;
const Box = styled.div`
    width: 100%;
    height: calc(100vh - 300px);
    display: flex;
    align-items: center;
    justify-content: center;

    > #center {
        width: 120px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;

const Dot = styled.div`
    width: 20px;
    height: 20px;
    border: 2px solid ${({ theme }) => theme.color.main};
    animation: ${animation} 3s infinite;
`;
