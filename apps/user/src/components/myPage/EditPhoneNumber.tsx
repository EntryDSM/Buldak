import styled from '@emotion/styled';

function EditPhoneNumber() {
    return (
        <EditPhoneNumberBox>
            <EditPhoneNumberText>전화번호 수정</EditPhoneNumberText>
            <EditBox>
                <EditBoxText>새로운 전화번호</EditBoxText>
                <CertificationInput placeholder="전화번호를 입력해주세요" />
                <CertificationBtn>인증하기</CertificationBtn>
            </EditBox>
            <EditBox>
                <EditBoxText>인증번호</EditBoxText>
                <CertificationInput placeholder="인증번호를 입력해주세요" />
                <CertificationBtn>확인하기</CertificationBtn>
            </EditBox>
            <EditBtn>변경하기</EditBtn>
        </EditPhoneNumberBox>
    );
}

const EditPhoneNumberText = styled.p`
    font-weight: bold;
    font-size: 20px;
    margin: 20px 0px 20px 0px;
`;

const EditBoxText = styled.span`
    font-size: 17px;
    display: block;
    font-weight: bold;
    width: 140px;
`;

const EditBtn = styled.button`
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
    cursor: pointer;
`;

const EditBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 18px;
`;

const EditPhoneNumberBox = styled.div`
    width: 605px;
    height: 250px;
    border: 3px solid ${({ theme }) => theme.color.point};
    padding-left: 30px;
    border-radius: 5px;
`;

const CertificationInput = styled.input`
    all: unset;
    width: 250px;
    height: 20px;
    padding: 8px;
    font-size: 17px;
    font-weight: bold;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.color.gray700};
`;

const CertificationBtn = styled.button`
    all: unset;
    color: ${({ theme }) => theme.color.skyblue};
    font-weight: bold;
    margin-left: 15px;
    cursor: pointer;
    font-size: 18px;
`;

export default EditPhoneNumber;
