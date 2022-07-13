import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BackImg from '../../../assets/img/BackImg.jpg';
import PlusBlack from '../../../assets/svg/PlusBlack.svg';
import * as S from '../../../components/FirstLoginPage/styled';

const StageThree = () => {
    const FileInputRef = useRef<HTMLInputElement>(null);

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
                            FileInputRef.current?.click();
                        }}>
                        <input
                            ref={FileInputRef}
                            type="file"
                            accept="image/jpg, image/jpeg, image/png"
                            style={{ display: 'none' }}
                        />
                        <Image src={PlusBlack} />
                    </S._FirstLoginSetProfile>
                    <S._FirstLoginProfileText
                        onClick={() => {
                            FileInputRef.current?.click();
                        }}>
                        프로필 설정
                    </S._FirstLoginProfileText>
                    <S._displayFlex>
                        <Link href={'./StageTwo'}>
                            <S._FirstLoginBackButton>이전으로</S._FirstLoginBackButton>
                        </Link>
                        <S._FirstLoginNextButton>회원가입</S._FirstLoginNextButton>
                    </S._displayFlex>
                </S._FirstLoginBox>
            </S._FirstLoginContainer>
        </S._FirstLoginPageContainer>
    );
};

export default StageThree;
