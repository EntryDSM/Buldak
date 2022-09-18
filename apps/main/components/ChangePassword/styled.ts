import styled from '@emotion/styled';

export const _DisplayFlex = styled.div`
    display: flex;
`;

export const _FirstLoginPageContainer = styled.div`
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

export const _FirstLoginContainer = styled.div`
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
`;

export const _FirstLoginBox = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;

    width: 480px;
    height: 540px;
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
`;

export const _FirstLoginBoxLayout = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 55px;
`;

export const _FirstLoginTitle = styled.p`
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
    color: ${({ theme }) => theme.color.navy};

    margin-top: 45px;
`;

export const _FirstLoginPoint = styled.div`
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.color.navy};
    border-radius: 100px;

    margin: 20px 0px;
`;

interface fistLoginInputLayoutProps {
    marginBottom: string;
}

export const _FistLoginInputLayout = styled.div<fistLoginInputLayoutProps>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    margin-bottom: ${(props) => props.marginBottom};
`;

export const _FirstLoginInputText = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    color: ${({ theme }) => theme.color.black};
`;

export const _FirstLoginCitation = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.color.white};
    width: 90px;
    height: 44px;
    background: ${({ theme }) => theme.color.skyblue};
    border-radius: 4px;
    margin-left: 10px;
`;

export const _FirstLoginSetProfile = styled.button`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border: 1.42857px dashed ${({ theme }) => theme.color.black};
    border-radius: 7142.86px;
`;

export const _FirstLoginProfileBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 7142.86px;
`;

export const _FirstLoginProfileText = styled.button`
    cursor: pointer;

    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    text-decoration-line: underline;
    color: ${({ theme }) => theme.color.black};

    margin-top: 30px;
    margin-bottom: 160px;
`;
