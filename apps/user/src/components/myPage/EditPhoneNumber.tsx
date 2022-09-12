import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { phoneNumberCertificationCodeGenerator } from '../../utils/api/userGenerator';
import {
    myInfomationResource,
    queryCertificationCodeValidation,
} from '../../utils/api/userResouce';
import { queryKey } from '../../utils/queryKey';
import { profileImageConverter, studentInformationConverter } from '../../utils/api/userConverter';
import { UploadImage } from '../../pages/myPage';
import { useResource } from '../../hook/useResource';
interface PhoneNumberChangeInfo {
    newPhoneNumber: string;
    phoneCertificationCode: string;
}

function EditPhoneNumber() {
    const [phoneNumberChangeInfo, setPhoneNumberChangeInfo] = useState<PhoneNumberChangeInfo>({
        newPhoneNumber: '',
        phoneCertificationCode: '',
    });

    const onChangePhoneNumberInfo = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setPhoneNumberChangeInfo((state) => ({
            ...state,
            [name]: value,
        }));
    };

    const { data: myInformation } = useResource(myInfomationResource);

    const { mutate: phoneCertificationCodeMutate } = useMutation(
        phoneNumberCertificationCodeGenerator,
    );

    const { refetch: verifyFetch } = useQuery(
        queryKey.auth.verify({
            value: phoneNumberChangeInfo.newPhoneNumber,
            authCode: phoneNumberChangeInfo.phoneCertificationCode,
        }),
        queryCertificationCodeValidation,
        {
            enabled: false,
        },
    );
    const { mutate: studentInformationConverterMutate } = useMutation(studentInformationConverter);
    const { mutate: profileImageConverterMutate } = useMutation(profileImageConverter, {});

    return (
        <_EditPhoneNumberBox>
            <_EditPhoneNumber>전화번호 수정</_EditPhoneNumber>
            <_EditBox>
                <_InputType>새로운 전화번호</_InputType>
                <_CertificationInput
                    placeholder="전화번호를 입력해주세요"
                    name="newPhoneNumber"
                    type="number"
                    value={phoneNumberChangeInfo.newPhoneNumber}
                    onChange={onChangePhoneNumberInfo}
                />
                <_CertificationBtn
                    onClick={() =>
                        phoneCertificationCodeMutate({
                            phone_number: phoneNumberChangeInfo.newPhoneNumber,
                        })
                    }>
                    인증하기
                </_CertificationBtn>
            </_EditBox>
            <_EditBox>
                <_InputType>인증번호</_InputType>
                <_CertificationInput
                    placeholder="인증번호를 입력해주세요"
                    name="phoneCertificationCode"
                    value={phoneNumberChangeInfo.phoneCertificationCode}
                    onChange={onChangePhoneNumberInfo}
                />
                <_CertificationBtn onClick={() => verifyFetch()}>확인하기</_CertificationBtn>
            </_EditBox>
            <_EditBtn
                onClick={() =>
                    myInformation &&
                    studentInformationConverterMutate({
                        location: myInformation?.location,
                        name: myInformation?.name,
                        phone_number: phoneNumberChangeInfo.newPhoneNumber,
                        profile_image_path: myInformation?.profile_image_path,
                    })
                }>
                변경하기
            </_EditBtn>
        </_EditPhoneNumberBox>
    );
}

const _EditPhoneNumber = styled.p`
    font-weight: bold;
    font-size: 20px;
    margin: 20px 0px;
`;

const _InputType = styled.span`
    font-size: 17px;
    display: block;
    font-weight: bold;
    width: 140px;
`;

const _EditBtn = styled.button`
    text-align: center;
    color: ${({ theme }) => theme.color.skyblue};
    background-color: ${({ theme }) => theme.color.white};
    font-weight: bold;
    font-size: 18px;
    width: 270px;
    height: 40px;
    margin-left: 140px;
    border: 2px solid ${({ theme }) => theme.color.skyblue};
    border-radius: 3px;
`;

const _EditBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 18px;
`;

const _EditPhoneNumberBox = styled.div`
    width: 605px;
    height: 250px;
    border: 3px solid ${({ theme }) => theme.color.point};
    padding-left: 30px;
    border-radius: 5px;
`;

const _CertificationInput = styled.input`
    all: unset;
    width: 250px;
    height: 20px;
    padding: 8px;
    font-size: 17px;
    font-weight: bold;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.color.gray700};
`;

const _CertificationBtn = styled.button`
    color: ${({ theme }) => theme.color.skyblue};
    font-weight: bold;
    margin-left: 15px;
    font-size: 18px;
`;

export default EditPhoneNumber;
