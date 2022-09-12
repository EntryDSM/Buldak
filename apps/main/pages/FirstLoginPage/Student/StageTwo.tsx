import React, { useState } from 'react';
import Image from 'next/image';
import { TextBox, Button } from '@packages/ui';
import theme from '@packages/emotion-style-provider/src/theme';
import axios from 'axios';
import BackImg from '../../../assets/img/BackImg.jpg';
import * as S from '../../../components/FirstLoginPage/styled';

interface certifiedType {
    phoneNumber: string;
    certifiedNumber: string;
}

const StageTwo = () => {
    const [certified, setCertified] = useState<certifiedType>({
        phoneNumber: '',
        certifiedNumber: '',
    });

    const onChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const afterValue = value.replace(/[^0-9]/gi, '');
        setCertified({ ...certified, [name]: afterValue });
    };

    const onPostPhoneNumber = () => {
        axios
            .post(
                'http://114.108.176.85:8080/auth/phone-number',
                { phone_number: certified.phoneNumber },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                    },
                },
            )
            .then((res) => {
                console.log(res);
            });
    };

    const onPostCertified = () => {
        axios
            .head('http://114.108.176.85:8080/auth/verify', {
                params: {
                    authCode: certified.certifiedNumber,
                    value: certified.phoneNumber,
                },
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
                    <S._FirstLoginTitle>추가정보 입력</S._FirstLoginTitle>
                    <S._FirstLoginPoint />
                    <S._FistLoginInputLayout marginBottom="20px">
                        <S._FirstLoginInputText>전화번호</S._FirstLoginInputText>
                        <S._DisplayFlex>
                            <TextBox
                                width={280}
                                correct={true}
                                type="text"
                                value={certified.phoneNumber}
                                onChange={onChangeNumber}
                                placeholder="전화번호를 입력해 주세요."
                                name="phoneNumber"
                            />
                            <S._FirstLoginCitation onClick={onPostPhoneNumber}>
                                인증하기
                            </S._FirstLoginCitation>
                        </S._DisplayFlex>
                    </S._FistLoginInputLayout>
                    <S._FistLoginInputLayout marginBottom="135px">
                        <S._FirstLoginInputText>인증번호</S._FirstLoginInputText>
                        <TextBox
                            width={380}
                            correct={true}
                            type="text"
                            value={certified.certifiedNumber}
                            onChange={onChangeNumber}
                            placeholder="인증번호를 입력해 주세요."
                            name="certifiedNumber"
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
                                content="다음으로"
                                onClick={onPostCertified}
                            />
                        </S._FirstLoginBoxLayout>
                    </S._DisplayFlex>
                </S._FirstLoginBox>
            </S._FirstLoginContainer>
        </S._FirstLoginPageContainer>
    );
};

export default StageTwo;
