import { useState } from 'react';

interface CheckBoxProps {
    isChecked?: boolean;
    onClick: (props?: any) => void;
}

const CheckBox = ({ isChecked = true, onClick }: CheckBoxProps) => {
    const [state, setState] = useState<boolean>(isChecked);

    return (
        <svg
            onClick={() => {
                onClick();
                setState(!state);
            }}
            cursor="pointer"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            {state && <rect x="0.5" y="0.5" width="21" height="21" rx="1.5" fill="#5387EC" />}
            <path
                d="M9.0001 13.78L6.2201 11L5.27344 11.94L9.0001 15.6667L17.0001 7.66668L16.0601 6.72668L9.0001 13.78Z"
                fill={state ? 'white' : '#B6B6B6'}
            />
            <rect
                x="0.5"
                y="0.5"
                width="21"
                height="21"
                rx="1.5"
                stroke={state ? '#5387EC' : '#B6B6B6'}
            />
        </svg>
    );
};

export default CheckBox;
