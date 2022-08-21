import ModalWrapper from '../../ModalWrapper';
import styled from '@emotion/styled';
import Filter from './Filter';
import StudentList from './studentList';
import { Button, CheckBox } from '@packages/ui';
import { useEffect, useMemo, useState } from 'react';
import useModal from '../../../hooks/useModal';
import { theme } from '@packages/emotion-style-provider/src/theme';
import { GetStudentListResponse, StudentInfo } from '../../../models/teachers/responses';
import { useQuery } from 'react-query';
import { getStudentList } from '../../../api/teachers';
import { FilterProps } from '../../../pages';

export interface PdfStudentListProps extends StudentInfo {
    isSelected: boolean;
}

const PdfModal = () => {
    const { closeModal } = useModal();
    const [allSelected, setAllSelected] = useState(false);
    const [studentList, setStudentList] = useState<PdfStudentListProps[]>([]);
    const [filter, setFilter] = useState<FilterProps>({
        grade: null,
        classNum: null,
        docStatus: null,
    });
    const onClick = () => {
        setAllSelected(!allSelected);
    };
    // const { data } = useQuery(
    //     ['getStudentList', filter.grade, filter.classNum, filter.docStatus],
    //     () => getStudentList(filter.grade, filter.classNum, filter.docStatus),
    // );
    const data: GetStudentListResponse = [];
    useEffect(() => {
        setStudentList(
            data?.student_list.map((i) => {
                return {
                    ...i,
                    isSelected: false,
                };
            }) || [],
        );
    }, []);
    useEffect(() => {
        if (allSelected)
            setStudentList(
                studentList.map((stduentInfo) => {
                    return {
                        ...stduentInfo,
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
        <ModalWrapper closeModal={closeModal}>
            <_Box>
                <_Header>
                    <h1 className="title">pdf 출력</h1>
                    <button className="xButton" onClick={closeModal}></button>
                </_Header>
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
                        <div className="arrow" />
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
        background-color: ${({ theme }) => theme.color.gray300};
    }
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
