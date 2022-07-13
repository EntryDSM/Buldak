import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BackImg from '../../../assets/img/BackImg.jpg';
import * as S from '../../../components/FirstLoginPage/styled';
import axios from 'axios';

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
        axios({
            url: '',
            method: 'post',
            data: certified.phoneNumber,
            headers: {
                Authorization: '',
            },
        });
    };

    const onPostCertified = () => {
        axios({
            url: '',
            method: 'post',
            data: certified,
            headers: {
                Authorization: '',
            },
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
                        <S._displayFlex>
                            <S._FirstLoginCitationInput
                                name="phoneNumber"
                                value={certified.phoneNumber}
                                onChange={onChangeNumber}
                            />
                            <S._FirstLoginCitation onClick={onPostPhoneNumber}>
                                인증하기
                            </S._FirstLoginCitation>
                        </S._displayFlex>
                    </S._FistLoginInputLayout>
                    <S._FistLoginInputLayout marginBottom="135px">
                        <S._FirstLoginInputText>인증번호</S._FirstLoginInputText>
                        <S._FirstLoginInput
                            name="certifiedNumber"
                            value={certified.certifiedNumber}
                            onChange={onChangeNumber}
                        />
                    </S._FistLoginInputLayout>
                    <S._displayFlex>
                        <Link href={'./StageOne'}>
                            <S._FirstLoginBackButton>이전으로</S._FirstLoginBackButton>
                        </Link>
                        <Link href={'./StageThree'}>
                            <S._FirstLoginNextButton onClick={onPostCertified}>
                                다음으로
                            </S._FirstLoginNextButton>
                        </Link>
                    </S._displayFlex>
                </S._FirstLoginBox>
            </S._FirstLoginContainer>
        </S._FirstLoginPageContainer>
    );
};

export default StageTwo;
