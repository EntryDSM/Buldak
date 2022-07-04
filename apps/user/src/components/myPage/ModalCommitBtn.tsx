import styled from '@emotion/styled';

interface PropsType {
    content: string;
}

function ModalCommitBtn({ content }: PropsType) {
    return (
        <AddBtnBox>
            <AddBtn>{content}</AddBtn>
        </AddBtnBox>
    );
}

const AddBtnBox = styled.div`
    border-top: 1px solid ${({ theme }) => theme.color.gray500};
    display: flex;
    justify-content: center;
`;

const AddBtn = styled.button`
    color: ${({ theme }) => theme.color.main};
    border: 2px solid ${({ theme }) => theme.color.main};
    cursor: pointer;
    width: 300px;
    height: 50px;
    font-size: 22px;
    background-color: ${({ theme }) => theme.color.white};
    font-weight: bold;
    border-radius: 5px;
    margin-top: 20px;
`;

export default ModalCommitBtn;
