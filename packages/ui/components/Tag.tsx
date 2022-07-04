import { css } from '@emotion/react';
import styled from '@emotion/styled';

type TagColorType = 'default' | 'blue' | 'skyblue' | 'bdblue';

interface TagProps {
    tagName: string;
    color?: TagColorType;
}

const Tag = ({ color = 'default', tagName }: TagProps) => {
    return <TagBox color={color}>{tagName}</TagBox>;
};

const TagBox = styled.div<{ color: TagColorType }>`
    height: 38px;
    font-size: 18px;
    padding: 1px 20px 0;
    border-radius: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;

    ${({ theme, color }) => {
        switch (color) {
            case 'default':
                return css`
                    background-color: ${theme.color.white};
                    color: ${theme.color.black};
                    border: 1px solid ${theme.color.black};
                `;
            case 'bdblue':
                return css`
                    color: ${theme.color.skyblue};
                    background-color: ${theme.color.white};
                    border: 1px solid ${theme.color.skyblue};
                `;
            case 'blue':
                return css`
                    background-color: ${theme.color.skyblue};
                    color: ${theme.color.white};
                    border: 1px solid ${theme.color.skyblue};
                `;
            case 'skyblue':
                return css`
                    background-color: ${theme.color.background};
                    color: ${theme.color.skyblue};
                    border: 1px solid ${theme.color.background};
                `;
            default:
        }

        return '';
    }}
`;

export default Tag;
