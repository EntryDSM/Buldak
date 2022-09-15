<<<<<<< HEAD
import styled from '@emotion/styled';
import { useEffect } from 'react';
import ModalWrapper from '../modals/ModalWrapper';
import { Button, TextBox } from '@packages/ui';
import { theme } from '@packages/emotion-style-provider/src/theme';
import { inputArray } from '../constant';
import useModal from '../../hooks/useModal';
import { useQuery } from 'react-query';
import { getCompanyDetail } from '../../api/teachers';
import useCompany from '../../hooks/useCompany';
import Calendar from '../Calendar';
import useCalendar from '../../hooks/useCalendar';
import { translateObjectToString, translateStringToObject } from '../../utils/translate';
import { closeIcon } from '../../assets';
import Image from 'next/image';
import { queryKeys } from '../../utils/constant';

function EditInfo() {
    const { closeModal, selectedId } = useModal();
    const { companyInfo, setCompanyInfo, onChangeInputValue, onClickEditCompany } = useCompany();
    const { year, month, prevMonth, nextMonth, list, checkDayType, selectedDate, setSelectedDate } =
        useCalendar();
    const { data } = useQuery([queryKeys.getCompanyDetails, selectedId], () =>
        getCompanyDetail(selectedId || ''),
    );
    useEffect(() => {
        if (data !== undefined) {
            setCompanyInfo(data);
            setSelectedDate({
                startDate: translateStringToObject(data.start_at),
                endDate: translateStringToObject(data.end_at),
            });
        }
    }, [data]);
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
        <ModalWrapper>
            <_Wrapper>
                <_Header>
                    <p>기업 정보 변경</p>
                    <button onClick={closeModal}>
                        <Image src={closeIcon} alt="닫기" />
                    </button>
                </_Header>
                <_Body>
                    <_InputsWrapper>
                        {inputArray.map((item) => (
                            <_InputWrapper key={item.name}>
                                <p>{item.title}</p>
                                <TextBox
                                    width={300}
                                    type="text"
                                    name={item.name}
                                    correct={true}
                                    placeholder={item.placeholder}
                                    value={companyInfo[item.name] as string}
                                    onChange={onChangeInputValue}
                                />
                            </_InputWrapper>
                        ))}
                    </_InputsWrapper>
                    <Calendar
                        year={year}
                        month={month}
                        prevMonth={prevMonth}
                        nextMonth={nextMonth}
                        list={list}
                        checkDayType={checkDayType}
                    />
                </_Body>
                <Button
                    width={300}
                    height={44}
                    content="정보 변경"
                    borderColor={theme.color.skyblue}
                    fontColor={theme.color.skyblue}
                    borderWidth={2}
                    onClick={() => onClickEditCompany(selectedId || '')}
                />
            </_Wrapper>
        </ModalWrapper>
    );
}

export default EditInfo;

const _Wrapper = styled.div`
    background: ${({ theme }) => theme.color.white};
    border-radius: 8px;
    width: 1100px;
    height: 580px;
    display: flex;
    flex-direction: column;
    > button {
        margin: 30px 50px 0 auto;
    }
`;

const _Header = styled.div`
    width: 100%;
    height: 68px;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray500};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
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
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 50px;
    height: 340px;
    align-items: center;
    margin-top: 53px;
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
    :last-child {
        margin-bottom: 0;
    }
`;

const _InputsWrapper = styled.div`
    width: 440px;
    display: flex;
    flex-direction: column;
`;
=======
import styled from '@emotion/styled';
import { useEffect } from 'react';
import ModalWrapper from '../modals/ModalWrapper';
import { Button, TextBox } from '@packages/ui';
import { theme } from '@packages/emotion-style-provider/src/theme';
import { inputArray } from '../constant';
import useModal from '../../hooks/useModal';
import { useQuery } from 'react-query';
import { getCompanyDetail } from '../../api/teachers';
import useCompany from '../../hooks/useCompany';
import Calendar from '../Calendar';
import useCalendar from '../../hooks/useCalendar';
import { translateObjectToString, translateStringToObject } from '../../utils/translate';
import { closeIcon } from '../../assets';
import Image from 'next/image';
import { queryKeys } from '../../utils/constant';

function EditInfo() {
    const { closeModal, selectedId } = useModal();
    const { companyInfo, setCompanyInfo, onChangeInputValue, onClickEditCompany } = useCompany();
    const { year, month, prevMonth, nextMonth, list, checkDayType, selectedDate, setSelectedDate } =
        useCalendar();
    const { data } = useQuery([queryKeys.getCompanyDetails, selectedId], () =>
        getCompanyDetail(selectedId || ''),
    );
    useEffect(() => {
        if (data !== undefined) {
            setCompanyInfo(data);
            setSelectedDate({
                startDate: translateStringToObject(data.start_at),
                endDate: translateStringToObject(data.end_at),
            });
        }
    }, [data]);
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
        <ModalWrapper>
            <_Wrapper>
                <_Header>
                    <p>기업 정보 변경</p>
                    <button onClick={closeModal}>
                        <Image src={closeIcon} alt="닫기" />
                    </button>
                </_Header>
                <_Body>
                    <_InputsWrapper>
                        {inputArray.map((item) => (
                            <_InputWrapper key={item.name}>
                                <p>{item.title}</p>
                                <TextBox
                                    width={300}
                                    type="text"
                                    name={item.name}
                                    correct={true}
                                    placeholder={item.placeholder}
                                    value={companyInfo[item.name] as string}
                                    onChange={onChangeInputValue}
                                />
                            </_InputWrapper>
                        ))}
                    </_InputsWrapper>
                    <Calendar
                        year={year}
                        month={month}
                        prevMonth={prevMonth}
                        nextMonth={nextMonth}
                        list={list}
                        checkDayType={checkDayType}
                    />
                </_Body>
                <Button
                    width={300}
                    height={44}
                    content="정보 변경"
                    borderColor={theme.color.skyblue}
                    fontColor={theme.color.skyblue}
                    borderWidth={2}
                    onClick={() => onClickEditCompany(selectedId || '')}
                />
            </_Wrapper>
        </ModalWrapper>
    );
}

export default EditInfo;

const _Wrapper = styled.div`
    background: ${({ theme }) => theme.color.white};
    border-radius: 8px;
    width: 1100px;
    height: 580px;
    display: flex;
    flex-direction: column;
    > button {
        margin: 30px 50px 0 auto;
    }
`;

const _Header = styled.div`
    width: 100%;
    height: 68px;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray500};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
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
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 50px;
    height: 340px;
    align-items: center;
    margin-top: 53px;
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
    :last-child {
        margin-bottom: 0;
    }
`;

const _InputsWrapper = styled.div`
    width: 440px;
    display: flex;
    flex-direction: column;
`;
>>>>>>> e00e9c85974154ffb8db7f5caf1c1292b3c3e366
