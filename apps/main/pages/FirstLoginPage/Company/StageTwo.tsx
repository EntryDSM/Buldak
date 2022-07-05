import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
        <S.FirstLoginPageContainer>
            <S.ImgContainer>
                <Image src={BackImg} />
            </S.ImgContainer>
            <S.FirstLoginContainer>
                <S.FirstLoginBox>
                    <S.FirstLoginTitle>프로필 설정</S.FirstLoginTitle>
                    <S.FirstLoginPoint />
                    <S.FirstLoginSetProfile
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
                    </S.FirstLoginSetProfile>
                    <S.FirstLoginProfileText
                        onClick={() => {
                            fileInputRef.current?.click();
                        }}>
                        프로필 설정
                    </S.FirstLoginProfileText>
                    <S.displayFlex>
                        <Link href={'./StageOne'}>
                            <S.FirstLoginBackButton>이전으로</S.FirstLoginBackButton>
                        </Link>
                        <S.FirstLoginNextButton onClick={onPostProfile}>
                            회원가입
                        </S.FirstLoginNextButton>
                    </S.displayFlex>
                </S.FirstLoginBox>
            </S.FirstLoginContainer>
        </S.FirstLoginPageContainer>
    );
};

export default StageTwo;

{
}
