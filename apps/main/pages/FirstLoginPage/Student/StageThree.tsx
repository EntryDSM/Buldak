import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@packages/ui';
import theme from '@packages/emotion-style-provider/src/theme';
import BackImg from '../../../assets/img/BackImg.jpg';
import PlusBlack from '../../../assets/svg/PlusBlack.svg';
import axios from 'axios';
import * as S from '../../../components/FirstLoginPage/styled';

const StageThree = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imageSrc, setImageSrc] = useState<string>('');

    const onChangeImg = (event: React.ChangeEvent<HTMLInputElement>) => {
        const formData = new FormData();
        event.preventDefault();
        if (event.target.files) {
            formData.append('file', event.target.files[0]);
            axios
                .post('http://114.108.176.85:8080/images', formData, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                    },
                    params: {
                        type: 'PROFILE',
                    },
                })
                .then((res) => {
                    setImageSrc(res.data.image_path);
                })
                .catch(() => {
                    alert('사진을 선택해주세요');
                });
        }
    };

    const onPostProfile = () => {
        axios
            .get('http://114.108.176.85:8080/students', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            })
            .then((res) => {
                axios
                    .patch(
                        'http://114.108.176.85:8080/users/information',
                        {
                            location: res.data.location,
                            name: res.data.name,
                            phone_number: res.data.phone_number,
                            profile_image_path: imageSrc,
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                            },
                        },
                    )
                    .catch(() => {
                        alert('다시한번 시도해주세요');
                        setImageSrc('');
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
                        <S._FirstLoginProfileBox>
                            {imageSrc ? (
                                <S._FirstLoginProfile
                                    style={{ backgroundImage: `url(${imageSrc})` }}
                                />
                            ) : (
                                <Image src={PlusBlack} />
                            )}
                        </S._FirstLoginProfileBox>
                    </S._FirstLoginSetProfile>
                    <S._FirstLoginProfileText
                        onClick={() => {
                            fileInputRef.current?.click();
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
                                onClick={onPostProfile}
                            />
                        </S._FirstLoginBoxLayout>
                    </S._DisplayFlex>
                </S._FirstLoginBox>
            </S._FirstLoginContainer>
        </S._FirstLoginPageContainer>
    );
};

export default StageThree;
