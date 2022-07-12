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
        <S.CardContainer color={theme.color.background}>
            <Image src={img} />
            <S.CardTextLayout>
                <S.CardAllTitle textAlignProps="right">{title}</S.CardAllTitle>
                <S.CardAllText textAlignProps="right">{text}</S.CardAllText>
            </S.CardTextLayout>
        </S.CardContainer>
    );
};

export default CardBoxTwo;
