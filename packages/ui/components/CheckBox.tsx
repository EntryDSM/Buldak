import { useState } from 'react';
import styled from '@emotion/styled';
interface CheckBoxProps<T> {
    items: ReadonlyArray<T>;
    value?: Readonly<T>;
    onChange: (value: T) => void;
    gap: string;
}

const CheckBox = <T extends string>(props: CheckBoxProps<T>) => {
    const [state, setState] = useState<T>(props.value ? props.value : props.items[0]);
    return (
        <CheckBoxsWrapper gap={props.gap}>
            {props.items.map((i) => (
                <CheckBoxItemWrapper
                    onClick={() => {
                        props.onChange(i);
                        setState(i);
                    }}>
                    <CheckBoxCircle isCheck={state === i}>
                        <div />
                    </CheckBoxCircle>
                    <p>{i}</p>
                </CheckBoxItemWrapper>
            ))}
        </CheckBoxsWrapper>
    );
};

const CheckBoxsWrapper = styled.div<{ gap: string }>`
    display: flex;
    gap: ${({ gap }) => gap};
    align-items: center;
`;

const CheckBoxItemWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    > p {
        font-size: 20px;
        margin-top: 1px;
        cursor: pointer;
    }
`;

const CheckBoxCircle = styled.div<{ isCheck: boolean }>`
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
export default CheckBox;
