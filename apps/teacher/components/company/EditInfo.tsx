import styled from '@emotion/styled';
import { ChangeEvent, useEffect, useState } from 'react';
import ModalWrapper from '../ModalWrapper';
import { Button, TextBox } from '@packages/ui';
import { theme } from '@packages/emotion-style-provider/src/theme';
import { inputArray } from '../constant';
import useModal from '../../hooks/useModal';
import { useQuery } from 'react-query';
import { editCompany, getCompanyDetail } from '../../api/teachers';
import { GetCompanyDetailResponse } from '../../models/teachers/responses';
import Calendar from '../Calendar';
import useCalendar from '../../hooks/useCalendar';
import { translateDateToString, translateStringToDate } from '../../utils/translate';

function EditInfo() {
    const { closeModal, selectedId } = useModal();
    const [companyInfo, setCompanyInfo] = useState<GetCompanyDetailResponse>({
        profile_image_path: '',
        company_name: '',
        location: '',
        start_at: '',
        end_at: '',
        name: '',
        phone_number: '',
        email: '',
        company_id: '',
    });
    const { data } = useQuery(['getCompanyDetail', selectedId], () =>
        getCompanyDetail(selectedId || ''),
    );
    const { year, month, prevMonth, nextMonth, list, checkDayType, selectedDate, setSelectedDate } =
        useCalendar();
    useEffect(() => {
        if (data !== undefined) {
            setCompanyInfo(data);
            const { startDate, endDate } = translateStringToDate(data.start_at, data.end_at);
            setSelectedDate({
                startDate,
                endDate,
            });
        }
    }, [data]);
    const onChnageCompanyInfo = (e: ChangeEvent<HTMLInputElement>) => {
        setCompanyInfo({
            ...companyInfo,
            [e.target.name]: e.target.value,
        });
    };
    const onClickEditCompanyInfo = () => {
        editCompany(selectedId || '', companyInfo);
    };
    useEffect(() => {
        if (selectedDate.startDate && selectedDate.endDate) {
            const date = translateDateToString(selectedDate);
            setCompanyInfo({
                ...companyInfo,
                start_at: date.start_at,
                end_at: date.end_at,
            });
        } else
            setCompanyInfo({
                ...companyInfo,
                start_at: '',
                end_at: '',
            });
    }, [selectedDate]);
    return (
        <ModalWrapper closeModal={closeModal}>
            <_Wrapper>
                <_Header>
                    <p>기업 정보 변경</p>
                    <div id="exit" />
                </_Header>
                <_Body>
                    <_InputsWrapper>
                        {inputArray.map((item) => (
                            <_InputWrapper>
                                <p>{item.title}</p>
                                <TextBox
                                    width={300}
                                    type="text"
                                    name={item.name}
                                    correct={true}
                                    placeholder={item.placeholder}
                                    value={companyInfo[item.name]}
                                    onChange={onChnageCompanyInfo}
                                />
                            </_InputWrapper>
                        ))}
                    </_InputsWrapper>
                    <_CalendarWrapper>
                        <Calendar
                            year={year}
                            month={month}
                            prevMonth={prevMonth}
                            nextMonth={nextMonth}
                            list={list}
                            checkDayType={checkDayType}
                        />
                        <Button
                            width={300}
                            height={44}
                            content="정보 변경"
                            borderColor={theme.color.skyblue}
                            fontColor={theme.color.skyblue}
                            borderWidth={2}
                            onClick={onClickEditCompanyInfo}
                        />
                    </_CalendarWrapper>
                </_Body>
            </_Wrapper>
        </ModalWrapper>
    );
}

export default EditInfo;

const _Wrapper = styled.div`
    background: ${({ theme }) => theme.color.white};
    border-radius: 8px;
    width: 1100px;
    min-height: 580px;
    display: flex;
    flex-direction: column;
`;

const _Header = styled.div`
    width: 100%;
    height: 68px;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray500};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px 0px 20px;
    > p {
        font-weight: 500;
        font-size: 22px;
        line-height: 28px;
        color: ${({ theme }) => theme.color.gray700};
    }
    > #exit {
        width: 34px;
        height: 34px;
        border: 1px solid black;
    }
`;

const _Body = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 63px 50px 53px 50px;
`;

const _InputWrapper = styled.div`
    width: 440px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    > p {
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
    }
`;

const _InputsWrapper = styled.div`
    width: 440px;
    display: flex;
    flex-direction: column;
`;

const _CalendarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 530px;
    box-sizing: border-box;
    > button {
        margin-top: 50px;
    }
`;
