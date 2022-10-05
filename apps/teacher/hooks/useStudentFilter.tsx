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
import { useContext, useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { getStudentList } from '../api/teachers';
import { PdfStudentListProps } from '../components/modals/pdf';
import useModal from './useModal';
import { toastHandler } from '../utils/toast';
import { FilterDispatchContext, FilterStateContext } from '../context/FilterContext';

const useStudentFilter = () => {
    const filter = useContext(FilterStateContext);
    const setFilter = useContext(FilterDispatchContext);

    const [allSelected, setAllSelected] = useState(false);
    const { selectedModal } = useModal();
    const onChangeGrade = (value: string) => {
        setFilter({
            type: 'CHANGE',
            name: 'grade',
            value: translateGradeDropdownValue(value as GradeDropdownType),
        });
    };
    const onChangeClassNum = (value: string) => {
        setFilter({
            type: 'CHANGE',
            name: 'classNum',
            value: translateClassNumDropdownValue(value as ClassNumDropdownType),
        });
    };
    const onChangeDocStatus = (value: string) => {
        setFilter({
            type: 'CHANGE',
            name: 'docStatus',
            value: translateDocStatusDropdownValue(value as DocumentStatusDropdownType),
        });
    };
    const { data: studentList } = useQuery(
        [`getStudentList${selectedModal}`, filter.docStatus, filter.classNum, filter.grade],
        () => getStudentList(filter.grade, filter.classNum, filter.docStatus),
        {
            onError: () => {
                toastHandler('ERROR');
            },
        },
    );
    const onClickSelectAll = () => {
        setAllSelected(!allSelected);
    };
    const [pdfStudentList, setPdfStudentList] = useState<PdfStudentListProps[]>([]);
    useEffect(() => {
        if (studentList)
            setPdfStudentList(
                studentList.student_list.map((i) => {
                    return {
                        ...i,
                        isSelected: false,
                    };
                }),
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
