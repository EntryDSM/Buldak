import styled from '@emotion/styled';
import { useState } from 'react';
import ModalWrapper from '../ModalWrapper';

function EditInfo() {
    const [modalOnOff, setModalOnOff] = useState<boolean>(false);
    const closeModal = () => {
        setModalOnOff(false);
    };
    const inputArr = ['기업 이름', '기업 주소', '담당자 이름', '담당자 연락처', '담당자 이메일'];
    return (
        <ModalWrapper closeModal={closeModal}>
            <_Wrapper>
                <_Header>
                    <p>기업 정보 변경</p>
                    <div id="exit" />
                </_Header>
                <_Body>
                    <_InputsWrapper>
                        {inputArr.map((value) => <Inputs title={value} placeholder={value + '을/를 입력해 주세요'} />)}
                    </_InputsWrapper>
                    <_CalendarWrapper>
                        <_TempCalendar />
                        <button>정보 변경</button>
                    </_CalendarWrapper>
                </_Body>
            </_Wrapper>
        </ModalWrapper>
    );
}

interface InputProps {
    title: string;
    placeholder: string;
}

function Inputs({ title, placeholder }: InputProps) {
    return (
        <_InputWrapper>
            <p>{title}</p>
            <input type="text" placeholder={placeholder} />
        </_InputWrapper>
    );
}

export default EditInfo;

const _Wrapper = styled.div`
    background: ${({ theme }) => theme.color.white};
    border-radius: 8px;
    width: 1100px;
    height: 580px;
    display: flex;
    flex-direction: column;
`;

const _Header = styled.div`
    width: 100%;
    height: 68px;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray500};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px 0px 20px;
    > p {
        font-weight: 500;
        font-size: 22px;
        line-height: 28px;
        color: ${({ theme }) => theme.color.gray700};
    }
    > #exit {
        width: 34px;
        height: 34px;
        border: 1px solid black;
    }
`;

const _Body = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 50px 0px 50px;
`;

const _InputWrapper = styled.div`
    width: 440px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    > p {
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
    }
    > input {
        width: 300px;
        height: 40px;
        border: 1px solid black;
    }
`;

const _InputsWrapper = styled.div`
    margin-top: 54px;
    width: 440px;
    display: flex;
    flex-direction: column;
`;

const _CalendarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 530px;
    > button {
        margin-top: 50px;
        width: 300px;
        height: 44px;
        border: 1px solid ${({ theme }) => theme.color.skyblue};
    }
`;

const _TempCalendar = styled.div`
    border: 1px solid black;
    width: 530px;
    height: 300px;
    margin-top: 64px;
`;
