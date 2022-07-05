import styled from '@emotion/styled';
import { Button, TextBox } from '@packages/ui';
import { ChangeEvent, useContext, useState } from 'react';
import { theme } from '@packages/emotion-style-provider/src/theme';
import { ModalDispatchContext } from '../../context/ModalContext';

type keyValue =
    | 'profile_image_path'
    | 'company_name'
    | 'location'
    | 'start_at'
    | 'end_at'
    | 'name'
    | 'phone_number'
    | 'email';

export interface CompanyInfo {
    profile_image_path: string;
    company_name: string;
    location: string;
    start_at: string;
    end_at: string;
    name: string;
    phone_number: string;
    email: string;
}

export interface CompanyInputArray {
    title: string;
    name: keyValue;
    placeholder?: string;
}

const inputArray: CompanyInputArray[] = [
    {
        title: '담당자 이름',
        name: 'name',
        placeholder: '담당자 이름을 입력해 주세요',
    },
    {
        title: '담당자 이메일',
        name: 'email',
        placeholder: '담당자 이메일을 입력해 주세요',
    },
    {
        title: '담당자 연락처',
        name: 'phone_number',
        placeholder: '담당자 연락처를 입력해 주세요',
    },
    {
        title: '기업 이름',
        name: 'company_name',
        placeholder: '기업 이름을 입력해 주세요',
    },
    {
        title: '기업 주소',
        name: 'location',
        placeholder: '기업 주소를 입력해 주세요',
    },
];

function AddCompany() {
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
    const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name);
        setCompanyInfo({
            ...companyInfo,
            [e.target.name]: e.target.value,
        });
    };
    const onClick = () => {
        dispatch({ type: 'SELECT', selected: 'SUCCESS' });
    };
    return (
        <_Wrapper>
            <_Center>
                <_ImgWrapper>
                    <div id="img"></div>
                    <p>프로필 사진 설정</p>
                </_ImgWrapper>
                {inputArray.map((item) => {
                    return (
                        <_InputWrapper>
                            <p>{item.title}</p>
                            <TextBox
                                width={380}
                                type="text"
                                name={item.name}
                                correct={true}
                                placeholder={item.placeholder}
                                value={companyInfo[item.name]}
                                onChange={onChangeInputValue}
                            />
                        </_InputWrapper>
                    );
                })}
                <_TempCalendar />
                <Button
                    width={530}
                    height={44}
                    borderWidth={2}
                    borderColor={theme.color.skyblue}
                    fontColor={theme.color.skyblue}
                    content="기업 추가"
                    onClick={onClick}
                />
            </_Center>
        </_Wrapper>
    );
}

export default AddCompany;

const _Wrapper = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
`;

const _Center = styled.div`
    margin: 75px auto;
    width: 530px;
    display: flex;
    flex-direction: column;
    align-items: center;
    > button {
        margin-top: 25px;
    }
`;

const _ImgWrapper = styled.div`
    height: 128px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    > #img {
        width: 90px;
        height: 90px;
        border-radius: 100px;
        border: 1px dashed black;
    }
    > p {
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        text-decoration-line: underline;
        color: ${({ theme }) => theme.color.black};
    }
`;

const _InputWrapper = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 35px;
    > p {
        color: ${({ theme }) => theme.color.black};
        font-weight: 400;
        font-size: 22px;
        line-height: 28px;
    }
    > input {
        width: 380px;
        height: 40px;
        border: 1px solid black;
    }
`;

const _TempCalendar = styled.div`
    //후에 달력으로 대체
    width: 530px;
    height: 300px;
    border: 1px solid black;
    margin-top: 35px;
`;

const _AddButton = styled.button`
    margin-top: 35px;
    width: 530px;
    height: 44px;
    border: 1px solid ${({ theme }) => theme.color.skyblue};
`;
