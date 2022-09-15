<<<<<<< Updated upstream:apps/teacher/components/student/pdf/index.tsx
import ModalWrapper from '../../ModalWrapper';
=======
<<<<<<< HEAD:apps/teacher/components/modals/pdf/index.tsx
import ModalWrapper from '../ModalWrapper';
import styled from '@emotion/styled';
import Filter from './Filter';
import StudentList from './studentList';
import { Button, CheckBox } from '@packages/ui';
import { useEffect, useMemo, useState } from 'react';
import { theme } from '@packages/emotion-style-provider/src/theme';
import { StudentInfo } from '../../../models/teachers/responses';
import { FilterProps } from '../../../pages';
import Image from 'next/image';
import { useQuery } from 'react-query';
import { getStudentList } from '../../../api/teachers';
import ModalHeader from '../ModalHeader';
import { pdfArrow } from '../../../assets';

export interface PdfStudentListProps extends StudentInfo {
    isSelected: boolean;
}

const PdfModal = () => {
    const [allSelected, setAllSelected] = useState(false);
    const [studentList, setStudentList] = useState<PdfStudentListProps[]>([]);
    const [filter, setFilter] = useState<FilterProps>({
        grade: null,
        classNum: null,
        docStatus: null,
    });
    const { data } = useQuery(
        ['getStudentLists', filter.docStatus, filter.classNum, filter.grade],
        () => getStudentList(filter.grade, filter.classNum, filter.docStatus),
    );
    const onClick = () => {
        setAllSelected(!allSelected);
    };
    useEffect(() => {
        setStudentList(
            data?.student_list.map((i) => {
                return {
                    ...i,
                    isSelected: false,
                };
            }) || [],
        );
    }, [data]);
    useEffect(() => {
        if (allSelected)
            setStudentList(
                studentList.map((studentInfo) => {
                    return {
                        ...studentInfo,
                        isSelected: true,
                    };
                }),
            );
        else
            setStudentList(
                studentList.map((studentInfo) => {
                    return {
                        ...studentInfo,
                        isSelected: false,
                    };
                }),
            );
    }, [allSelected]);
    const onClickChangeSelectedStatus = (student_id: string) => {
        const newList = studentList.map((item) => {
            if (item.student_id === student_id)
                return {
                    ...item,
                    isSelected: !item.isSelected,
                };
            return item;
        });
        setStudentList(newList);
    };
    const lists = useMemo(
        () => ({
            selectedStudentList: studentList.filter((item) => item.isSelected),
            notSelectedStudentList: studentList.filter((item) => !item.isSelected),
        }),
        [studentList],
    );
    return (
        <ModalWrapper>
            <_Box>
                <ModalHeader title="pdf 출력" />
                <_Content>
                    <Filter />
                    <_SelectAll>
                        <p className="summary">전체선택</p>
                        <CheckBox isChecked={allSelected} onClick={onClick} />
                    </_SelectAll>
                    <_StudentArea>
                        <StudentList
                            studentList={lists.notSelectedStudentList}
                            isSelectedBox={false}
                            onClick={onClickChangeSelectedStatus}
                        />
                        <Image src={pdfArrow} alt="화살표" />
                        <StudentList
                            studentList={lists.selectedStudentList}
                            isSelectedBox={true}
                            onClick={onClickChangeSelectedStatus}
                        />
                    </_StudentArea>
                    <Button
                        width={130}
                        height={40}
                        borderColor={theme.color.skyblue}
                        fontColor={theme.color.skyblue}
                        content="출력하기"
                        borderWidth={2}
                    />
                </_Content>
            </_Box>
        </ModalWrapper>
    );
};
export default PdfModal;

const _Box = styled.section`
    width: 1000px;
    height: 680px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme.color.gray500};
`;
const _Content = styled.div`
    padding: 24px 50px 26px 50px;
    > button {
        margin: 10px 0 0 auto;
    }
`;
const _SelectAll = styled.label`
    display: flex;
    margin-top: 9px;
    align-items: center;
    > .summary {
        font-size: 15px;
        line-height: 19px;
        color: ${({ theme }) => theme.color.black};
        margin-right: 10px;
    }
`;
const _StudentArea = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    align-items: center;
    > .arrow {
        width: 20px;
        height: 50px;
        background-color: ${({ theme }) => theme.color.gray500};
    }
`;
=======
import ModalWrapper from '../ModalWrapper';
>>>>>>> Stashed changes:apps/teacher/components/modals/pdf/index.tsx
import styled from '@emotion/styled';
import Filter from './Filter';
import StudentList from './studentList';
import { Button, CheckBox } from '@packages/ui';
import { useEffect, useMemo, useState } from 'react';
<<<<<<< Updated upstream:apps/teacher/components/student/pdf/index.tsx
import useModal from '../../../hooks/useModal';
=======
>>>>>>> Stashed changes:apps/teacher/components/modals/pdf/index.tsx
import { theme } from '@packages/emotion-style-provider/src/theme';
import { StudentInfo } from '../../../models/teachers/responses';
import { FilterProps } from '../../../pages';
import Image from 'next/image';
<<<<<<< Updated upstream:apps/teacher/components/student/pdf/index.tsx
import { closeIcon } from '../../../assets';
import { useQuery } from 'react-query';
import { getStudentList } from '../../../api/teachers';
import { pdfArrow } from '@apps/teacher/assets';
=======
import { useQuery } from 'react-query';
import { getStudentList } from '../../../api/teachers';
import ModalHeader from '../ModalHeader';
import { pdfArrow } from '../../../assets';
>>>>>>> Stashed changes:apps/teacher/components/modals/pdf/index.tsx

export interface PdfStudentListProps extends StudentInfo {
    isSelected: boolean;
}

const PdfModal = () => {
<<<<<<< Updated upstream:apps/teacher/components/student/pdf/index.tsx
    const { closeModal } = useModal();
=======
>>>>>>> Stashed changes:apps/teacher/components/modals/pdf/index.tsx
    const [allSelected, setAllSelected] = useState(false);
    const [studentList, setStudentList] = useState<PdfStudentListProps[]>([]);
    const [filter, setFilter] = useState<FilterProps>({
        grade: null,
        classNum: null,
        docStatus: null,
    });
    const { data } = useQuery(
        ['getStudentLists', filter.docStatus, filter.classNum, filter.grade],
        () => getStudentList(filter.grade, filter.classNum, filter.docStatus),
    );
    const onClick = () => {
        setAllSelected(!allSelected);
    };
    useEffect(() => {
        setStudentList(
            data?.student_list.map((i) => {
                return {
                    ...i,
                    isSelected: false,
                };
            }) || [],
        );
    }, [data]);
    useEffect(() => {
        if (allSelected)
            setStudentList(
                studentList.map((studentInfo) => {
                    return {
                        ...studentInfo,
                        isSelected: true,
                    };
                }),
            );
        else
            setStudentList(
                studentList.map((studentInfo) => {
                    return {
                        ...studentInfo,
                        isSelected: false,
                    };
                }),
            );
    }, [allSelected]);
    const onClickChangeSelectedStatus = (student_id: string) => {
        const newList = studentList.map((item) => {
            if (item.student_id === student_id)
                return {
                    ...item,
                    isSelected: !item.isSelected,
                };
            return item;
        });
        setStudentList(newList);
    };
    const lists = useMemo(
        () => ({
            selectedStudentList: studentList.filter((item) => item.isSelected),
            notSelectedStudentList: studentList.filter((item) => !item.isSelected),
        }),
        [studentList],
    );
    return (
<<<<<<< Updated upstream:apps/teacher/components/student/pdf/index.tsx
        <ModalWrapper closeModal={closeModal}>
            <_Box>
                <_Header>
                    <h1 className="title">pdf 출력</h1>
                    <button className="xButton" onClick={closeModal}>
                        <Image src={closeIcon} />
                    </button>
                </_Header>
=======
        <ModalWrapper>
            <_Box>
                <ModalHeader title="pdf 출력" />
>>>>>>> Stashed changes:apps/teacher/components/modals/pdf/index.tsx
                <_Content>
                    <Filter />
                    <_SelectAll>
                        <p className="summary">전체선택</p>
                        <CheckBox isChecked={allSelected} onClick={onClick} />
                    </_SelectAll>
                    <_StudentArea>
                        <StudentList
                            studentList={lists.notSelectedStudentList}
                            isSelectedBox={false}
                            onClick={onClickChangeSelectedStatus}
                        />
                        <Image src={pdfArrow} alt="화살표" />
                        <StudentList
                            studentList={lists.selectedStudentList}
                            isSelectedBox={true}
                            onClick={onClickChangeSelectedStatus}
                        />
                    </_StudentArea>
                    <Button
                        width={130}
                        height={40}
                        borderColor={theme.color.skyblue}
                        fontColor={theme.color.skyblue}
                        content="출력하기"
                        borderWidth={2}
                    />
                </_Content>
            </_Box>
        </ModalWrapper>
    );
};
export default PdfModal;

const _Box = styled.section`
    width: 1000px;
    height: 680px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme.color.gray500};
`;
<<<<<<< Updated upstream:apps/teacher/components/student/pdf/index.tsx
const _Header = styled.header`
    display: flex;
    padding: 20px 25px 0 20px;
    height: 68px;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray500};
    > .title {
        font-size: 22px;
        line-height: 28px;
        color: ${({ theme }) => theme.color.gray700};
        font-weight: 500;
    }
    > .xButton {
        margin-left: auto;
        width: 34px;
        height: 34px;
    }
`;
=======
>>>>>>> Stashed changes:apps/teacher/components/modals/pdf/index.tsx
const _Content = styled.div`
    padding: 24px 50px 26px 50px;
    > button {
        margin: 10px 0 0 auto;
    }
`;
const _SelectAll = styled.label`
    display: flex;
    margin-top: 9px;
    align-items: center;
    > .summary {
        font-size: 15px;
        line-height: 19px;
        color: ${({ theme }) => theme.color.black};
        margin-right: 10px;
    }
`;
const _StudentArea = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    align-items: center;
    > .arrow {
        width: 20px;
        height: 50px;
        background-color: ${({ theme }) => theme.color.gray500};
    }
`;
<<<<<<< Updated upstream:apps/teacher/components/student/pdf/index.tsx
=======
>>>>>>> e00e9c85974154ffb8db7f5caf1c1292b3c3e366:apps/teacher/components/student/pdf/index.tsx
>>>>>>> Stashed changes:apps/teacher/components/modals/pdf/index.tsx
