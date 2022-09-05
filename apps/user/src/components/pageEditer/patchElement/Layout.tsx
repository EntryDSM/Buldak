import styled from '@emotion/styled';
import { useState } from 'react';
import PatchElementWrapper from './PatchElementWrapper';

const LayoutBtnList = ['1단', '2단', '3단'];

function Layout() {
    const [selectLayout, setSelectLayout] = useState<number>(1);
    return (
        <PatchElementWrapper name="레이아웃">
            <_LayoutBackground>
                {LayoutBtnList.map((Layout, index) => (
                    <_LayoutBtn
                        onClick={() => setSelectLayout(index)}
                        select={index === selectLayout}
                        key={index}>
                        {Layout}
                    </_LayoutBtn>
                ))}
            </_LayoutBackground>
        </PatchElementWrapper>
    );
}

const _LayoutBackground = styled.div`
    background-color: ${({ theme }) => theme.color.gray300};
    border-radius: 5px;
`;

const _LayoutBtn = styled.button<{ select: boolean }>`
    width: 90px;
    transition: 0.25s;
    border-radius: 5px;
    height: 38px;
    margin: 5px;
    font-size: 17px;
    ${({ select, theme }) => select && `background:${theme.color.white}`}
`;

export default Layout;
