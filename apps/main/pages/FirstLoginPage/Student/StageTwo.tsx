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
        <S.FirstLoginPageContainer>
            <S.ImgContainer>
                <Image src={BackImg} />
            </S.ImgContainer>
            <S.FirstLoginContainer>
                <S.FirstLoginBox>
                    dww
                    <S.FirstLoginTitle>추가정보 입력</S.FirstLoginTitle>
                    <S.FirstLoginPoint />
                    <S.FistLoginInputLayout marginBottom="20px">
                        <S.FirstLoginInputText>전화번호</S.FirstLoginInputText>
                        <S.displayFlex>
                            <S.FirstLoginCitationInput
                                name="phoneNumber"
                                value={certified.phoneNumber}
                                onChange={onChangeNumber}
                            />
                            <S.FirstLoginCitation onClick={onPostPhoneNumber}>
                                인증하기
                            </S.FirstLoginCitation>
                        </S.displayFlex>
                    </S.FistLoginInputLayout>
                    <S.FistLoginInputLayout marginBottom="135px">
                        <S.FirstLoginInputText>인증번호</S.FirstLoginInputText>
                        <S.FirstLoginInput
                            name="certifiedNumber"
                            value={certified.certifiedNumber}
                            onChange={onChangeNumber}
                        />
                    </S.FistLoginInputLayout>
                    <S.displayFlex>
                        <Link href={'./StageOne'}>
                            <S.FirstLoginBackButton>이전으로</S.FirstLoginBackButton>
                        </Link>
                        <Link href={'./StageThree'}>
                            <S.FirstLoginNextButton onClick={onPostCertified}>
                                다음으로
                            </S.FirstLoginNextButton>
                        </Link>
                    </S.displayFlex>
                </S.FirstLoginBox>
            </S.FirstLoginContainer>
        </S.FirstLoginPageContainer>
    );
};

export default StageTwo;
