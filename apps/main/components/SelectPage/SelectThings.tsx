import * as S from './styled';

interface SelectThingsType {
    onClickLoginType: (e: React.MouseEvent<HTMLButtonElement>) => void;
    Name: string;
    Text: object;
}

const SelectThings: React.FC<SelectThingsType> = ({ onClickLoginType, Name, Text }) => {
    return (
        <S.SelectThingsBox>
            <S.ThingsPorfile />
            <S.ThingsName>{Name}</S.ThingsName>
            <S.ThingsText>{Text}</S.ThingsText>
            <S.ThingsSelectButton onClick={onClickLoginType} name={Name}>
                선택
            </S.ThingsSelectButton>
        </S.SelectThingsBox>
    );
};

export default SelectThings;
