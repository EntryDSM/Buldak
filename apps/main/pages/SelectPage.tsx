import Image from 'next/image';
import React, { useState } from 'react';
import { Company, Teacher, Student } from '../components/SelectPage/constatnt';
import studentSVG from '../assets/svg/Student.svg';
import teacherSVG from '../assets/svg/Teacher.svg';
import companySVG from '../assets/svg/Company.svg';
import BackImg from '../assets/img/BackImg.jpg';
import Left_arrow from '../assets/svg/Left_arrow.svg';
import SelectThings from '../components/SelectPage/SelectThings';
import * as S from '../components/SelectPage/styled';

const SelectPage = () => {
    const selectThings = [
        { Type: '학생', Text: Student, img: studentSVG },
        { Type: '선생님', Text: Teacher, img: teacherSVG },
        { Type: '기업', Text: Company, img: companySVG },
    ];

    const onClickLoginType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { name } = e.currentTarget;
        if (name == '학생') {
            window.localStorage.setItem('LoginType', name);
        } else if (name == '선생님') {
            window.localStorage.setItem('LoginType', name);
        } else if (name == '기업') {
            window.localStorage.setItem('LoginType', name);
        }
    };

    interface MapType {
        Type: string;
        Text: object;
        img: string;
    }

    const SelectThingsMap = selectThings.map((item: MapType) => {
        return (
            <SelectThings
                onClickLoginType={onClickLoginType}
                Text={item.Text}
                Name={item.Type}
                Img={item.img}
            />
        );
    });

    return (
        <S.SelectPageContainer>
            <S.ImgContainer>
                <Image src={BackImg} />
            </S.ImgContainer>
            <S.SelectContainer>
                <S.SelectBox>
                    <S.SelectTitle>로그인 선택</S.SelectTitle>
                    <S.SelectLine />
                    <S.SelectAria href="./">
                        <S.SelectLayout>{SelectThingsMap}</S.SelectLayout>
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
