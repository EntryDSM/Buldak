import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import Arrow from '../assets/dropdown/Arrow.svg';
export interface DropDownProps<T> {
    items: ReadonlyArray<T> | undefined;
    value?: T;
    placeholder: string;
    onChange: (value: T) => void;
    width: number;
    disable?: boolean;
}

export const DropDown = <T extends string>({
    items = [],
    value,
    onChange,
    placeholder,
    disable = false,
    width,
}: DropDownProps<T>) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [text, setText] = useState<T | string>(value ? value : placeholder);
    useEffect(() => {
        setText(value ? value : placeholder);
        setIsOpen(false);
    }, [value]);

    return (
        <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
            <DropDownBox width={width}>
                <DropDownSelectedBox
                    disable={disable}
                    onClick={() => setIsOpen(!isOpen)}
                    isPlaceholder={text === placeholder}>
                    <p>{text}</p>
                    <DropDownArrow></DropDownArrow>
                </DropDownSelectedBox>
                <DropDownItemsBox isOpen={!disable && isOpen}>
                    {items.map((i, idx) => (
                        <DropDownItem
                            key={idx}
                            onClick={() => {
                                setIsOpen(false);
                                setText(i);
                                onChange(i);
                            }}>
                            {i}
                        </DropDownItem>
                    ))}
                </DropDownItemsBox>
            </DropDownBox>
        </OutsideClickHandler>
    );
};

const DropDownBox = styled.div<{ width: number }>`
    width: ${({ width }) => width}px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    z-index: 5;
    position: relative;
`;

const DropDownSelectedBox = styled.div<{ disable: boolean; isPlaceholder: boolean }>`
    width: 100%;
    height: 38px;
    border: 2px solid
        ${({ theme, disable }) => (disable ? theme.color.gray300 : theme.color.gray700)};
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    background-color: ${({ theme, disable }) =>
        disable ? theme.color.gray300 : theme.color.white};
    cursor: ${({ disable }) => (disable ? 'not-allowed' : 'pointer')};
    > p {
        color: ${({ theme, isPlaceholder }) =>
            isPlaceholder ? theme.color.gray700 : theme.color.black};
        font-size: 17px;
    }
`;

const DropDownArrow = styled.div`
    background-image: url(${Arrow.src});
    width: 19px;
    height: 12px;
`;

const DropDownItemsBox = styled.div<{ isOpen: boolean }>`
    position: absolute;
    top: 43px;
    width: 100%;
    background-color: ${({ theme }) => theme.color.white};
    max-height: 125px;
    z-index: 5;
    border: 2px solid ${({ theme }) => theme.color.gray700};
    border-radius: 5px;
    flex-direction: column;
    overflow: auto;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select: none;
`;

const DropDownItem = styled.div`
    width: 100%;
    height: 36px;
    padding: 8px 20px;
    font-size: 16px;
    cursor: pointer;
    & + * {
        border-top: 1px solid ${({ theme }) => theme.color.gray700};
    }
`;

export default DropDown;
