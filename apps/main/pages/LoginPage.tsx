import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import BackImg from '../assets/img/BackImg.jpg';
import * as S from '../components/LoginPage/styled';

type userType = 'TEACHER' | 'STUDENT' | 'MOU' | '';

interface loginType {
    email: string;
    password: string;
    user_type: userType;
}

const LoginPage = () => {
    const [loginState, setLoginState] = useState<loginType>({
        email: '',
        password: '',
        user_type: '',
    });

    useEffect(() => {
        setLoginState({ ...loginState, user_type: localStorage.getItem('LoginType') as userType });
    }, []);

    const onChangeLoginState = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const afterValue = value.replace(/[^0-9|a-z|@|/.]/gi, '');
        setLoginState({ ...loginState, [name]: afterValue });
    };

    const postLogin = () => {
        axios({
            url: '',
            method: 'post',
            data: loginState,
        }).then((res) => {});
    };

    return (
        <S._LoginPageContainer>
            <S._ImgContainer>
                <Image src={BackImg} />
            </S._ImgContainer>
            <S._LoginContainer>
                <S._LoginBox>
                    <S._LoginTitle>로그인</S._LoginTitle>
                    <S._LoginPoint />
                    <S._LoginInputLayout>
                        {loginState.user_type == 'MOU' ? (
                            <S._LoginInputText>아이디</S._LoginInputText>
                        ) : (
                            <S._LoginInputText>이메일</S._LoginInputText>
                        )}
                        <S._LoginInput
                            value={loginState.email}
                            onChange={onChangeLoginState}
                            name="email"
                        />
                    </S._LoginInputLayout>
                    <S._LoginInputLayout>
                        <S._LoginInputText>비밀번호</S._LoginInputText>
                        <S._LoginInput
                            value={loginState.password}
                            onChange={onChangeLoginState}
                            name="password"
                        />
                    </S._LoginInputLayout>
                    <S._LoginButton onClick={postLogin}>로그인</S._LoginButton>
                    <S._SearchPassword>
                        비밀번호를 잊으셨다면?{' '}
                        <S._SearchPasswordA>비밀번호 찾기</S._SearchPasswordA>
                    </S._SearchPassword>
                </S._LoginBox>
            </S._LoginContainer>
        </S._LoginPageContainer>
    );
};

export default LoginPage;
