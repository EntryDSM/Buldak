import styled from '@emotion/styled';

export const _MainPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: auto;
    background: ${({ theme }) => theme.color.white};
`;

export const _Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 60px;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray300};
    background-color: ${({ theme }) => theme.color.white};
`;

export const _ImgBox = styled.div`
    margin-left: 9vw;
    margin-top: 10px;
`;

export const _LoginButtonBox = styled.div`
    margin-right: 9vw;
    border-radius: 5px;
`;

type cardContainerType = {
    color: string;
};

export const _CardContainer = styled.div<cardContainerType>`
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 600px;
    background: ${(props) => props.color};
`;

export const _CardTextLayout = styled.div`
    display: flex;
    flex-direction: column;
`;

export const _CardOneTitleOne = styled.p`
    font-weight: 400;
    font-size: 36px;
    line-height: 40px;
    color: ${({ theme }) => theme.color.black};
`;

export const _CardOneTitleTwo = styled.p`
    font-weight: 300;
    font-size: 36px;
    line-height: 40px;
    color: ${({ theme }) => theme.color.black};
`;

export const _CardOneTitleThree = styled.p`
    font-weight: 400;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.skyblue};
`;

export const _CardOneText = styled.p`
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
    color: ${({ theme }) => theme.color.gray900};

    margin-top: 10px;
`;

interface textAlignType {
    textAlignProps: string;
}

export const _CardAllTitle = styled.pre<textAlignType>`
    font-weight: 500;
    font-size: 25px;
    line-height: 31px;
    text-align: ${(props) => props.textAlignProps};
    color: ${({ theme }) => theme.color.black};
`;

export const _CardAllText = styled.pre<textAlignType>`
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
    text-align: ${(props) => props.textAlignProps};
    color: ${({ theme }) => theme.color.gray900};

    margin-top: 15px;
`;

export const _Footter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 300px;
    background: ${({ theme }) => theme.color.point};
`;

export const _IntroduceTextLayout = styled.div`
    display: flex;
    flex-direction: column;
`;

export const _IntroduceLinkLayout = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 130px;
`;

export const _FootterTitle = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    color: #ffffff;

    margin-bottom: 20px;
`;

export const _FootterText = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
`;

export const _FootterTextLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    margin-top: 20px;
`;
