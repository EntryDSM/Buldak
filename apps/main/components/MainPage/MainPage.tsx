import Image from 'next/image';
import theme from '@packages/emotion-style-provider/src/theme';
import {
    cardFourText,
    cardFourTitle,
    cardTheeTitle,
    cardThreeText,
    cardTwoText,
    cardTwoTitle,
} from './constant';
import CardBoxOne from './CardBoxOne';
import CardBoxTwo from './CardBoxTwo';
import Footter from './Footter';
import CardOne from '../../assets/svg/CardOne.svg';
import CardTwo from '../../assets/svg/CardTwo.svg';
import CardThree from '../../assets/svg/CardThree.svg';
import CardFour from '../../assets/svg/CardFour.svg';
import Logo from '../../assets/svg/Logo.svg';
import * as S from './styled';

const MainPage = () => {
    return (
        <S._MainPageContainer>
            <S._Header>
                <S._IMGBox>
                    <Image src={Logo} />
                </S._IMGBox>
                <S._LoginButton />
            </S._Header>
            <S._CardContainer color={theme.color.white}>
                <S._CardTextLayout>
                    <S._CardOneTitleOne>RESUME BOOK</S._CardOneTitleOne>
                    <S._CardOneTitleTwo>온라인 작성 서비스</S._CardOneTitleTwo>
                    <S._CardOneTitleThree>REPO</S._CardOneTitleThree>
                    <S._CardOneText>
                        기존의 RESUME BOOK이 아닌 <br />
                        페이지 에디터로 자신의 포트폴리오를 작성하세요
                    </S._CardOneText>
                </S._CardTextLayout>
                <Image src={CardOne} />
            </S._CardContainer>
            <CardBoxTwo img={CardTwo} title={cardTwoTitle} text={cardTwoText} />
            <CardBoxOne img={CardThree} title={cardTheeTitle} text={cardThreeText} />
            <CardBoxTwo img={CardFour} title={cardFourTitle} text={cardFourText} />
            <Footter />
        </S._MainPageContainer>
    );
};

export default MainPage;
