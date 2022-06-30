import Image from "next/image";
import SessionBoxOne from "./SessionBoxOne";
import SessionBoxTwo from "./SessionBoxTwo";
import SessionOne from "../../assets/svg/SessionOne.svg";
import SessionTwo from "../../assets/svg/SessionTwo.svg";
import SessionThree from "../../assets/svg/SessionThree.svg";
import SessionFour from "../../assets/svg/SessionFour.svg";
import Logo from "../../assets/svg/Logo.svg";
import * as S from "./styled";

const MainPage = () => {
  const SeTwoTitle = (
    <>
      이제 책으로 보는 <br />
      Resume Book은 그만 보세요
    </>
  );

  const SeTwoText = (
    <>
      책이 아니라서 언제 어디서든 새로운 온라인 <br />
      Resume Book을 이용해보세요
    </>
  );

  const SeTheeTitle = (
    <>
      기존의 형식적인 Resume Book이
      <br />
      아닙니다
    </>
  );

  const SeThreeText = (
    <>
      자신의 스타일로 새롭고 자유롭게 <br />
      Resume Book을 꾸며보세요
    </>
  );

  const SeFourTitle = (
    <>
      온라인 Resume Book을 보시고
      <br />
      원하시는 학생을 만나보세요
    </>
  );

  const SeFourText = (
    <>
      원하시는 학생이 있으시다면 <br />
      DSM 산업협력부를 통해서 컨택 문의를 해보세요
    </>
  );

  return (
    <S.MainPageContainer>
      <S.Header>
        <S.IMGBox>
          <Image src={Logo} />
        </S.IMGBox>
        <S.LoginButton />
      </S.Header>
      <S.SessionContainer Color="#FFFFFF">
        <S.SeTextLayout>
          <S.SeOneTitleOne>RESUME BOOK</S.SeOneTitleOne>
          <S.SeOneTitleTwo>온라인 작성 서비스</S.SeOneTitleTwo>
          <S.SeOneTitleThree>REPO</S.SeOneTitleThree>
          <S.SeOneText>
            기본의 RESUME BOOK이 아닌 <br />
            페이지 에디터로 자신의 포트폴리오를 작성하세요
          </S.SeOneText>
        </S.SeTextLayout>
        <Image src={SessionOne} />
      </S.SessionContainer>
      <SessionBoxTwo
        SeIMG={SessionTwo}
        SeTA="right"
        SeColor="#F3F7FF"
        SeTitle={SeTwoTitle}
        SeText={SeTwoText}
      />
      <SessionBoxOne
        SeIMG={SessionThree}
        SeTA="left"
        SeColor="#FFFFFF"
        SeTitle={SeTheeTitle}
        SeText={SeThreeText}
      />
      <SessionBoxTwo
        SeIMG={SessionFour}
        SeTA="right"
        SeColor="#F3F7FF"
        SeTitle={SeFourTitle}
        SeText={SeFourText}
      />
      <S.Footter />
    </S.MainPageContainer>
  );
};

export default MainPage;
