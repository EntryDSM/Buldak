import ModalWrapper from '../ModalWrapper';
import styled from '@emotion/styled';
import Filter from './Filter';
import StudentList from './studentList';
import { Button, CheckBox } from '@packages/ui';
import { useEffect } from 'react';
import { theme } from '@packages/emotion-style-provider/src/theme';
import { StudentInfo } from '../../../models/teachers/responses';
import Image from 'next/image';
import ModalHeader from '../ModalHeader';
import { pdfArrow } from '../../../assets';
import useStudentFilter from '../../../hooks/useStudentFilter';

export interface PdfStudentListProps extends StudentInfo {
    isSelected: boolean;
}

const PdfModal = () => {
    const {
        onChangeClassNum,
        onChangeGrade,
        allSelected,
        onClickSelectAll,
        lists,
        setFilter,
        onClickChangeSelectedStatus,
    } = useStudentFilter();
    useEffect(() => {
        setFilter({
            grade: null,
            classNum: null,
            docStatus: null,
        });
    }, []);
    return (
        <ModalWrapper>
            <_Box>
                <ModalHeader title="pdf 출력" />
                <_Content>
                    <Filter onChangeClassNum={onChangeClassNum} onChangeGrade={onChangeGrade} />
                    <_SelectAll>
                        <p className="summary">전체선택</p>
                        <CheckBox isChecked={allSelected} onClick={onClickSelectAll} />
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
