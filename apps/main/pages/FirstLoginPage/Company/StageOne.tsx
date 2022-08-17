import React, { useState, Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { TextBox, Button } from '@packages/ui';
import theme from '@packages/emotion-style-provider/src/theme';
import BackImg from '../../../assets/img/BackImg.jpg';
import * as S from '../../../components/FirstLoginPage/styled';

interface newPasswordType {
    password: string;
    new_password: string;
}

const StageOne = () => {
    const [newPasswordState, setNewPasswordState] = useState<newPasswordType>({
        password: '',
        new_password: '',
    });

    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const afterValue = value.replace(/[^0-9|a-z]/gi, '');
        setNewPasswordState({ ...newPasswordState, [name]: afterValue });
    };

    const onPostNewPassword = () => {
        console.log('ㅇㅇ');
        // axios({
        //     url: 'http://114.108.176.85:8080/users/auth',
        //     method: 'post',
        //     data: newPasswordState,
        //     headers: {
        //         Authorization: localStorage.getItem('access_token') || '',
        //     },
        // }).then((res) => {
        //     console.log('가나달');
        // });
    };

    return (
        <S._FirstLoginPageContainer>
            <S._ImgContainer>
                <Image src={BackImg} />
            </S._ImgContainer>
            <S._FirstLoginContainer>
                <S._FirstLoginBox>
                    <S._FirstLoginTitle>비밀번호 수정</S._FirstLoginTitle>
                    <S._FirstLoginPoint />
                    <S._FistLoginInputLayout marginBottom="20px">
                        <S._FirstLoginInputText>기존 비밀번호</S._FirstLoginInputText>
                        <TextBox
                            width={380}
                            correct={true}
                            type="password"
                            value={newPasswordState.password}
                            onChange={onChangePassword}
                            placeholder="받으신 비밀번호를 입력해 주세요."
                            name="password"
                        />
                    </S._FistLoginInputLayout>
                    <S._FistLoginInputLayout marginBottom="120px">
                        <S._FirstLoginInputText>새로운 비밀번호</S._FirstLoginInputText>
                        <TextBox
                            width={380}
                            correct={true}
                            type="password"
                            value={newPasswordState.new_password}
                            onChange={onChangePassword}
                            placeholder="새로운 비밀번호를 다시 입력해 주세요."
                            name="new_password"
                        />
                    </S._FistLoginInputLayout>
                    <S._DisplayFlex>
                        <S._FirstLoginBoxLayout>
                            <Button
                                width={180}
                                height={40}
                                borderColor={theme.color.gray700}
                                borderWidth={2}
                                backgroundColor={theme.color.white}
                                fontColor={theme.color.black}
                                content="돌아가기"
                                onClick={() => {
                                    window.location.href = '/';
                                }}
                            />
                            <Link href={'./StageTwo'}>
                                <Button
                                    width={180}
                                    height={40}
                                    backgroundColor={theme.color.main}
                                    fontColor={theme.color.white}
                                    content="변경하기"
                                    onClick={onPostNewPassword}
                                />
                            </Link>
                        </S._FirstLoginBoxLayout>
                    </S._DisplayFlex>
                </S._FirstLoginBox>
            </S._FirstLoginContainer>
        </S._FirstLoginPageContainer>
    );
};

export default StageOne;
