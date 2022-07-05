import Image from 'next/image';
import theme from '@packages/emotion-style-provider/src/theme';
import * as S from './styled';

interface cardBoxType {
    img: string;
    title: string;
    text: string;
}

const CardBoxTwo = ({ img, text, title }: cardBoxType) => {
    return (
        <S.CardContainer color={theme.color.white}>
            <S.CardTextLayout>
                <S.CardAllTitle TextAlignProps="left">{title}</S.CardAllTitle>
                <S.CardAllText TextAlignProps="left">{text}</S.CardAllText>
            </S.CardTextLayout>
            <Image src={img} />
        </S.CardContainer>
    );
};

export default CardBoxTwo;
