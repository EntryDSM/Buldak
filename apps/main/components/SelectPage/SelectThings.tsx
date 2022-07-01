import Image from 'next/image';
import * as S from './styled';

interface SelectThingsType {
    onClickLoginType: (e: React.MouseEvent<HTMLButtonElement>) => void;
    Name: string;
    Text: object;
    Img: string;
}

const SelectThings: React.FC<SelectThingsType> = ({ onClickLoginType, Name, Text, Img }) => {
    return (
        <S.SelectThingsBox>
            <S.ThingsPorfile>
                <Image src={Img} />
            </S.ThingsPorfile>
            <S.ThingsName>{Name}</S.ThingsName>
            <S.ThingsText>{Text}</S.ThingsText>
            <S.ThingsSelectButton onClick={onClickLoginType} name={Name}>
                선택
            </S.ThingsSelectButton>
        </S.SelectThingsBox>
    );
};

export default SelectThings;
