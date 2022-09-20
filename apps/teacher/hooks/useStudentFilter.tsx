import {
    translateClassNumDropdownValue,
    translateDocStatusDropdownValue,
    translateGradeDropdownValue,
} from '../utils/translate';
import {
    ClassNumDropdownType,
    DocumentStatusDropdownType,
    GradeDropdownType,
} from '../components/constant';
import { useEffect, useMemo, useState } from 'react';
import { FilterProps } from '../pages';
import { useQuery } from 'react-query';
import { getStudentList } from '../api/teachers';
import { PdfStudentListProps } from '../components/modals/pdf';

const useStudentFilter = () => {
    const [filter, setFilter] = useState<FilterProps>({
        grade: null,
        classNum: null,
        docStatus: null,
    });
    const [allSelected, setAllSelected] = useState(false);
    const onChangeGrade = (value: string) => {
        setFilter({
            ...filter,
            grade: translateGradeDropdownValue(value as GradeDropdownType),
        });
    };
    const onChangeClassNum = (value: string) => {
        setFilter({
            ...filter,
            classNum: translateClassNumDropdownValue(value as ClassNumDropdownType),
        });
    };
    const onChangeDocStatus = (value: string) => {
        setFilter({
            ...filter,
            docStatus: translateDocStatusDropdownValue(value as DocumentStatusDropdownType),
        });
    };
    const { data: studentList } = useQuery(
        ['getStudentList', filter.docStatus, filter.classNum, filter.grade],
        () => getStudentList(filter.grade, filter.classNum, filter.docStatus),
    );
    const onClickSelectAll = () => {
        setAllSelected(!allSelected);
    };
    const [pdfStudentList, setPdfStudentList] = useState<PdfStudentListProps[]>([]);
    useEffect(() => {
        setPdfStudentList(
            studentList?.student_list.map((i) => {
                return {
                    ...i,
                    isSelected: false,
                };
            }) || [],
        );
    }, [studentList]);
    useEffect(() => {
        if (allSelected)
            setPdfStudentList(
                pdfStudentList.map((studentInfo) => {
                    return {
                        ...studentInfo,
                        isSelected: true,
                    };
                }),
            );
        else
            setPdfStudentList(
                pdfStudentList.map((studentInfo) => {
                    return {
                        ...studentInfo,
                        isSelected: false,
                    };
                }),
            );
    }, [allSelected]);
    const onClickChangeSelectedStatus = (student_id: string) => {
        const newList = pdfStudentList.map((item) => {
            if (item.student_id === student_id)
                return {
                    ...item,
                    isSelected: !item.isSelected,
                };
            return item;
        });
        setPdfStudentList(newList);
    };
    const lists = useMemo(
        () => ({
            selectedStudentList: pdfStudentList.filter((item) => item.isSelected),
            notSelectedStudentList: pdfStudentList.filter((item) => !item.isSelected),
        }),
        [pdfStudentList],
    );
    return {
        filter,
        setFilter,
        onChangeClassNum,
        onChangeDocStatus,
        onChangeGrade,
        studentList,
        onClickSelectAll,
        allSelected,
        onClickChangeSelectedStatus,
        lists,
    };
};
export default useStudentFilter;
