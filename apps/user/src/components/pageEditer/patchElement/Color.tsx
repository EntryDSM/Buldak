import styled from '@emotion/styled';
import PatchElementWrapper from './PatchElementWrapper';
import { ColorResult, SketchPicker } from 'react-color';
import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

function Color() {
    const [colorPicker, setColorPicker] = useState<boolean>(false);
    const [state, setState] = useState({
        background: '#ffffff',
    });

    const handleChangeComplete = ({ hex }: ColorResult) => {
        setState({ background: hex });
    };
    return (
        <PatchElementWrapper name="텍스트 색상">
            <_ColorInputLabel>
                <_ColorPreview background={state.background} />
                <_ColorBtn onClick={() => setColorPicker(true)}>
                    {state.background.toUpperCase()}
                </_ColorBtn>
            </_ColorInputLabel>
            {colorPicker && (
                <OutsideClickHandler onOutsideClick={() => setColorPicker(false)}>
                    <_ColorPicker color={state.background} onChange={handleChangeComplete} />
                </OutsideClickHandler>
            )}
        </PatchElementWrapper>
    );
}

const _ColorPicker = styled(SketchPicker)`
    position: absolute;
    z-index: 3;
`;

const _ColorInputLabel = styled.label`
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.color.gray700};
    border-radius: 5px;
`;

const _ColorPreview = styled.div<{ background: string }>`
    width: 12px;
    height: 12px;
    border: 1px solid ${({ theme }) => theme.color.gray700};
    background-color: ${({ background }) => background};
    border-radius: 70%;
    margin: 0 10px;
`;

const _ColorBtn = styled.button`
    width: 250px;
    height: 38px;
    text-align: start;
    font-size: 16px;
    background-color: transparent;
`;

export default Color;
