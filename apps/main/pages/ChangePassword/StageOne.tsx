import React, { useState } from 'react';
import Image from 'next/image';
import { TextBox, Button } from '@packages/ui';
import theme from '@packages/emotion-style-provider/src/theme';
import axios from 'axios';
import BackImg from '../../assets/img/BackImg.png';
import * as S from '../../components/ChangePassword/styled';

interface certifiedType {
    email: string;
    certifiedNumber: string;
}

const StageTwo = () => {
    const [success, setSuccess] = useState<boolean>(false);
    const [certified, setCertified] = useState<certifiedType>({
        email: '',
        certifiedNumber: '',
    });

    const onChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCertified({ ...certified, certifiedNumber: event.target.value });
    };

    const onPostEmail = () => {
        axios
            .post(
                'http://114.108.176.85:8080/auth/email',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                    },
                },
            )
            .then((res) => {
                setCertified({ ...certified, email: res.data.email });
            })
            .catch(() => {
                alert('오류가 발생했습니다');
            });
    };

    const onPostCertified = () => {
        axios
            .head('http://114.108.176.85:8080/auth/verify', {
                params: {
                    authCode: certified.certifiedNumber,
                    value: certified.email,
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            })
            .then((res) => {
                setSuccess(true);
            })
            .catch((res) => {
                setCertified({
                    email: '',
                    certifiedNumber: '',
                });
            });
    };

    return (
        <S._FirstLoginPageContainer>
            <S._ImgContainer>
                <Image src={BackImg} />
            </S._ImgContainer>
            <S._FirstLoginContainer>
                <S._FirstLoginBox>
                    <S._FirstLoginTitle>비밀번호 변경</S._FirstLoginTitle>
                    <S._FirstLoginPoint />
                    <S._FistLoginInputLayout marginBottom="20px">
                        <S._FirstLoginInputText>인증코드 발송</S._FirstLoginInputText>
                        <Button
                            onClick={onPostEmail}
                            width={380}
                            height={44}
                            backgroundColor={theme.color.skyblue}
                            fontColor={theme.color.white}
                            content="인증번호 발송"
                        />
                    </S._FistLoginInputLayout>
                    <S._FistLoginInputLayout marginBottom="135px">
                        <S._FirstLoginInputText>인증코드 확인</S._FirstLoginInputText>
                        <S._DisplayFlex>
                            <TextBox
                                width={280}
                                correct={true}
                                type="text"
                                value={certified.certifiedNumber}
                                onChange={onChangeNumber}
                                placeholder="전화번호를 입력해 주세요."
                                name="phoneNumber"
                            />
                            <S._FirstLoginCitation onClick={onPostCertified}>
                                인증하기
                            </S._FirstLoginCitation>
                        </S._DisplayFlex>
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
                                    window.location.href = '/';
                                }}
                            />
                            <Button
                                width={180}
                                height={40}
                                backgroundColor={theme.color.main}
                                fontColor={theme.color.white}
                                content="다음으로"
                                onClick={() => {
                                    if (success) {
                                        window.location.href = './StageTwo';
                                    }
                                }}
                            />
                        </S._FirstLoginBoxLayout>
                    </S._DisplayFlex>
                </S._FirstLoginBox>
            </S._FirstLoginContainer>
        </S._FirstLoginPageContainer>
    );
};

export default StageTwo;
