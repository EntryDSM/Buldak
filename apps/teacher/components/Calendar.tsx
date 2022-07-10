import styled from '@emotion/styled';
import { useEffect, useMemo, useState } from 'react';

const dayList = ['일', '월', '화', '수', '목', '금', '토'];

type dateType = 'next' | 'prev' | 'thisMonth';

interface SelectedDate {
    startDate: {
        year: number;
        month: number;
        date: number;
    } | null;
    endDate: {
        year: number;
        month: number;
        date: number;
    } | null;
}

const Calendar = () => {
    const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
    const [year, setYear] = useState(new Date().getFullYear());
    const [selectedDate, setSelectedDate] = useState<SelectedDate>({
        startDate: null,
        endDate: null,
    });
    useEffect(() => {
        if (month > 12) {
            setMonth(1);
            setYear(year + 1);
        } else if (month < 1) {
            setMonth(12);
            setYear(year - 1);
        }
    }, [month]);
    const date = useMemo(() => {
        const prevMonthLastDate = new Date(year, month - 1, 0).getDate();
        const lastDate = new Date(year, month, 0).getDate();
        const firstDay = new Date(year, month - 1, 1).getDay();
        const showPrevMonthDates = Array(firstDay)
            .fill(void 0)
            .map((_, index) => prevMonthLastDate - index)
            .sort((a, b) => a - b);

        const thisDateArray = Array(lastDate)
            .fill(void 0)
            .map((_, index) => index + 1);

        const nextMonthPreviewDateCount =
            prevMonthLastDate + lastDate > 35 ? 42 - firstDay - lastDate : 35 - firstDay - lastDate;

        const nextMonthPreviewArray = Array(nextMonthPreviewDateCount)
            .fill(void 0)
            .map((_, index) => index + 1);
        const newArray = [...showPrevMonthDates, ...thisDateArray, ...nextMonthPreviewArray];

        return {
            prevMonthLastDate,
            firstDay,
            lastDate,
            newArray,
        };
    }, [month]);
    const checkDate = (date: number, index: number): dateType => {
        if (index > 20 && date < 14) return 'next';
        else if (index < 7 && date > 20) return 'prev';
        else return 'thisMonth';
    };
    const nextMonth = () => {
        setMonth(month + 1);
    };
    const prevMonth = () => {
        setMonth(month - 1);
    };
    const onClickDate = (dateType: dateType, year: number, month: number, date: number) => {
        if (dateType === 'prev') prevMonth();
        else if (dateType === 'next') nextMonth();
        else if (selectedDate.startDate && selectedDate.endDate === null)
            setSelectedDate({
                ...selectedDate,
                endDate: {
                    year,
                    month,
                    date,
                },
            });
        else if (selectedDate.endDate !== null || selectedDate.startDate === null) {
            setSelectedDate({
                startDate: {
                    year,
                    month,
                    date,
                },
                endDate: null,
            });
        }
    };
    const isIncludeSelectedDate = (year: number, month: number, date: number) => {
        if (selectedDate.startDate !== null && selectedDate.endDate !== null) {
            if (selectedDate.endDate.year > selectedDate.startDate.year) {
                return (
                    (year === selectedDate.startDate.year && month === 0
                        ? 12
                        : month >= selectedDate.startDate.month &&
                          date >= selectedDate.startDate.date) ||
                    (year === selectedDate.endDate.year && month === 13
                        ? 1
                        : month <= selectedDate.endDate.month &&
                          date <= selectedDate.endDate.date) ||
                    (year > selectedDate.startDate.year && year < selectedDate.endDate.year) ||
                    (year === selectedDate.startDate.year &&
                        month > selectedDate.startDate.month) ||
                    (year === selectedDate.endDate.year && month < selectedDate.endDate.month) ||
                    (year === selectedDate.startDate.year &&
                        month === selectedDate.startDate.month &&
                        date >= selectedDate.startDate.date) ||
                    (year === selectedDate.endDate.year &&
                        month === selectedDate.endDate.month &&
                        date <= selectedDate.endDate.date)
                );
            }
            if (selectedDate.endDate.month > selectedDate.startDate.month) {
                return (
                    (month === selectedDate.startDate.month &&
                        date >= selectedDate.startDate.date) ||
                    (month === selectedDate.endDate.month && date <= selectedDate.endDate.date) ||
                    (month > selectedDate.startDate.month && month < selectedDate.endDate.month)
                );
            }
            return (
                year >= selectedDate.startDate.year &&
                month >= selectedDate.startDate.month &&
                date >= selectedDate.startDate.date &&
                year <= selectedDate.endDate.year &&
                month <= selectedDate.endDate.month &&
                date <= selectedDate.endDate.date
            );
        }
    };
    const list = useMemo(() => {
        return date.newArray.map((date, index) => {
            const type = checkDate(date, index);
            return (
                <_DateBox
                    dateType={index % 7 === 0 ? 'sun' : 'weekday'}
                    isWeekEnd={index % 7 === 0 || index % 7 === 6}
                    key={index}
                    className={`${type}  ${
                        isIncludeSelectedDate(
                            type === 'prev' && month === 1
                                ? year - 1
                                : type === 'next' && month === 12
                                ? year + 1
                                : year,
                            type === 'prev' ? month - 1 : type === 'next' ? month + 1 : month,
                            date,
                        )
                            ? 'include'
                            : 'notInclude'
                    }`}
                    onClick={() => onClickDate(type, year, month, date)}>
                    {date}
                </_DateBox>
            );
        });
    }, [date, year, month, selectedDate]);
    return (
        <_Wrapper className="calendar">
            <_MonthWrapper>
                <button onClick={prevMonth}>{'<'}</button>
                <_Month>{month}월</_Month>
                <button onClick={nextMonth}>{'>'}</button>
            </_MonthWrapper>
            <_DayWrapper>
                {dayList.map((item, index) => (
                    <_DateBox
                        dateType={index === 0 ? 'sun' : 'weekday'}
                        isWeekEnd={index % 7 === 0 || index % 7 === 6}
                        key={index}>
                        {item}
                    </_DateBox>
                ))}
            </_DayWrapper>
            <_DateWrapper>{list}</_DateWrapper>
        </_Wrapper>
    );
};
export default Calendar;

const _Wrapper = styled.section`
    width: 530px;
    min-height: 300px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme.color.gray700};
    padding: 25px 70px;
`;
const _MonthWrapper = styled.div`
    width: 131px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > button {
        width: 20px;
        height: 20px;
        border: 1px solid ${({ theme }) => theme.color.gray900};
        border-radius: 50%;
    }
`;
const _Month = styled.strong`
    font-size: 20px;
    line-height: 25px;
    color: ${({ theme }) => theme.color.black};
    font-weight: 500;
`;
const _DayWrapper = styled.div`
    display: flex;
    margin-top: 15px;
`;
const _DateWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-top: 11px;
    color: ${({ theme }) => theme.color.black};
    > .include {
        background-color: ${({ theme }) => theme.color.skyblue};
        color: ${({ theme }) => theme.color.white};
    }
    > .prev,
    .next {
        color: ${({ theme }) => theme.color.point};
    }
`;

interface DateProps {
    dateType: 'sun' | 'weekday' | 'sat';
    isWeekEnd: boolean;
}

const _DateBox = styled.li<DateProps>`
    width: ${({ isWeekEnd }) => (isWeekEnd ? '41' : '60.5')}px;
    height: 28px;
    font-size: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ dateType, theme }) => (dateType === 'sun' ? theme.color.error : theme.color.black)};
`;
