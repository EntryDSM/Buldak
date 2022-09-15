import styled from '@emotion/styled';

function EditPhoneNumber() {
    return (
        <_EditPhoneNumberBox>
            <_EditPhoneNumber>전화번호 수정</_EditPhoneNumber>
            <_EditBox>
                <_InputType>새로운 전화번호</_InputType>
                <_CertificationInput placeholder="전화번호를 입력해주세요" />
                <_CertificationBtn>인증하기</_CertificationBtn>
            </_EditBox>
            <_EditBox>
                <_InputType>인증번호</_InputType>
                <_CertificationInput placeholder="인증번호를 입력해주세요" />
                <_CertificationBtn>확인하기</_CertificationBtn>
            </_EditBox>
            <_EditBtn>변경하기</_EditBtn>
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
