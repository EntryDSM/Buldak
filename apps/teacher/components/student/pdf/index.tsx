import ModalWrapper from '../../ModalWrapper';
import styled from '@emotion/styled';
import Filter from './Filter';
import StudentList from './studentList';
import { Button, CheckBox } from '@packages/ui';
import { useState } from 'react';
import useModal from '../../../hooks/useModal';
import { theme } from '@packages/emotion-style-provider/src/theme';

const PdfModal = () => {
    const [clicked, setClicked] = useState(false);
    const onClick = () => {
        setClicked(!clicked);
    };
    const { closeModal } = useModal();
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
                        <StudentList isAddList={false} />
                        <div className="arrow" />
                        <StudentList isAddList={true} />
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
