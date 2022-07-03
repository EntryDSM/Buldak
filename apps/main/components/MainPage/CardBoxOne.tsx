import Image from 'next/image';
import * as S from './styled';

interface cardBoxType {
    backGroundColor: string;
    textAlign: string;
    img: string;
    title: string;
    text: string;
}

const CardBoxTwo: React.FC<cardBoxType> = ({ backGroundColor, img, text, textAlign, title }) => {
    return (
        <S.CardContainer Color={backGroundColor}>
            <S.CardTextLayout>
                <S.CardAllTitle TextAlignProps={textAlign}>{title}</S.CardAllTitle>
                <S.CardAllText TextAlignProps={textAlign}>{text}</S.CardAllText>
            </S.CardTextLayout>
            <Image src={img} />
        </S.CardContainer>
    );
};

export default CardBoxTwo;
