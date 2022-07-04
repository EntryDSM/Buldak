import { useState } from 'react';
import styled from '@emotion/styled';
interface RadioButtonBoxProps<T> {
    items: ReadonlyArray<T>;
    value?: Readonly<T>;
    onChange: (value: T) => void;
    gap: string;
}

const RadioButtonBox = <T extends string>(props: RadioButtonBoxProps<T>) => {
    const [state, setState] = useState<T>(props.value ? props.value : props.items[0]);
    return (
        <RadioButtonBoxesWrapper gap={props.gap}>
            {props.items.map((i) => (
                <RadioButtonBoxItemWrapper
                    onClick={() => {
                        props.onChange(i);
                        setState(i);
                    }}>
                    <RadioButtonBoxCircle isCheck={state === i}>
                        <div />
                    </RadioButtonBoxCircle>
                    <p>{i}</p>
                </RadioButtonBoxItemWrapper>
            ))}
        </RadioButtonBoxesWrapper>
    );
};

const RadioButtonBoxesWrapper = styled.div<{ gap: string }>`
    display: flex;
    gap: ${({ gap }) => gap};
    align-items: center;
`;

const RadioButtonBoxItemWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    > p {
        font-size: 20px;
        margin-top: 1px;
        cursor: pointer;
    }
`;

const RadioButtonBoxCircle = styled.div<{ isCheck: boolean }>`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 2px solid
        ${({ theme, isCheck }) => (isCheck ? theme.color.skyblue : theme.color.gray700)};
    > div {
        width: 18px;
        height: 18px;
        background-color: ${({ theme, isCheck }) => (isCheck ? theme.color.skyblue : '')};
        border-radius: 50%;
    }
`;
export default RadioButtonBox;
