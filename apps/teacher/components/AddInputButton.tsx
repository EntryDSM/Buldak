import styled from '@emotion/styled';
import { useState } from 'react';

const AddInputButton = () => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const onClickOpenInput = () => {
        setIsOpened(true);
    };
    return (
        <_Wrapper>
            <_Input isOpened={isOpened} />
            <_Button onClick={onClickOpenInput}> + </_Button>
        </_Wrapper>
    );
};
export default AddInputButton;

const _Wrapper = styled.section`
    display: flex;
    border: 1px solid ${({ theme }) => theme.color.skyblue};
    border-radius: 4px;
    margin-left: 16px;
    height: 30px;
    max-width: 170px;
`;

interface InputProps {
    isOpened: boolean;
}

const _Input = styled.input<InputProps>`
    width: ${(props) => (props.isOpened ? '140px' : '0px')};
    background-color: transparent;
    ${(props) => props.isOpened && 'padding: 5px 15px'};
    color: ${({ theme }) => theme.color.black};
    font-size: 16px;
    line-height: 20px;
    transition: width 1s ease-in-out, padding 1s ease-in-out;
`;
const _Button = styled.button`
    width: 30px;
    height: 100%;
    background-color: ${({ theme }) => theme.color.skyblue};
    color: ${({ theme }) => theme.color.white};
    font-size: 14px;
`;
