import React, { useState, Dispatch, SetStateAction } from 'react';
import { TextBox, Button } from '@packages/ui';
import theme from '@packages/emotion-style-provider/src/theme';
import axios from 'axios';
import Image from 'next/image';
import BackImg from '../../assets/img/BackImg.png';
import { getCookie } from '../../Hooks/Cookies';
import * as S from '../../components/ChangePassword/styled';

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
        setNewPasswordState({ ...newPasswordState, [name]: value });
    };

    const onPostNewPassword = () => {
        axios
            .patch('https://server.dsm-repo.com/users/first-password', newPasswordState, {
                headers: {
                    Authorization: `Bearer ${getCookie('access_token')}`,
                },
            })
            .then(() => {
                window.location.href = 'https://user.dsm-repo.com/myPage';
            })
            .catch(() => {
                alert('비밀번호 수정에 실패했습니다');
            });
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
                    <S._FistLoginInputLayout marginBottom="135px">
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
                                content="이전으로"
                                onClick={() => {
                                    window.location.href = './stage-one';
                                }}
                            />
                            <Button
                                width={180}
                                height={40}
                                backgroundColor={theme.color.main}
                                fontColor={theme.color.white}
                                content="변경하기"
                                onClick={onPostNewPassword}
                            />
                        </S._FirstLoginBoxLayout>
                    </S._DisplayFlex>
                </S._FirstLoginBox>
            </S._FirstLoginContainer>
        </S._FirstLoginPageContainer>
    );
};

export default StageOne;
