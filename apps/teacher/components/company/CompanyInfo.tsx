import styled from '@emotion/styled';
import { useState } from 'react';
import ModalWrapper from '../ModalWrapper';

function CompanyInfo() {
    const [modalOnOff, setModalOnOff] = useState<boolean>(false);
    const closeModal = () => {
        setModalOnOff(false);
    };
    const inputArr = ['기업 이름', '기업 주소', '담당자 이름', '담당자 연락처', '담당자 이메일'];
    return (
        <ModalWrapper closeModal={closeModal}>
            <_Wrapper>
                <_Header>
                    <p>기업 정보</p>
                    <div id="exit" />
                </_Header>
                <_Body>
                    <_SideWrapper>
                        <div id="img" />
                        <p>프로필 이미지</p>
                    </_SideWrapper>
                    <_InputsWrapper>
                        {inputArr.map((value) => <Inputs title={value} placeholder="" />)}
                        <div>
                            <button>비밀번호 초기화</button>
                            <button>정보 변경</button>
                        </div>
                    </_InputsWrapper>
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

export default CompanyInfo;

const _Wrapper = styled.div`
    background: ${({ theme }) => theme.color.white};
    border-radius: 8px;
    width: 900px;
    height: 550px;
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

const _InputWrapper = styled.div`
    width: 510px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    > p {
        font-weight: 400;
        font-size: 22px;
        line-height: 28px;
        color: ${({ theme }) => theme.color.gray900};
    }
    > input {
        width: 300px;
        height: 40px;
        border-bottom: 1px solid ${({ theme }) => theme.color.black};
    }
`;

const _Body = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 480px;
`;

const _SideWrapper = styled.div`
    width: 310px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    #img {
        width: 110px;
        height: 110px;
        border: 1px solid black;
        margin-top: 65px;
    }
    > p {
        margin-top: 20px;

        font-weight: 500;
        font-size: 20px;
        line-height: 25px;
        color: ${({ theme }) => theme.color.black};
    }
`;

const _InputsWrapper = styled.div`
    width: 510px;
    height: 404px;
    margin-top: 26px;
    display: flex;
    flex-direction: column;
    align-items: center;
    > div {
        align-self: flex-end;
        button {
            width: 200px;
            height: 44px;
            border: 1px solid ${({ theme }) => theme.color.skyblue};
            margin-top: 10px;
            margin-left: 20px;
        }
    }
`;
