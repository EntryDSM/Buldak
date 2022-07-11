import styled from '@emotion/styled';

export const MainPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: auto;
    background: ${({ theme }) => theme.color.white};
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 60px;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray300};
    background-color: ${({ theme }) => theme.color.white};
`;

export const IMGBox = styled.div`
    margin-left: 9vw;
    margin-top: 10px;
`;

export const LoginButton = styled.div`
    width: 100px;
    height: 44px;
    background: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.gray500};
    margin-right: 9vw;
    border-radius: 5px;
`;

type cardContainerType = {
    color: string;
};

export const CardContainer = styled.div<cardContainerType>`
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 600px;
    background: ${(props) => props.color};
`;

export const CardTextLayout = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CardOneTitleOne = styled.p`
    font-weight: 400;
    font-size: 36px;
    line-height: 40px;
    color: ${({ theme }) => theme.color.black};
`;

export const CardOneTitleTwo = styled.p`
    font-weight: 300;
    font-size: 36px;
    line-height: 40px;
    color: ${({ theme }) => theme.color.black};
`;

export const CardOneTitleThree = styled.p`
    font-weight: 400;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.skyblue};
`;

export const CardOneText = styled.p`
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
    color: ${({ theme }) => theme.color.gray900};

    margin-top: 10px;
`;

type TextAlignType = {
    TextAlignProps: string;
};

export const CardAllTitle = styled.pre<TextAlignType>`
    font-weight: 500;
    font-size: 25px;
    line-height: 31px;
    text-align: ${(props) => props.TextAlignProps};
    color: ${({ theme }) => theme.color.black};
`;

export const CardAllText = styled.pre<TextAlignType>`
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
    text-align: ${(props) => props.TextAlignProps};
    color: ${({ theme }) => theme.color.gray900};

    margin-top: 15px;
`;

export const Footter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 300px;
    background: ${({ theme }) => theme.color.point};
`;

export const IntroduceTextLayout = styled.div`
    display: flex;
    flex-direction: column;
`;

export const IntroduceLinkLayout = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 130px;
`;

export const FootterTitle = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    color: #ffffff;

    margin-bottom: 20px;
`;

export const FootterText = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
`;

export const FootterTextLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    margin-top: 20px;
`;
