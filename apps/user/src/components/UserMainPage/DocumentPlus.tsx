import * as S from "./styled";
import Image from "next/image";
import Plus from "../../assets/svg/Plus.svg";

const DocumentPlus = () => {
  return (
    <S.Documents>
      <S.DocumentPlusIcon>
        <Image src={Plus} />
      </S.DocumentPlusIcon>
      <S.DocumentPlusText>문서 추가</S.DocumentPlusText>
    </S.Documents>
  );
};

export default DocumentPlus;
