import React, { useState, Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BackImg from '../../../assets/img/BackImg.jpg';
import * as S from '../../../components/FirstLoginPage/styled';

const StageOne = () => {
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
                        <S._FirstLoginInput />
                    </S._FistLoginInputLayout>
                    <S._FistLoginInputLayout marginBottom="135px">
                        <S._FirstLoginInputText>새로운 비밀번호</S._FirstLoginInputText>
                        <S._FirstLoginInput />
                    </S._FistLoginInputLayout>
                    <S._DisplayFlex>
                        <S._FirstLoginBackButton
                            onClick={() => {
                                window.location.href = './';
                            }}>
                            돌아가기
                        </S._FirstLoginBackButton>
                        <Link href={'./StageTwo'}>
                            <S._FirstLoginNextButton>변경하기</S._FirstLoginNextButton>
                        </Link>
                    </S._DisplayFlex>
                </S._FirstLoginBox>
            </S._FirstLoginContainer>
        </S._FirstLoginPageContainer>
    );
};

export default StageOne;
