import React, { useState, Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BackImg from '../../../assets/img/BackImg.jpg';
import * as S from '../../../components/FirstLoginPage/styled';

const StageOne = () => {
    return (
        <S.FirstLoginPageContainer>
            <S.ImgContainer>
                <Image src={BackImg} />
            </S.ImgContainer>
            <S.FirstLoginContainer>
                <S.FirstLoginBox>
                    <S.FirstLoginTitle>비밀번호 수정</S.FirstLoginTitle>
                    <S.FirstLoginPoint />
                    <S.FistLoginInputLayout marginBottom="20px">
                        <S.FirstLoginInputText>기존 비밀번호</S.FirstLoginInputText>
                        <S.FirstLoginInput />
                    </S.FistLoginInputLayout>
                    <S.FistLoginInputLayout marginBottom="135px">
                        <S.FirstLoginInputText>새로운 비밀번호</S.FirstLoginInputText>
                        <S.FirstLoginInput />
                    </S.FistLoginInputLayout>
                    <S.displayFlex>
                        <S.FirstLoginBackButton
                            onClick={() => {
                                window.location.href = './';
                            }}>
                            돌아가기
                        </S.FirstLoginBackButton>
                        <Link href={'./StageTwo'}>
                            <S.FirstLoginNextButton>변경하기</S.FirstLoginNextButton>
                        </Link>
                    </S.displayFlex>
                </S.FirstLoginBox>
            </S.FirstLoginContainer>
        </S.FirstLoginPageContainer>
    );
};

export default StageOne;
