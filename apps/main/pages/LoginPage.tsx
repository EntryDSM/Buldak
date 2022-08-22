import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import BackImg from '../assets/img/BackImg.jpg';
import { TextBox } from '@packages/ui';
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
        setLoginState({ ...loginState, [name]: value });
    };

    const postLogin = () => {
        axios({
            url: 'http://114.108.176.85:8080/users/auth',
            method: 'POST',
            data: loginState,
        })
            .then((res) => {
                console.log(res);
                localStorage.setItem('access_token', res.data.access_token);
                localStorage.setItem('refresh_token', res.data.refresh_token);
                if (res.data.first_login == true) {
                    if (loginState.user_type == 'STUDENT') {
                        window.location.href = '/FirstLoginPage/Student/StageOne';
                    } else if (loginState.user_type == 'MOU') {
                        window.location.href = '/FirstLoginPage/Company/StageOne';
                    } else {
                    }
                }
            })
            .catch((res) => {
                setLoginState({
                    email: '',
                    password: '',
                    user_type: localStorage.getItem('LoginType') as userType,
                });
                window.alert('로그인에 실패하였습니다다');
            });
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
                            <>
                                <S._LoginInputText>아이디</S._LoginInputText>
                                <TextBox
                                    correct={true}
                                    placeholder="아이디를 입력해주세요"
                                    width={380}
                                    type="text"
                                    value={loginState.email}
                                    onChange={onChangeLoginState}
                                    name="email"
                                />
                            </>
                        ) : (
                            <>
                                <S._LoginInputText>이메일</S._LoginInputText>
                                <TextBox
                                    correct={true}
                                    placeholder="이메일을 입력해주세요"
                                    width={380}
                                    type="text"
                                    value={loginState.email}
                                    onChange={onChangeLoginState}
                                    name="email"
                                />
                            </>
                        )}
                    </S._LoginInputLayout>
                    <S._LoginInputLayout>
                        <S._LoginInputText>비밀번호</S._LoginInputText>
                        <TextBox
                            correct={true}
                            placeholder="비밀번호를 입력해주세요"
                            width={380}
                            type="password"
                            value={loginState.password}
                            onChange={onChangeLoginState}
                            name="password"
                        />
                    </S._LoginInputLayout>
                    <S._LoginButton onClick={postLogin}>로그인</S._LoginButton>
                </S._LoginBox>
            </S._LoginContainer>
        </S._LoginPageContainer>
    );
};

export default LoginPage;
