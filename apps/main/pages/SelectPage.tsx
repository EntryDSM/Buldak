import Image from 'next/image';
import React from 'react';
import { Company, Teacher, Student } from '../components/SelectPage/constatnt';
import BackImg from '../assets/img/BackImg.jpg';
import Left_arrow from '../assets/svg/Left_arrow.svg';
import SelectThings from '../components/SelectPage/SelectThings';
import * as S from '../components/SelectPage/styled';

const SelectPage = () => {
    const onClickLoginType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { name } = e.currentTarget;
        if (name == '학생') {
            window.localStorage.setItem('LoginType', name);
        } else if (name == '선생님') {
            window.localStorage.setItem('LoginType', name);
        } else if (name == '기업') {
            window.localStorage.setItem('LoginType', name);
        }

        console.log(name);
    };

    return (
        <S.SelectPageContainer>
            <S.ImgContainer>
                <Image src={BackImg} />
            </S.ImgContainer>
            <S.SelectContainer>
                <S.SelectBox>
                    <S.SelectTitle>로그인 선택</S.SelectTitle>
                    <S.SelectLine />
                    <S.SelectAria>
                        <S.SelectLayout>
                            <SelectThings
                                onClickLoginType={onClickLoginType}
                                Text={Student}
                                Name="학생"
                            />
                            <SelectThings
                                onClickLoginType={onClickLoginType}
                                Text={Teacher}
                                Name="선생님"
                            />
                            <SelectThings
                                onClickLoginType={onClickLoginType}
                                Text={Company}
                                Name="기업"
                            />
                        </S.SelectLayout>
                        <S.SelectBackLayout>
                            <Image src={Left_arrow} />
                            <S.SelectBackText>돌아가기</S.SelectBackText>
                        </S.SelectBackLayout>
                    </S.SelectAria>
                </S.SelectBox>
            </S.SelectContainer>
        </S.SelectPageContainer>
    );
};

export default SelectPage;
