import Image from 'next/image';
import GitHub from '../../assets/svg/GitHub.svg';
import FaceBook from '../../assets/svg/FaceBook.svg';
import * as S from './styled';

const Footter = () => {
    return (
        <S._Footter>
            <S._IntroduceTextLayout>
                <S._FootterTitle>Entry</S._FootterTitle>
                <S._FootterText>@2022 Entry</S._FootterText>
                <S._FootterTextLayout>
                    <S._FootterText>개인정보 처리방침 ㅣ 이용약관</S._FootterText>
                    <S._FootterText>(34111) 대전광역시 유성구 가정북로 76 (장동 23-9)</S._FootterText>
                    <S._FootterText>
                        교무실 : 042-866-8822 / Fax : 042-867-9900 행정실 : 042-866-8885 / Fax :
                        042-863-4308
                    </S._FootterText>
                    <S._FootterText>Entrepreneur</S._FootterText>
                </S._FootterTextLayout>
            </S._IntroduceTextLayout>
            <S._IntroduceLinkLayout>
                <a href="https://www.facebook.com/entrydsm/" target={'_blank'}>
                    <Image src={FaceBook} />
                </a>
                <a href="https://github.com/EntryDSM" target={'_blank'}>
                    <Image src={GitHub} />
                </a>
            </S._IntroduceLinkLayout>
        </S._Footter>
    );
};

export default Footter;
