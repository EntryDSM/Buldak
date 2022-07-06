import React, { useState, Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
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
        axios({
            url: '',
            method: 'post',
            data: newPasswordState,
        }).then((res) => {});
    };

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
                        <S.FirstLoginInput
                            value={newPasswordState.password}
                            onChange={onChangePassword}
                            name="password"
                        />
                    </S.FistLoginInputLayout>
                    <S.FistLoginInputLayout marginBottom="20px">
                        <S.FirstLoginInputText>새로운 비밀번호</S.FirstLoginInputText>
                        <S.FirstLoginInput
                            value={newPasswordState.new_password}
                            onChange={onChangePassword}
                            name="new_password"
                        />
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
