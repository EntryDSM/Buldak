import React, { useState, Dispatch, SetStateAction } from 'react';
import PlusBlack from '../../../assets/svg/PlusBlack';
import * as S from '../styled';

interface Stage {
    stage: number;
    setStage: Dispatch<SetStateAction<number>>;
}

export const StepOne: React.FC<Stage> = ({ setStage }) => {
    return (
        <S.FirstLoginBox>
            <S.FirstLoginTitle>비밀번호 수정</S.FirstLoginTitle>
            <S.FirstLoginPoint />
            <S.FistLoginInputLayout marginBottom="20px">
                <S.FirstLoginInputText>기존 비밀번호</S.FirstLoginInputText>
                <S.FirstLoginInput />
            </S.FistLoginInputLayout>
            <S.FistLoginInputLayout marginBottom="20px">
                <S.FirstLoginInputText>새로운 비밀번호</S.FirstLoginInputText>
                <S.FirstLoginInput />
            </S.FistLoginInputLayout>
            <S.FistLoginInputLayout marginBottom="40px">
                <S.FirstLoginInputText>새로운 비밀번호 확인</S.FirstLoginInputText>
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

export const StepTwo: React.FC<Stage> = ({ stage, setStage }) => {
    return (
        <S.FirstLoginBox>
            <S.FirstLoginTitle>추가정보 입력</S.FirstLoginTitle>
            <S.FirstLoginPoint />
            <S.FistLoginInputLayout marginBottom="20px">
                <S.FirstLoginInputText>담당자 이름</S.FirstLoginInputText>
                <S.FirstLoginInput />
            </S.FistLoginInputLayout>
            <S.FistLoginInputLayout marginBottom="20px">
                <S.FirstLoginInputText>담당자 연락처</S.FirstLoginInputText>
                <S.FirstLoginInput />
            </S.FistLoginInputLayout>
            <S.FistLoginInputLayout marginBottom="40px">
                <S.FirstLoginInputText>담당자 이메일</S.FirstLoginInputText>
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

export const StepThree: React.FC<Stage> = ({ stage, setStage }) => {
    return (
        <S.FirstLoginBox>
            <S.FirstLoginTitle>프로필 설정</S.FirstLoginTitle>
            <S.FirstLoginPoint />
            <S.FirstLoginSetProfile>
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
