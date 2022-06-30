import Image from 'next/image';
import React from 'react';
import BackImg from '../assets/img/BackImg.jpg';
import Left_arrow from '../assets/svg/Left_arrow.svg';
import SelectThings from '../components/SelectPage/SelectThings';
import * as S from '../components/SelectPage/styled';

const SelectPage = () => {
    const Student = (
        <>
            DSM 학생이시라면
            <br />
            학생 로그인을 이용해주세요
        </>
    );

    const Teacher = (
        <>
            선생님이시라면
            <br />
            선생님 로그인을 이용해주세요
        </>
    );

    const Company = (
        <>
            기업이시라면
            <br />
            기업 로그인을 이용해주세요
        </>
    );

    const onClickLoginType = (e: any) => {
        const { name } = e.target;
        if (name == '학생') {
            window.localStorage.setItem('LoginType', name);
        } else if (name == '선생님') {
            window.localStorage.setItem('LoginType', name);
        } else if (name == '기업') {
            window.localStorage.setItem('LoginType', name);
        }
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
