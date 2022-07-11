import ModalWrapper from '../../ModalWrapper';
import styled from '@emotion/styled';
import Filter from './Filter';
import StudentList from './studentList';
import { Button, CheckBox } from '@packages/ui';
import {useMemo, useState} from 'react';
import useModal from '../../../hooks/useModal';
import { theme } from '@packages/emotion-style-provider/src/theme';
import {StudentInfo} from "../../../models/teachers/responses";

export interface PdfStudentListProps extends StudentInfo {
    isSelected : boolean;
}

export const dummyData: PdfStudentListProps[] =  [
    {
        student_id: '550e8400-e29b-41d4-a716-446655440000',
        name: '강석현',
        gcn: 1406,
        profile_image_path: 'https://~~~~~~~~~~~',
        feedback_status: true,
        public_status: false,
        is_submitted: true,
        isSelected: false
    },
    {
        student_id: '550e8400-e29b-41d4-a716-446655440001',
        name: '김의찬',
        gcn: 1406,
        profile_image_path: 'https://~~~~~~~~~~~',
        feedback_status: true,
        public_status: false,
        is_submitted: true,
        isSelected: false
    },
    {
        student_id: '550e8400-e29b-41d4-a716-446655440002',
        name: '조상현',
        gcn: 1406,
        profile_image_path: '',
        feedback_status: true,
        public_status: false,
        is_submitted: true,
        isSelected: false
    },
    {
        student_id: '550e8400-e29b-41d4-a716-446655440003',
        name: '이경수',
        gcn: 1406,
        profile_image_path: '',
        feedback_status: true,
        public_status: false,
        is_submitted: true,
        isSelected: false
    },
    {
        student_id: '550e8400-e29b-41d4-a716-446655440004',
        name: '손지원',
        gcn: 1406,
        profile_image_path: '',
        feedback_status: true,
        public_status: false,
        is_submitted: true,
        isSelected: false
    }
    ]

const PdfModal = () => {
    const [clicked, setClicked] = useState(false);
    const [studentList,setStudentList] = useState<PdfStudentListProps[]>(dummyData)
    const onClick = () => {
        setClicked(!clicked);
    };
    const { closeModal } = useModal();
    const onClickChangeSelectedStatus = (student_id:string) => {
        const newList = studentList.map(item => {
            if(item.student_id === student_id) return {
                ...item,
                isSelected : !item.isSelected
            }
            return item
        })
        setStudentList(newList)
    }
    const lists = useMemo(
        () => ({
                selectedStudentList : studentList.filter(item => item.isSelected),
                notSelectedStudentList : studentList.filter(item => !item.isSelected)
            }),[studentList]
    )
    return (
        <ModalWrapper closeModal={closeModal}>
            <_Box>
                <_Header>
                    <h1 className="title">pdf 출력</h1>
                    <button className="xButton" onClick={closeModal}>
                        x
                    </button>
                </_Header>
                <_Content>
                    <Filter />
                    <_SelectAll>
                        <p className="summary">전체선택</p>
                        <CheckBox isChecked={clicked} onClick={onClick} />
                    </_SelectAll>
                    <_StudentArea>
                        <StudentList studentList={lists.notSelectedStudentList} isSelectedBox={false} onClick={onClickChangeSelectedStatus} />
                        <div className="arrow" />
                        <StudentList studentList={lists.selectedStudentList} isSelectedBox={true} onClick={onClickChangeSelectedStatus} />
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
