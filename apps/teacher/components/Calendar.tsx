import styled from '@emotion/styled';
import { dayType, selectedType } from '../hooks/useCalendar';
import ArrowIcon from '../assets/arrow';

const dayList = ['일', '월', '화', '수', '목', '금', '토'];

interface Props {
    year: number;
    month: number;
    prevMonth: () => void;
    nextMonth: () => void;
    list: JSX.Element[];
    checkDayType: (index: number) => dayType;
}

const Calendar = ({ year, month, prevMonth, nextMonth, list, checkDayType }: Props) => {
    return (
        <_Wrapper className="calendar">
            <_MonthWrapper>
                <button onClick={prevMonth}>
                    <ArrowIcon arrowType="LEFT" />
                </button>
                <_Month>
                    <p>{year}년</p>
                    <p className="month">{month}월</p>
                </_Month>
                <button onClick={nextMonth}>
                    <ArrowIcon arrowType="RIGHT" />
                </button>
            </_MonthWrapper>
            <_DayWrapper>
                {dayList.map((item, index) => (
                    <_DateBox
                        dateType={checkDayType(index)}
                        isWeekEnd={checkDayType(index) !== 'weekday'}
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
    padding: 20px 70px;
`;
const _MonthWrapper = styled.div`
    width: 230px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > button {
        width: 30px;
        height: 30px;
        border: 1px solid ${({ theme }) => theme.color.gray900};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
const _Month = styled.strong`
    display: flex;
    width: 120px;
    font-size: 22px;
    line-height: 25px;
    color: ${({ theme }) => theme.color.black};
    font-weight: 500;
    > .month {
        margin-left: auto;
    }
`;
const _DayWrapper = styled.div`
    display: flex;
    margin-top: 15px;
`;
const _DateWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-top: 11px;
    gap: 8px 0;
    color: ${({ theme }) => theme.color.black};
    > .include {
        background-color: ${({ theme }) => theme.color.skyblue};
        color: ${({ theme }) => theme.color.white};
    }
    > .prev,
    .next {
        color: ${({ theme }) => theme.color.point};
    }
    > li {
        cursor: pointer;
    }
`;

interface DateProps {
    dateType: 'sun' | 'weekday' | 'sat';
    isWeekEnd: boolean;
    selectedType?: selectedType;
}

export const _DateBox = styled.li<DateProps>`
    width: ${({ isWeekEnd }) => (isWeekEnd ? '41' : '60.5')}px;
    height: 28px;
    font-size: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ dateType, theme }) => {
        switch (dateType) {
            case 'sun':
                return theme.color.error;
            case 'sat':
                return theme.color.skyblue;
            default:
                return theme.color.black;
        }
    }};
    border-radius: ${({ selectedType, dateType }) => {
        switch (selectedType || dateType) {
            case 'equal':
                return '100px';
            case 'startDate':
                return '100px 0 0 100px';
            case 'startDateOnly':
                return '100px';
            case 'endDate':
                return '0 100px 100px 0';
            case 'sun':
                return '100px 0 0 100px';
            case 'sat':
                return '0 100px 100px 0';
            default:
                return '';
        }
    }};
`;
