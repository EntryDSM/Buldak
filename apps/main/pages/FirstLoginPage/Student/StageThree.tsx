import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BackImg from '../../../assets/img/BackImg.jpg';
import PlusBlack from '../../../assets/svg/PlusBlack.svg';
import * as S from '../../../components/FirstLoginPage/styled';

const StageThree = () => {
    const FileInputRef = useRef<HTMLInputElement>(null);

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
                            FileInputRef.current?.click();
                        }}>
                        <input
                            ref={FileInputRef}
                            type="file"
                            accept="image/jpg, image/jpeg, image/png"
                            style={{ display: 'none' }}
                        />
                        <Image src={PlusBlack} />
                    </S.FirstLoginSetProfile>
                    <S.FirstLoginProfileText
                        onClick={() => {
                            FileInputRef.current?.click();
                        }}>
                        프로필 설정
                    </S.FirstLoginProfileText>
                    <S.displayFlex>
                        <Link href={'./StageTwo'}>
                            <S.FirstLoginBackButton>이전으로</S.FirstLoginBackButton>
                        </Link>
                        <S.FirstLoginNextButton>회원가입</S.FirstLoginNextButton>
                    </S.displayFlex>
                </S.FirstLoginBox>
            </S.FirstLoginContainer>
        </S.FirstLoginPageContainer>
    );
};

export default StageThree;
