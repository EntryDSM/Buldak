import {
    ClassNumDropdownType,
    DocumentStatusDropdownType,
    GradeDropdownType,
} from '../components/constant';
import { SelectedDate } from '../hooks/useCalendar';
import { ClassNumValue, DocumentStatusValue, GradeValue } from '../models/teachers/requests';

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

interface TranslateDateToString {
    start_at: string;
    end_at: string;
}

export const translateDateToString = (selectedDate: SelectedDate): TranslateDateToString => {
    if (selectedDate.startDate && selectedDate.endDate)
        return {
            start_at: `${selectedDate.startDate.year}-${selectedDate.startDate.month}-${selectedDate.startDate.date}`,
            end_at: `${selectedDate.endDate.year}-${selectedDate.endDate.month}-${selectedDate.endDate.date}`,
        };
    return {
        start_at: '',
        end_at: '',
    };
};
export const translateStringToDate = (startDate: string, endString: string): SelectedDate => {
    const startDateArr = startDate.split('-');
    const endDateArr = endString.split('-');
    return {
        startDate: {
            year: Number(startDateArr[0]),
            month: Number(startDateArr[1]),
            date: Number(startDateArr[2]),
        },
        endDate: {
            year: Number(endDateArr[0]),
            month: Number(endDateArr[1]),
            date: Number(endDateArr[2]),
        },
    };
};
