import * as S from "./styled";

const SideBar = () => {
  return (
    <S.UserSideBar>
      <S.UserProfile />
      <S.UserClass>소프트웨어개발과</S.UserClass>
      <S.UserName>2307 손지원</S.UserName>
      <S.UsetText>전화번호 : 010-0000-0000</S.UsetText>
      <S.UsetText>이메일 : Entry1020@dsm.hs.kr</S.UsetText>
      <S.UsetText>주소 : 유성구 가장동 928</S.UsetText>
    </S.UserSideBar>
  );
};

export default SideBar;
