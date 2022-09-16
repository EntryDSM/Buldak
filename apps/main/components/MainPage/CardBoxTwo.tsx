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
        <S._CardContainer color={theme.color.background}>
            <Image src={img} />
            <S._CardTextLayout>
                <S._CardAllTitle textAlignProps="right">{title}</S._CardAllTitle>
                <S._CardAllText textAlignProps="right">{text}</S._CardAllText>
            </S._CardTextLayout>
        </S._CardContainer>
    );
};

export default CardBoxTwo;
