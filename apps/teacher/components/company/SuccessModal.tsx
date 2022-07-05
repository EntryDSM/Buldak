import styled from '@emotion/styled';
import { useContext, useState } from 'react';
import ModalWrapper from '../ModalWrapper';
import { ModalDispatchContext } from '../../context/ModalContext';

function SuccessModal() {
    const dispatch = useContext(ModalDispatchContext);
    const closeModal = () => {
        dispatch({ type: 'SELECT', selected: '' });
    };

    return (
        <ModalWrapper closeModal={closeModal}>
            <_Wrapper>
                <_Header>
                    <p>알림</p>
                    <div id="exit"></div>
                </_Header>
                <_Center>
                    <div id="check-icon" />
                    <div id="border" />
                    <strong>기업 추가에 성공했습니다</strong>
                    <p id="id">발급된 아이디 : 123123</p>
                    <p id="pwd">발급된 비밀번호 : 123123</p>
                </_Center>
            </_Wrapper>
        </ModalWrapper>
    );
}

export default SuccessModal;

const _Wrapper = styled.div`
    width: 650px;
    height: 500px;
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const _Header = styled.div`
    width: 100%;
    height: 44px;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray300};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    > p {
        font-weight: 500;
        font-size: 20px;
        line-height: 25px;
        color: ${({ theme }) => theme.color.gray700};
    }
    > #exit {
        width: 30px;
        height: 30px;
        border: 1px solid black;
    }
`;

const _Center = styled.div`
    width: 325px;
    height: 260px;
    margin-top: 76px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > #check-icon {
        width: 90px;
        height: 90px;
        border: 1px solid black;
        background-color: ${({ theme }) => theme.color.skyblue};
        border-radius: 100px;
    }
    > #border {
        width: 90px;
        border-top: 1px solid ${({ theme }) => theme.color.gray300};
        margin: 20px;
    }
    > strong {
        font-weight: 500;
        font-size: 22px;
        line-height: 28px;
        color: ${({ theme }) => theme.color.navy};
    }
    > p {
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
        color: ${({ theme }) => theme.color.black};
        margin-top: 20px;
    }
`;
