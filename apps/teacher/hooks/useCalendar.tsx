import { useEffect, useMemo, useState } from 'react';
import { _DateBox } from '../components/Calendar';

type dateType = 'next' | 'prev' | 'thisMonth';

export type selectedType = 'startDate' | 'endDate' | 'startDateOnly' | 'equal' | '';

export type dayType = 'sun' | 'sat' | 'weekday';

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

const useCalendar = () => {
    const [month, setMonth] = useState(new Date().getMonth() + 1);
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
    const checkDayType = (index: number): dayType => {
        switch (index % 7) {
            case 0:
                return 'sun';
            case 6:
                return 'sat';
            default:
                return 'weekday';
        }
    };
    const checkPossibleDate = (type: dateType) => {
        const thisYear =
            type === 'prev' && month === 1
                ? year - 1
                : type === 'next' && month === 12
                ? year + 1
                : year;
        const thisMonth =
            type === 'prev'
                ? month === 1
                    ? 12
                    : month - 1
                : type === 'next'
                ? month === 12
                    ? 1
                    : month + 1
                : month;
        return {
            thisYear,
            thisMonth,
        };
    };
    const onClickDate = (dateType: dateType, year: number, month: number, date: number) => {
        if (
            dateType === 'thisMonth' &&
            selectedDate.startDate !== null &&
            selectedDate.endDate === null &&
            selectedDate.startDate.year >= year &&
            selectedDate.startDate.month >= month &&
            selectedDate.startDate.date > date
        ) {
            setSelectedDate({
                startDate: {
                    year,
                    month,
                    date,
                },
                endDate: null,
            });
        } else {
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
        }
    };
    const selectedType = (date: number, type: dateType): selectedType => {
        const possibleDate = checkPossibleDate(type);
        const startDate = `${selectedDate.startDate?.year}-${selectedDate.startDate?.month}-${selectedDate.startDate?.date}`;
        const endDate = `${selectedDate.endDate?.year}-${selectedDate.endDate?.month}-${selectedDate.endDate?.date}`;
        if (startDate === endDate && startDate === `${year}-${month}-${date}`) return 'equal';
        if (`${possibleDate.thisYear}-${possibleDate.thisMonth}-${date}` === startDate)
            return selectedDate.endDate === null ? 'startDateOnly' : 'startDate';
        if (`${possibleDate.thisYear}-${possibleDate.thisMonth}-${date}` === endDate)
            return 'endDate';
        return '';
    };
    const isIncludeSelectedDate = (year: number, month: number, date: number) => {
        if (selectedDate.startDate !== null && selectedDate.endDate === null) {
            return (
                year === selectedDate.startDate.year &&
                month === selectedDate.startDate.month &&
                date === selectedDate.startDate.date
            );
        }
        if (selectedDate.startDate !== null && selectedDate.endDate !== null) {
            if (selectedDate.endDate.year > selectedDate.startDate.year) {
                return (
                    (year === selectedDate.startDate.year && month >= selectedDate.startDate.month &&
                          date >= selectedDate.startDate.date) ||
                    (year === selectedDate.endDate.year && month <= selectedDate.endDate.month &&
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
                    (year === selectedDate.startDate.year &&
                        month === selectedDate.startDate.month &&
                        date >= selectedDate.startDate.date) ||
                    (year === selectedDate.endDate.year &&
                        month === selectedDate.endDate.month &&
                        date <= selectedDate.endDate.date) ||
                    (month > selectedDate.startDate.month && month < selectedDate.endDate.month)
                );
            }
            return (
                year === selectedDate.startDate.year &&
                month === selectedDate.startDate.month &&
                date >= selectedDate.startDate.date &&
                year === selectedDate.endDate.year &&
                month === selectedDate.endDate.month &&
                date <= selectedDate.endDate.date
            );
        }
    };
    const list = useMemo(() => {
        return date.newArray.map((date, index) => {
            const type = checkDate(date, index);
            const possibleDate = checkPossibleDate(type);
            return (
                <_DateBox
                    dateType={checkDayType(index)}
                    isWeekEnd={checkDayType(index) !== 'weekday'}
                    key={index}
                    selectedType={selectedType(date, type)}
                    className={`${type}  ${
                        isIncludeSelectedDate(possibleDate.thisYear, possibleDate.thisMonth, date)
                            ? 'include'
                            : 'notInclude'
                    }`}
                    onClick={() => onClickDate(type, year, month, date)}>
                    {date}
                </_DateBox>
            );
        });
    }, [date, year, month, selectedDate]);
    return {
        year,
        month,
        prevMonth,
        nextMonth,
        list,
        checkDayType,
    };
};
export default useCalendar;
