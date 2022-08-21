import React, { useState } from 'react';
import Image from 'next/image';
import { TextBox, Button } from '@packages/ui';
import theme from '@packages/emotion-style-provider/src/theme';
import axios from 'axios';
import BackImg from '../../assets/img/BackImg.jpg';
import * as S from '../../components/SearchPassword/styled';

const StageTwo = () => {
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
                            placeholder="받으신 비밀번호를 입력해 주세요."
                            name="password"
                        />
                    </S._FistLoginInputLayout>
                    <S._FistLoginInputLayout marginBottom="135px">
                        <S._FirstLoginInputText>새로운 비밀번호</S._FirstLoginInputText>
                        <TextBox
                            width={380}
                            correct={true}
                            type="password"
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
                                content="이전으로"
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
                            />
                        </S._FirstLoginBoxLayout>
                    </S._DisplayFlex>
                </S._FirstLoginBox>
            </S._FirstLoginContainer>
        </S._FirstLoginPageContainer>
    );
};

export default StageTwo;
