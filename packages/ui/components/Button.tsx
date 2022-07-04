import styled from '@emotion/styled';
import Image from 'next/image';
import { FC, useState } from 'react';

interface ButtonProps {
    width: number;
    height: number;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number; // 테두리 두께
    fontColor?: string;
    content?: string;
    image?: string;
    hoverImage?: string;
    onClick?: () => void;
}

const Button: FC<ButtonProps> = (props) => {
    const { image, content, hoverImage, onClick } = props;
    const [icon, setIcon] = useState<string>(image ? image : '');

    return (
        <ButtonWrapper
            {...props}
            onMouseOver={() => {
                image && setIcon(hoverImage ? hoverImage : image);
            }}
            onMouseOut={() => {
                image && setIcon(image);
            }}
            onClick={onClick}>
            {icon && image && <Image src={icon} />}
            {content && <p>{content}</p>}
        </ButtonWrapper>
    );
};

const ButtonWrapper = styled.button<ButtonProps>`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : '#ffffff')};
    color: ${({ fontColor }) => fontColor};
    border: ${({ borderColor, borderWidth }) =>
        borderColor && borderWidth ? `${borderWidth}px solid ${borderColor}` : 'none'};
    border-radius: 3px;
    font-size: 20px;
    padding: 0px 14px;
    display: flex;
    justify-content: center;
    gap: 8px;
    > img {
        width: 20px;
        height: 20px;
        display: block;
        margin: auto;
    }
    > p {
        line-height: ${({ height }) => height}px;
    }
    :hover {
        background-color: ${({ backgroundColor, borderColor, theme }) => {
            switch (backgroundColor) {
                case theme.color.background:
                    return '#DFE2E8';
                case theme.color.skyblue:
                    return '#5F88D9';
            }
            switch (borderColor) {
                case theme.color.gray500:
                    return theme.color.gray500;
                case theme.color.navy:
                    return theme.color.navy;
                case theme.color.skyblue:
                    return theme.color.skyblue;
            }
        }};
        color: ${({ fontColor, backgroundColor, borderColor, theme }) => {
            if (borderColor === theme.color.skyblue || borderColor === theme.color.navy)
                return theme.color.white;
            else if (backgroundColor === theme.color.skyblue) return '#D6D6D6';
            else if (backgroundColor === theme.color.background) return '#5F88D9';
            else return fontColor;
        }};
    }
`;

export default Button;
