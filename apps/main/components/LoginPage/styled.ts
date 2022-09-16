import styled from '@emotion/styled';

export const _LoginPageContainer = styled.div`
    position: relative;

    width: 100%;
    height: 100vh;
`;

export const _ImgContainer = styled.div`
    position: absolute;
    overflow: hidden;

    width: 100%;
    height: 100%;
`;

export const _LoginContainer = styled.div`
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
`;

export const _LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 480px;
    height: 540px;
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
`;

export const _LoginTitle = styled.p`
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
    color: ${({ theme }) => theme.color.navy};

    margin-top: 75px;
`;

export const _LoginPoint = styled.div`
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.color.navy};
    border-radius: 100px;

    margin: 20px 0px;
`;

export const _LoginInputLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    margin-bottom: 30px;
`;

export const _LoginInputText = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    color: ${({ theme }) => theme.color.black};
`;

export const _LoginInput = styled.input`
    width: 380px;
    height: 44px;
    background: ${({ theme }) => theme.color.white};
    border: 2px solid ${({ theme }) => theme.color.gray700};
    border-radius: 5px;
`;

export const _LoginButton = styled.div`
    cursor: pointer;
    transition: all 0.3s;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    color: ${({ theme }) => theme.color.skyblue};

    width: 380px;
    height: 44px;
    background: ${({ theme }) => theme.color.white};
    border: 2px solid ${({ theme }) => theme.color.skyblue};
    border-radius: 5px;

    :hover {
        background-color: ${({ theme }) => theme.color.skyblue};
        color: ${({ theme }) => theme.color.white};
    }
`;

export const _SearchPassword = styled.p`
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    color: ${({ theme }) => theme.color.black};

    margin-top: 20px;
`;

export const _SearchPasswordA = styled.a`
    cursor: pointer;

    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    text-decoration-line: underline;
    color: ${({ theme }) => theme.color.navy};
`;
