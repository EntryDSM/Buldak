import Image from 'next/image';
import * as S from './styled';

interface SelectThingsType {
    onClickLoginType: (e: React.MouseEvent<HTMLButtonElement>) => void;
    name: string;
    text: string;
    img: string;
}

const SelectThings = ({ onClickLoginType, name, text, img }: SelectThingsType) => {
    return (
        <S._SelectThingsBox>
            <S._ThingsPorfile>
                <Image src={img} />
            </S._ThingsPorfile>
            <S._ThingsName>{name}</S._ThingsName>
            <S._ThingsText>{text}</S._ThingsText>
            <S._ThingsSelectButton onClick={onClickLoginType} name={name}>
                선택
            </S._ThingsSelectButton>
        </S._SelectThingsBox>
    );
};

export default SelectThings;
