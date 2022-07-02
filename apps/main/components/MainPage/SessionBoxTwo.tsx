import Image from 'next/image';
import * as S from './styled';

interface SessionBoxType {
    SeColor: string;
    SeTA: string;
    SeIMG: string;
    SeTitle: string;
    SeText: string;
}

const SessionBoxTwo: React.FC<SessionBoxType> = ({ SeColor, SeTA, SeText, SeTitle, SeIMG }) => {
    return (
        <S.SessionContainer Color={SeColor}>
            <Image src={SeIMG} />
            <S.SeTextLayout>
                <S.SeAllTitle TA={SeTA}>{SeTitle}</S.SeAllTitle>
                <S.SeAllText TA={SeTA}>{SeText}</S.SeAllText>
            </S.SeTextLayout>
        </S.SessionContainer>
    );
};

export default SessionBoxTwo;
