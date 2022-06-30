import styled from "@emotion/styled";

export const LoginPageContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100vh;
`;

export const ImgContainer = styled.div`
  position: absolute;
  overflow: hidden;

  width: 100%;
  height: 100vh;
`;

export const LoginContainer = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 480px;
  height: 540px;
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const LoginTitle = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  color: #0a4595;

  margin: 0px;
  margin-top: 75px;
`;

export const LoginPoint = styled.div`
  width: 10px;
  height: 10px;
  background: #0a4595;
  border-radius: 100px;

  margin-top: 20px;
  margin-bottom: 20px;
`;

export const LoginInputLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  margin-bottom: 30px;
`;

export const LoginInputText = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #343434;

  margin: 0px;
`;

export const LoginInput = styled.input`
  width: 380px;
  height: 44px;
  background: #ffffff;
  border: 2px solid #b6b6b6;
  border-radius: 5px;
`;

export const LoginButton = styled.div`
  cursor: pointer;
  transition: all 0.3s;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  color: #5387ec;

  width: 380px;
  height: 44px;
  background: #ffffff;
  border: 2px solid #5387ec;
  border-radius: 5px;

  :hover {
    background-color: #5387ec;
    color: #ffffff;
  }
`;
