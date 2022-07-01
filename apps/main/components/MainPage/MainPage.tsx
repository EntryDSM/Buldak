import Image from 'next/image';
import {
    SeFourText,
    SeFourTitle,
    SeTheeTitle,
    SeThreeText,
    SeTwoText,
    SeTwoTitle,
} from './constatnt';
import SessionBoxOne from './SessionBoxOne';
import SessionBoxTwo from './SessionBoxTwo';
import SessionOne from '../../assets/svg/SessionOne.svg';
import SessionTwo from '../../assets/svg/SessionTwo.svg';
import SessionThree from '../../assets/svg/SessionThree.svg';
import SessionFour from '../../assets/svg/SessionFour.svg';
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
            <S.SessionContainer Color="#FFFFFF">
                <S.SeTextLayout>
                    <S.SeOneTitleOne>RESUME BOOK</S.SeOneTitleOne>
                    <S.SeOneTitleTwo>온라인 작성 서비스</S.SeOneTitleTwo>
                    <S.SeOneTitleThree>REPO</S.SeOneTitleThree>
                    <S.SeOneText>
                        기본의 RESUME BOOK이 아닌 <br />
                        페이지 에디터로 자신의 포트폴리오를 작성하세요
                    </S.SeOneText>
                </S.SeTextLayout>
                <Image src={SessionOne} />
            </S.SessionContainer>
            <SessionBoxTwo
                SeIMG={SessionTwo}
                SeTA="right"
                SeColor="#F3F7FF"
                SeTitle={SeTwoTitle}
                SeText={SeTwoText}
            />
            <SessionBoxOne
                SeIMG={SessionThree}
                SeTA="left"
                SeColor="#FFFFFF"
                SeTitle={SeTheeTitle}
                SeText={SeThreeText}
            />
            <SessionBoxTwo
                SeIMG={SessionFour}
                SeTA="right"
                SeColor="#F3F7FF"
                SeTitle={SeFourTitle}
                SeText={SeFourText}
            />
            <S.Footter />
        </S.MainPageContainer>
    );
};

export default MainPage;
