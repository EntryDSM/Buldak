import React, { useState, useRef, ChangeEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TextBox, Button } from '@packages/ui';
import theme from '@packages/emotion-style-provider/src/theme';
import PlusBlack from '../../../assets/svg/PlusBlack.svg';
import BackImg from '../../../assets/img/BackImg.jpg';
import * as S from '../../../components/FirstLoginPage/styled';
import axios from 'axios';

const StageTwo = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const formData = new FormData();

    const onChangeImg = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        if (event.target.files) {
            formData.append('img', event.target.files[0]);
        }
    };

    const onPostProfile = () => {
        axios
            .get('http://114.108.176.85:8080/students', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            })
            .then((res) => {
                console.log(res);
            });
    };

    return (
        <S._FirstLoginPageContainer>
            <S._ImgContainer>
                <Image src={BackImg} />
            </S._ImgContainer>
            <S._FirstLoginContainer>
                <S._FirstLoginBox>
                    <S._FirstLoginTitle>프로필 설정</S._FirstLoginTitle>
                    <S._FirstLoginPoint />
                    <S._FirstLoginSetProfile
                        onClick={() => {
                            fileInputRef.current?.click();
                        }}>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/jpg, image/jpeg, image/png"
                            style={{ display: 'none' }}
                            onChange={onChangeImg}
                        />
                        <Image src={PlusBlack} />
                    </S._FirstLoginSetProfile>
                    <S._FirstLoginProfileText
                        onClick={() => {
                            fileInputRef.current?.click();
                        }}>
                        프로필 설정
                    </S._FirstLoginProfileText>
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
                                    window.location.href = './StageOne';
                                }}
                            />
                            <Button
                                width={180}
                                height={40}
                                backgroundColor={theme.color.main}
                                fontColor={theme.color.white}
                                content="변경하기"
                                onClick={onPostProfile}
                            />
                        </S._FirstLoginBoxLayout>
                    </S._DisplayFlex>
                </S._FirstLoginBox>
            </S._FirstLoginContainer>
        </S._FirstLoginPageContainer>
    );
};

export default StageTwo;
