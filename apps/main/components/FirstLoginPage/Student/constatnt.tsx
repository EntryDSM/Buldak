import React, { useState, Dispatch, SetStateAction, useRef } from 'react';
import PlusBlack from '../../../assets/svg/PlusBlack';
import * as S from '../styled';

interface StageType {
    setStage: Dispatch<SetStateAction<number>>;
}

export const StageOne: React.FC<StageType> = ({ setStage }) => {
    return (
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
                <S.FirstLoginNextButton
                    onClick={() => {
                        setStage(1);
                    }}>
                    변경하기
                </S.FirstLoginNextButton>
            </S.displayFlex>
        </S.FirstLoginBox>
    );
};

export const StageTwo: React.FC<StageType> = ({ setStage }) => {
    return (
        <S.FirstLoginBox>
            <S.FirstLoginTitle>추가정보 입력</S.FirstLoginTitle>
            <S.FirstLoginPoint />
            <S.FistLoginInputLayout marginBottom="20px">
                <S.FirstLoginInputText>전화번호</S.FirstLoginInputText>
                <S.displayFlex>
                    <S.FirstLoginCitationInput></S.FirstLoginCitationInput>
                    <S.FirstLoginCitation>인증하기</S.FirstLoginCitation>
                </S.displayFlex>
            </S.FistLoginInputLayout>
            <S.FistLoginInputLayout marginBottom="135px">
                <S.FirstLoginInputText>인증번호</S.FirstLoginInputText>
                <S.FirstLoginInput />
            </S.FistLoginInputLayout>
            <S.displayFlex>
                <S.FirstLoginBackButton
                    onClick={() => {
                        setStage(0);
                    }}>
                    이전으로
                </S.FirstLoginBackButton>
                <S.FirstLoginNextButton
                    onClick={() => {
                        setStage(2);
                    }}>
                    다음으로
                </S.FirstLoginNextButton>
            </S.displayFlex>
        </S.FirstLoginBox>
    );
};

export const StageThree: React.FC<StageType> = ({ setStage }) => {
    const FileInputRef = useRef<HTMLInputElement>(null);

    return (
        <S.FirstLoginBox>
            <S.FirstLoginTitle>프로필 설정</S.FirstLoginTitle>
            <S.FirstLoginPoint />
            <S.FirstLoginSetProfile
                onClick={() => {
                    FileInputRef.current?.click();
                }}>
                <input
                    ref={FileInputRef}
                    type="file"
                    accept="image/jpg, image/jpeg, image/png"
                    style={{ display: 'none' }}
                />
                <PlusBlack />
            </S.FirstLoginSetProfile>
            <S.FirstLoginProfileText>프로필 설정</S.FirstLoginProfileText>
            <S.displayFlex>
                <S.FirstLoginBackButton
                    onClick={() => {
                        setStage(1);
                    }}>
                    이전으로
                </S.FirstLoginBackButton>
                <S.FirstLoginNextButton>회원가입</S.FirstLoginNextButton>
            </S.displayFlex>
        </S.FirstLoginBox>
    );
};
