import styled from '@emotion/styled';
import { Button, TextBox } from '@packages/ui';
import { ChangeEvent, useEffect, useState } from 'react';
import { theme } from '@packages/emotion-style-provider/src/theme';
import { CompanyInfo, inputArray } from '../constant';
import useModal from '../../hooks/useModal';
import Calendar from '../Calendar';
import useCalendar from '../../hooks/useCalendar';

function AddCompany() {
    const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({
        profile_image_path: '',
        company_name: '',
        location: '',
        start_at: '',
        end_at: '',
        name: '',
        phone_number: '',
        email: '',
    });
    const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setCompanyInfo({
            ...companyInfo,
            [e.target.name]: e.target.value,
        });
    };
    const { selectModal } = useModal();
    const { year, month, prevMonth, nextMonth, list, checkDayType, selectedDate } = useCalendar();
    useEffect(() => {
        if (selectedDate.startDate && selectedDate.endDate)
            setCompanyInfo({
                ...companyInfo,
                start_at: `${selectedDate.startDate.year}-${selectedDate.startDate.month}-${selectedDate.startDate.date}`,
                end_at: `${selectedDate.endDate.year}-${selectedDate.endDate.month}-${selectedDate.endDate.date}`,
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
                    <div id="img"></div>
                    <p>프로필 사진 설정</p>
                </_ImgWrapper>
                {inputArray.map((item) => {
                    return (
                        <_InputWrapper key={item.name}>
                            <p>{item.title}</p>
                            <TextBox
                                width={380}
                                type="text"
                                name={item.name}
                                correct={true}
                                placeholder={item.placeholder}
                                value={companyInfo[item.name]}
                                onChange={onChangeInputValue}
                            />
                        </_InputWrapper>
                    );
                })}
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
                    onClick={() => selectModal('SUCCESS')}
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

const _ImgWrapper = styled.div`
    height: 128px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    > #img {
        width: 90px;
        height: 90px;
        border-radius: 100px;
        border: 1px dashed black;
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

const _TempCalendar = styled.div`
    //후에 달력으로 대체
    width: 530px;
    height: 300px;
    border: 1px solid black;
    margin-top: 35px;
`;

const _AddButton = styled.button`
    margin-top: 35px;
    width: 530px;
    height: 44px;
    border: 1px solid ${({ theme }) => theme.color.skyblue};
`;
