import styled from '@emotion/styled';

function AddCompany() {
    return (
        <_Wrapper>
            <_Center>
                <_ImgWrapper>
                    <div id="img"></div>
                    <p>프로필 사진 설정</p>
                </_ImgWrapper>
                <Inputs title="기업 이름" placeholder="기업 이름을 입력해 주세요" />
                <Inputs title="기업 주소" placeholder="기업 주소를 입력해 주세요" />
                <_TempCalendar />
                <_AddButton>기업 추가</_AddButton>
            </_Center>
        </_Wrapper>
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

export default AddCompany;

const _Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.white};
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const _Center = styled.div`
    width: 530px;
    height: 695px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
        border: 1px solid black;
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
