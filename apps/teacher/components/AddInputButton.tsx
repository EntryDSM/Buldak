import styled from '@emotion/styled';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from '@packages/ui';
import { theme } from '@packages/emotion-style-provider/src/theme';
import { plusWhite } from '../assets/index';

interface Props {
    onClickCreate: (name: string) => void;
}

const AddInputButton = ({ onClickCreate }: Props) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const [tagName, setTagName] = useState('');
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setTagName(e.target.value);
    };
    const onClickOpenInput = () => {
        setIsOpened(true);
        isOpened && onClickCreate(tagName);
    };
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (
        <_Wrapper isOpened={isOpened} onSubmit={onSubmit}>
            <_Input isOpened={isOpened} value={tagName} onChange={onChangeInput} />
            <Button
                width={30}
                height={28}
                backgroundColor={theme.color.skyblue}
                onClick={onClickOpenInput}
                image={plusWhite}
            />
        </_Wrapper>
    );
};
export default AddInputButton;

interface InputProps {
    isOpened: boolean;
}

const _Wrapper = styled.form<InputProps>`
    display: flex;
    border-radius: 4px;
    margin-left: 16px;
    height: 30px;
    max-width: 170px;
    > button {
        height: 30px;
        border-radius: ${({ isOpened }) => (isOpened ? ' 0 4px 4px 0' : '4px')};
    }
`;

const _Input = styled.input<InputProps>`
    border: 1px solid ${({ theme, isOpened }) => (isOpened ? theme.color.skyblue : 'none')};
    border-right: none;
    border-radius: 4px 0 0 4px;
    height: 30px;
    width: ${(props) => (props.isOpened ? '140px' : '0px')};
    background-color: transparent;
    ${(props) => props.isOpened && 'padding: 5px 15px'};
    color: ${({ theme }) => theme.color.black};
    font-size: 16px;
    line-height: 20px;
    transition: width 1s ease-in-out, padding 1s ease-in-out;
`;
