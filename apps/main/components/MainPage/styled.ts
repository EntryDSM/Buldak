import styled from '@emotion/styled';
import { type } from 'os';

export const MainPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: auto;
    background: #f3f7ff;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 60px;
    border-bottom: 1px solid #f0f0f0;
    background-color: #ffffff;
`;

export const IMGBox = styled.div`
    margin-left: 9vw;
    margin-top: 10px;
`;

export const LoginButton = styled.div`
    width: 100px;
    height: 44px;
    background: #ffffff;
    border: 1px solid #717171;
    margin-right: 9vw;
    border-radius: 5px;
`;

type SessionContainerType = {
    Color: string;
};

export const SessionContainer = styled.div<SessionContainerType>`
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 600px;
    background: ${(props) => props.Color};
`;

export const SeTextLayout = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SeOneTitleOne = styled.p`
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 40px;
    color: #343434;

    margin: 0px;
`;

export const SeOneTitleTwo = styled.p`
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 40px;
    color: #343434;

    margin: 0px;
`;

export const SeOneTitleThree = styled.p`
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: 0.05em;
    color: #3068d3;

    margin: 0px;
`;

export const SeOneText = styled.p`
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
    color: #5a5a5a;

    margin: 0px;
    margin-top: 10px;
`;

type TextAlignType = {
    TA: string;
};

export const SeAllTitle = styled.p<TextAlignType>`
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 31px;
    text-align: ${(props) => props.TA};
    color: #343434;

    margin: 0px;
`;

export const SeAllText = styled.p<TextAlignType>`
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
    text-align: ${(props) => props.TA};
    color: #5a5a5a;

    margin: 0px;
    margin-top: 15px;
`;

export const Footter = styled.div`
    width: 100%;
    height: 300px;
    background: #f0f0f0;
`;
