import { useState } from 'react';
import Image from 'next/image';
import BackImg from '../assets/img/BackImg.jpg';
import * as S from '../components/LoginPage/styled';

const LoginPage = () => {
    interface loginType {
        email: string;
        password: string;
        user_type: 'teacher' | 'student' | 'company' | '';
    }

    const [loginState, setLoginState] = useState<loginType>({
        email: '',
        password: '',
        user_type: '',
    });

    const onChangeLoginState = (e: any) => {
        const { name, value } = e.target;
        setLoginState({ ...loginState, [name]: value });
    };

    return (
        <S.LoginPageContainer>
            <S.ImgContainer>
                <Image src={BackImg} />
            </S.ImgContainer>
            <S.LoginContainer>
                <S.LoginBox>
                    <S.LoginTitle>로그인</S.LoginTitle>
                    <S.LoginPoint />
                    <S.LoginInputLayout>
                        <S.LoginInputText>이메일</S.LoginInputText>
                        <S.LoginInput onChange={onChangeLoginState} name="email" />
                    </S.LoginInputLayout>
                    <S.LoginInputLayout>
                        <S.LoginInputText>비밀번호</S.LoginInputText>
                        <S.LoginInput onChange={onChangeLoginState} name="password" />
                    </S.LoginInputLayout>
                    <S.LoginButton>로그인</S.LoginButton>
                </S.LoginBox>
            </S.LoginContainer>
        </S.LoginPageContainer>
    );
};

export default LoginPage;
