import React, { useRef } from 'react';
import Image from 'next/image';
import { Button, TextBox } from '@packages/ui';
import theme from '@packages/emotion-style-provider/src/theme';
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
                                    window.location.href = './StageTwo';
                                }}
                            />
                            <Button
                                width={180}
                                height={40}
                                backgroundColor={theme.color.main}
                                fontColor={theme.color.white}
                                content="회원가입"
                            />
                        </S._FirstLoginBoxLayout>
                    </S._DisplayFlex>
                </S._FirstLoginBox>
            </S._FirstLoginContainer>
        </S._FirstLoginPageContainer>
    );
};

export default StageThree;
