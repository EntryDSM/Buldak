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
                        <S._FirstLoginInput
                            value={newPasswordState.password}
                            onChange={onChangePassword}
                            name="password"
                        />
                    </S._FistLoginInputLayout>
                    <S._FistLoginInputLayout marginBottom="20px">
                        <S._FirstLoginInputText>새로운 비밀번호</S._FirstLoginInputText>
                        <S._FirstLoginInput
                            value={newPasswordState.new_password}
                            onChange={onChangePassword}
                            name="new_password"
                        />
                    </S._FistLoginInputLayout>
                    <S._FistLoginInputLayout marginBottom="40px">
                        <S._FirstLoginInputText>새로운 비밀번호 확인</S._FirstLoginInputText>
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
