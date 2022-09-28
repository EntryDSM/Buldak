import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import BackImg from '../assets/img/BackImg.png';
import { TextBox } from '@packages/ui';
import { setCookie } from '../Hooks/Cookies';
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
        axios
            .post('https://server.dsm-repo.com/users/auth', loginState)
            .then((res) => {
                setCookie('access_token', res.data.access_token, {
                    path: '/',
                    secure: true,
                    sameSite: 'none',
                    domain: 'dsm-repo.com',
                });
                setCookie('refresh_token', res.data.refresh_token, {
                    path: '/',
                    secure: true,
                    sameSite: 'none',
                    domain: 'dsm-repo.com',
                });
                if (loginState.user_type == 'TEACHER') {
                    window.location.href = 'https://teacher.dsm-repo.com';
                }
                if (res.data.first_login == true) {
                    if (loginState.user_type == 'STUDENT') {
                        window.location.href = '/first-login-page/studnet/stage-one';
                    } else if (loginState.user_type == 'MOU') {
                        window.location.href = '/first-login-page/company/stage-one';
                    }
                } else if (res.data.first_login == false) {
                    if (loginState.user_type == 'STUDENT') {
                        window.location.href = 'https://user.dsm-repo.com';
                    } else if (loginState.user_type == 'MOU') {
                        window.location.href = 'https://compnay.dsm-repo.com';
                    }
                }
            })
            .catch(() => {
                setLoginState({
                    email: '',
                    password: '',
                    user_type: localStorage.getItem('LoginType') as userType,
                });
                window.alert('로그인에 실패하였습니다');
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
