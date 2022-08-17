import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TextBox } from '@packages/ui';
import PlusBlack from '../../../assets/svg/PlusBlack.svg';
import BackImg from '../../../assets/img/BackImg.jpg';
import * as S from '../../../components/FirstLoginPage/styled';

const StageTwo = () => {
    const [file, setFile] = useState<string | Blob>('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const onChangeImg = (event: any) => {
        setFile(event.target.files[0]);
    };

    const onPostProfile = () => {
        const formData = new FormData();
        formData.append('img', file);
        console.log(file);
    };

    return (
        <S._FirstLoginPageContainer>
            <S._ImgContainer>
                <Image src={BackImg} />
            </S._ImgContainer>
            <S._FirstLoginContainer>
                <S._FirstLoginBox>
                    <S._FirstLoginTitle>프로필 설정</S._FirstLoginTitle>
                    <S._FirstLoginPoint />
                    <S._FirstLoginSetProfile
                        onClick={() => {
                            fileInputRef.current?.click();
                        }}>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/jpg, image/jpeg, image/png"
                            style={{ display: 'none' }}
                            onChange={onChangeImg}
                        />
                        <Image src={PlusBlack} />
                    </S._FirstLoginSetProfile>
                    <S._FirstLoginProfileText
                        onClick={() => {
                            fileInputRef.current?.click();
                        }}>
                        프로필 설정
                    </S._FirstLoginProfileText>
                    <S._DisplayFlex>
                        <Link href={'./StageOne'}>
                            <S._FirstLoginBackButton>이전으로</S._FirstLoginBackButton>
                        </Link>
                        <S._FirstLoginNextButton onClick={onPostProfile}>
                            회원가입
                        </S._FirstLoginNextButton>
                    </S._DisplayFlex>
                </S._FirstLoginBox>
            </S._FirstLoginContainer>
        </S._FirstLoginPageContainer>
    );
};

export default StageTwo;

{
}
