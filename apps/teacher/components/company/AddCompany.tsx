import styled from '@emotion/styled';
import { Button, RadioButtonBox, TextBox } from '@packages/ui';
import { useEffect } from 'react';
import { theme } from '@packages/emotion-style-provider/src/theme';
import { inputArray } from '../constant';
import useModal from '../../hooks/useModal';
import Calendar from '../Calendar';
import useCalendar from '../../hooks/useCalendar';
import { plusBlackIcon } from '../../assets';
import Image from 'next/image';
import useCompany from '../../hooks/useCompany';
import { translateObjectToString } from '../../utils/translate';
import { createCompany } from '../../api/teachers';

const companyTypeRadioOptions = ['MOU', 'NON_MOU'];

function AddCompany() {
    const { selectModal } = useModal();
    const { year, month, prevMonth, nextMonth, list, checkDayType, selectedDate } = useCalendar();
    const {
        setCompanyInfo,
        companyInfo,
        onChangeRadioValue,
        onChangeInputValue,
        onChangeFile,
        profilePreview,
        uploadImage,
        FD,
    } = useCompany();
    const onClickCreateCompany = async () => {
        try {
            await uploadImage(FD);
            createCompany(companyInfo).then((res) => {
                selectModal({ modal: 'SUCCESS', password: res.password });
            });
        } catch (err) {}
    };
    useEffect(() => {
        if (selectedDate.startDate && selectedDate.endDate)
            setCompanyInfo({
                ...companyInfo,
                start_at: translateObjectToString(selectedDate.startDate),
                end_at: translateObjectToString(selectedDate.endDate),
            });
        else
            setCompanyInfo({
                ...companyInfo,
                start_at: '',
                end_at: '',
            });
    }, [selectedDate]);
    return (
        <_Wrapper>
            <_Center>
                <_ImgWrapper>
                    <input type="file" onChange={onChangeFile} />
                    <div className="profileImage">
                        {profilePreview ? (
                            <img src={profilePreview} alt="preview" className="preview" />
                        ) : (
                            <Image
                                src={companyInfo.profile_image_path || plusBlackIcon}
                                alt="추가"
                                className="profileImage"
                            />
                        )}
                    </div>
                    <p>프로필 사진 설정</p>
                </_ImgWrapper>
                <_InputWrapper>
                    <p>기업 종류</p>
                    <_RadioWrapper>
                        <RadioButtonBox
                            items={companyTypeRadioOptions}
                            onChange={onChangeRadioValue}
                            gap={'15px'}
                            value={companyInfo.is_mou ? 'MOU' : 'NON_MOU'}
                        />
                    </_RadioWrapper>
                </_InputWrapper>
                {inputArray.map((item) => (
                    <_InputWrapper key={item.name}>
                        <p>{item.title}</p>
                        <TextBox
                            width={380}
                            type="text"
                            name={item.name}
                            correct={true}
                            placeholder={item.placeholder}
                            value={companyInfo[item.name] as string}
                            onChange={onChangeInputValue}
                        />
                    </_InputWrapper>
                ))}
                <Calendar
                    year={year}
                    month={month}
                    checkDayType={checkDayType}
                    list={list}
                    prevMonth={prevMonth}
                    nextMonth={nextMonth}
                />
                <Button
                    width={530}
                    height={44}
                    borderWidth={2}
                    borderColor={theme.color.skyblue}
                    fontColor={theme.color.skyblue}
                    content="기업 추가"
                    onClick={onClickCreateCompany}
                />
            </_Center>
        </_Wrapper>
    );
}

export default AddCompany;

const _Wrapper = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
`;

const _Center = styled.div`
    margin: 75px auto;
    width: 530px;
    display: flex;
    flex-direction: column;
    align-items: center;
    > button {
        margin-top: 25px;
    }
    > .calendar {
        margin-top: 35px;
    }
`;

const _ImgWrapper = styled.label`
    height: 128px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    > input {
        width: 0;
        height: 0;
    }
    > .profileImage {
        width: 90px;
        height: 90px;
        border-radius: 100px;
        border: 1px dashed black;
        display: flex;
        align-items: center;
        justify-content: center;
        > img {
            width: 90px;
            height: 90px;
            object-fit: cover;
            object-position: center;
        }
        .preview {
            border: 1px solid black;
            border-radius: 100px;
        }
    }
    > p {
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        text-decoration-line: underline;
        color: ${({ theme }) => theme.color.black};
    }
`;

const _InputWrapper = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 35px;
    > p {
        color: ${({ theme }) => theme.color.black};
        font-weight: 400;
        font-size: 22px;
        line-height: 28px;
    }
    > input {
        width: 380px;
        height: 40px;
        border: 1px solid black;
    }
`;
const _RadioWrapper = styled.div`
    width: 380px;
`;
