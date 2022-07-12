import Image from 'next/image';
import React from 'react';
import { selectData } from '../components/SelectPage/constant';
import BackImg from '../assets/Img/BackImg.jpg';
import Left_arrow from '../assets/svg/Left_arrow.svg';
import SelectThings from '../components/SelectPage/SelectThings';
import * as S from '../components/SelectPage/styled';

interface mapType {
    loginType: string;
    text: string;
    img: string;
}

const SelectPage = () => {
    const onClickLoginType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { name } = e.currentTarget;
        if (name == '학생') {
            window.localStorage.setItem('LoginType', 'STUDENT');
        } else if (name == '선생님') {
            window.localStorage.setItem('LoginType', 'TEACHER');
        } else if (name == '기업') {
            window.localStorage.setItem('LoginType', 'MOU');
        }

        window.location.href = '/LoginPage';
    };

    const SelectThingsMap = selectData.map((item: mapType) => {
        return (
            <SelectThings
                onClickLoginType={onClickLoginType}
                text={item.text}
                name={item.loginType}
                img={item.img}
            />
        );
    });

    return (
        <S._SelectPageContainer>
            <S._ImgContainer>
                <Image src={BackImg} />
            </S._ImgContainer>
            <S._SelectContainer>
                <S._SelectBox>
                    <S._SelectTitle>로그인 선택</S._SelectTitle>
                    <S._SelectLine />
                    <S._SelectAria>
                        <S._SelectLayout>{SelectThingsMap}</S._SelectLayout>
                        <S._SelectBackLayout
                            onClick={() => {
                                window.location.href = './';
                            }}>
                            <Image src={Left_arrow} />
                            <S._SelectBackText>돌아가기</S._SelectBackText>
                        </S._SelectBackLayout>
                    </S._SelectAria>
                </S._SelectBox>
            </S._SelectContainer>
        </S._SelectPageContainer>
    );
};

export default SelectPage;
