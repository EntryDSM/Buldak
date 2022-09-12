import { HTMLAttributes } from 'react';

function Close(props: HTMLAttributes<HTMLOrSVGElement>) {
    return (
        <svg
            {...props}
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.95333 1.04667L0.933333 2.06667L8.30364 9.43698L0.370311 17.3703L1.39031 18.3903L9.32364 10.457L17.9333 19.0667L18.9533 18.0467L10.3436 9.43698L18.3903 1.39031L17.3703 0.37031L9.32364 8.41698L1.95333 1.04667Z"
                fill="#E0E0E0"
            />
        </svg>
    );
}

export default Close;
