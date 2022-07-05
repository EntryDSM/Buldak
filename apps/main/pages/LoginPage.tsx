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
                        <S.LoginInput
                            value={loginState.email}
                            onChange={onChangeLoginState}
                            name="email"
                        />
                    </S.LoginInputLayout>
                    <S.LoginInputLayout>
                        <S.LoginInputText>비밀번호</S.LoginInputText>
                        <S.LoginInput
                            value={loginState.password}
                            onChange={onChangeLoginState}
                            name="password"
                        />
                    </S.LoginInputLayout>
                    <S.LoginButton onClick={postLogin}>로그인</S.LoginButton>
                    <S.SearchPassword>
                        비밀번호를 잊으셨다면? <S.SearchPasswordA>비밀번호 찾기</S.SearchPasswordA>
                    </S.SearchPassword>
                </S.LoginBox>
            </S.LoginContainer>
        </S.LoginPageContainer>
    );
};

export default LoginPage;
