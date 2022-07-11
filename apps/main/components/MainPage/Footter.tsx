import Image from 'next/image';
import GitHub from '../../assets/svg/GitHub.svg';
import FaceBook from '../../assets/svg/FaceBook.svg';
import * as S from './styled';

const Footter = () => {
    return (
        <S.Footter>
            <S.IntroduceTextLayout>
                <S.FootterTitle>Entry</S.FootterTitle>
                <S.FootterText>@2022 Entry</S.FootterText>
                <S.FootterTextLayout>
                    <S.FootterText>개인정보 처리방침 ㅣ 이용약관</S.FootterText>
                    <S.FootterText>(34111) 대전광역시 유성구 가정북로 76 (장동 23-9)</S.FootterText>
                    <S.FootterText>
                        교무실 : 042-866-8822 / Fax : 042-867-9900 행정실 : 042-866-8885 / Fax :
                        042-863-4308
                    </S.FootterText>
                    <S.FootterText>Entrepreneur</S.FootterText>
                </S.FootterTextLayout>
            </S.IntroduceTextLayout>
            <S.IntroduceLinkLayout>
                <a href="https://www.facebook.com/entrydsm/" target={'_blank'}>
                    <Image src={FaceBook} />
                </a>
                <a href="https://github.com/EntryDSM" target={'_blank'}>
                    <Image src={GitHub} />
                </a>
            </S.IntroduceLinkLayout>
        </S.Footter>
    );
};

export default Footter;
