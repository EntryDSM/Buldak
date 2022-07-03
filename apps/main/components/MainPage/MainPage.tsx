import Image from 'next/image';
import {
    CardFourText,
    CardFourTitle,
    CardTheeTitle,
    CardThreeText,
    CardTwoText,
    CardTwoTitle,
} from './constatnt';
import theme from '@packages/emotion-style-provider/src/theme';
import CardBoxOne from './CardBoxOne';
import CardBoxTwo from './CardBoxTwo';
import CardOne from '../../assets/svg/CardOne.svg';
import CardTwo from '../../assets/svg/CardTwo.svg';
import CardThree from '../../assets/svg/CardThree.svg';
import CardFour from '../../assets/svg/CardFour.svg';
import Logo from '../../assets/svg/Logo.svg';
import * as S from './styled';

const MainPage = () => {
    return (
        <S.MainPageContainer>
            <S.Header>
                <S.IMGBox>
                    <Image src={Logo} />
                </S.IMGBox>
                <S.LoginButton />
            </S.Header>
            <S.CardContainer Color="#FFFFFF">
                <S.CardTextLayout>
                    <S.CardOneTitleOne>RESUME BOOK</S.CardOneTitleOne>
                    <S.CardOneTitleTwo>온라인 작성 서비스</S.CardOneTitleTwo>
                    <S.CardOneTitleThree>REPO</S.CardOneTitleThree>
                    <S.CardOneText>
                        기본의 RESUME BOOK이 아닌 <br />
                        페이지 에디터로 자신의 포트폴리오를 작성하세요
                    </S.CardOneText>
                </S.CardTextLayout>
                <Image src={CardOne} />
            </S.CardContainer>
            <CardBoxTwo
                Img={CardTwo}
                TextAlign="right"
                BackGroundColor={theme.color.background}
                Title={CardTwoTitle}
                Text={CardTwoText}
            />
            <CardBoxOne
                Img={CardThree}
                TextAlign="left"
                BackGroundColor={theme.color.white}
                Title={CardTheeTitle}
                Text={CardThreeText}
            />
            <CardBoxTwo
                Img={CardFour}
                TextAlign="right"
                BackGroundColor={theme.color.background}
                Title={CardFourTitle}
                Text={CardFourText}
            />
            <S.Footter />
        </S.MainPageContainer>
    );
};

export default MainPage;
