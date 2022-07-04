import Image from 'next/image';
import { useEffect, useState } from 'react';
import BackImg from '../assets/img/BackImg.jpg';
import CompanyLogin from '../components/FirstLoginPage/Company/CompanyLogin';
import StudentLogin from '../components/FirstLoginPage/Student/StudentLogin';
import * as S from '../components/FirstLoginPage/styled';

const FirstLoginPage = () => {
    const [firstLoginPage, setFirstLoginPage] = useState<JSX.Element>(<div />);

    useEffect(() => {
        if (window.localStorage.getItem('LoginType') == 'STUDENT') {
            setFirstLoginPage(<StudentLogin />);
        } else if (window.localStorage.getItem('LoginType') == 'MOU') {
            setFirstLoginPage(<CompanyLogin />);
        } else if (window.localStorage.getItem('LoginType') == 'TEACHER') {
        }
    }, []);

    return (
        <S.FirstLoginPageContainer>
            <S.ImgContainer>
                <Image src={BackImg} />
            </S.ImgContainer>
            <S.FirstLoginContainer>{firstLoginPage}</S.FirstLoginContainer>
        </S.FirstLoginPageContainer>
    );
};

export default FirstLoginPage;
