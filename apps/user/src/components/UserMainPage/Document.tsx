import Image from "next/image";
import * as S from "./styled";

const DocumentPlus = () => {
  return (
    <S.Documents>
      <S.DocumentImg>{/* <Image /> */}</S.DocumentImg>
      <S.DocumentLine />
      <S.DocumentIntroBox>
        <S.DocumentIntroImg></S.DocumentIntroImg>
        <S.displayFlexColumn>
          <S.DocumentIntroText>손지원</S.DocumentIntroText>
          <S.DocumentIntroClass>소프트웨어개발과</S.DocumentIntroClass>
        </S.displayFlexColumn>
      </S.DocumentIntroBox>
    </S.Documents>
  );
};

export default DocumentPlus;
