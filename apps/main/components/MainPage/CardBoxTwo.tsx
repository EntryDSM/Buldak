import Image from 'next/image';
import * as S from './styled';

interface CardBoxType {
    BackGroundColor: string;
    TextAlign: string;
    Img: string;
    Title: string;
    Text: string;
}

const CardBoxTwo: React.FC<CardBoxType> = ({
    BackGroundColor,
    Img,
    Text,
    TextAlign,
    Title,
}) => {
    return (
        <S.CardContainer Color={BackGroundColor}>
            <Image src={Img} />
            <S.CardTextLayout>
                <S.CardAllTitle TextAlignProps={TextAlign}>{Title}</S.CardAllTitle>
                <S.CardAllText TextAlignProps={TextAlign}>{Text}</S.CardAllText>
            </S.CardTextLayout>
        </S.CardContainer>
    );
};

export default CardBoxTwo;
