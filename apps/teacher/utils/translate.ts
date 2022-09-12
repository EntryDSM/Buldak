import {
    ClassNumDropdownType,
    DocumentStatusDropdownType,
    GradeDropdownType,
} from '../components/constant';
import { ClassNumValue, DocumentStatusValue, GradeValue } from '../models/teachers/requests';
import { DateObject } from '../hooks/useCalendar';

export const translateGradeDropdownValue = (value: GradeDropdownType): GradeValue => {
    switch (value) {
        case '전체':
            return null;
        case '1학년':
            return '1';
        case '2학년':
            return '2';
        case '3학년':
            return '3';
    }
};
export const translateClassNumDropdownValue = (value: ClassNumDropdownType): ClassNumValue => {
    switch (value) {
        case '전체':
            return null;
        case '1반':
            return '1';
        case '2반':
            return '2';
        case '3반':
            return '3';
        case '4반':
            return '4';
    }
};
export const translateDocStatusDropdownValue = (
    value: DocumentStatusDropdownType,
): DocumentStatusValue => {
    switch (value) {
        case '전체':
            return null;
        case '공개 문서':
            return 'PUBLIC';
        case '미제출':
            return 'PROTECTED';
        case '요청 대기 문서':
            return 'STAY';
    }
};
export const translateObjectToString = (dateObject: DateObject) => {
    return `${dateObject.year}-${
        dateObject.month < 10 ? '0' + dateObject.month.toString() : dateObject.month
    }-${dateObject.date < 10 ? '0' + dateObject.date.toString() : dateObject.date}T00:00:00.000`;
};
export const translateStringToObject = (localDateTime: string): DateObject => {
    const isLocalDateTime = /\d{4}-(0\d|1[1-2])-(0\d|[1-2]\d|3[0-1])T(2[0-3]|[0-1]\d):[0-5]\d/;
    if (!isLocalDateTime.test(localDateTime))
        return {
            year: 0,
            month: 0,
            date: 0,
        };
    const arr = localDateTime.split('-');
    return {
        year: Number(arr[0]),
        month: Number(arr[1]),
        date: Number(arr[2].slice(0, 2)),
    };
};
