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
        <S.SelectThingsBox>
            <S.ThingsPorfile>
                <Image src={img} />
            </S.ThingsPorfile>
            <S.ThingsName>{name}</S.ThingsName>
            <S.ThingsText>{text}</S.ThingsText>
            <S.ThingsSelectButton onClick={onClickLoginType} name={name}>
                선택
            </S.ThingsSelectButton>
        </S.SelectThingsBox>
    );
};

export default SelectThings;
