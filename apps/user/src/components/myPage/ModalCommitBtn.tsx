import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

interface PropsType extends HTMLAttributes<HTMLButtonElement> {
    content: string;
}

function ModalCommitBtn({ content, ...props }: PropsType) {
    return (
        <_CommitBtnWrapper>
            <_CommitBtn {...props}>{content}</_CommitBtn>
        </_CommitBtnWrapper>
    );
}

const _CommitBtnWrapper = styled.div`
    border-top: 1px solid ${({ theme }) => theme.color.gray500};
    display: flex;
    justify-content: center;
`;

const _CommitBtn = styled.button`
    color: ${({ theme }) => theme.color.main};
    border: 2px solid ${({ theme }) => theme.color.main};
    width: 300px;
    height: 50px;
    font-size: 22px;
    background-color: ${({ theme }) => theme.color.white};
    font-weight: bold;
    border-radius: 5px;
    margin-top: 15px;
`;

export default ModalCommitBtn;
