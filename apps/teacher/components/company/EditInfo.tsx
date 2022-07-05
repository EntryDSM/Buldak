import styled from '@emotion/styled';
import { ChangeEvent, useContext, useState } from 'react';
import ModalWrapper from '../ModalWrapper';
import { ModalDispatchContext } from '../../context/ModalContext';
import { Button, TextBox } from '@packages/ui';
import { theme } from '@packages/emotion-style-provider/src/theme';
import { CompanyInfo, inputArray } from '../constant';

function EditInfo() {
    const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({
        profile_image_path: '',
        company_name: '',
        location: '',
        start_at: '',
        end_at: '',
        name: '',
        phone_number: '',
        email: '',
    });
    const dispatch = useContext(ModalDispatchContext);
    const closeModal = () => {
        dispatch({ type: 'SELECT', selected: '' });
    };
    const onChangeCompanyInfo = (e: ChangeEvent<HTMLInputElement>) => {
        setCompanyInfo({
            ...companyInfo,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <ModalWrapper closeModal={closeModal}>
            <_Wrapper>
                <_Header>
                    <p>기업 정보 변경</p>
                    <div id="exit" />
                </_Header>
                <_Body>
                    <_InputsWrapper>
                        {inputArray.map((item) => (
                            <_InputWrapper>
                                <p>{item.title}</p>
                                <TextBox
                                    width={300}
                                    type="text"
                                    name={item.name}
                                    correct={true}
                                    placeholder={item.placeholder}
                                    value={companyInfo[item.name]}
                                    onChange={onChangeCompanyInfo}
                                />
                            </_InputWrapper>
                        ))}
                    </_InputsWrapper>
                    <_CalendarWrapper>
                        <_TempCalendar />
                        <Button
                            width={300}
                            height={44}
                            content="정보 변경"
                            borderColor={theme.color.skyblue}
                            fontColor={theme.color.skyblue}
                            borderWidth={2}
                        />
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
    }
`;

const _TempCalendar = styled.div`
    border: 1px solid black;
    width: 530px;
    height: 300px;
    margin-top: 64px;
`;
