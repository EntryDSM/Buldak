import styled from '@emotion/styled';
import PatchElementWrapper from './Wrapper';
import { ColorResult, SketchPicker } from 'react-color';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useEffect } from 'react';
import ElementListState from '../../../recoil/ElementListState';
import { useRecoilState } from 'recoil';

interface PropsType {
    type: '텍스트 색상' | '제목 색상' | '부제목 색상';
    id?: string;
}

function PatchColor({ type, id }: PropsType) {
    const [colorPicker, setColorPicker] = useState<boolean>(false);
    const [elementList, setElementList] = useRecoilState(ElementListState);
    const [state, setState] = useState('#000000');
    const [newArr] = elementList.filter((value) => value.id === id);
    useEffect(() => {
        setState(newArr.args.color);
    }, []);
    const changeColor = (hex: string) => {
        const tempargs = { ...newArr.args, color: hex };
        const temp = [...elementList];
        const index = elementList.indexOf(newArr);
        temp.splice(index, 1, { ...newArr, args: tempargs });
        setElementList(temp);
    };

    const handleChangeComplete = ({ hex }: ColorResult) => changeColor(hex);

    return (
        <PatchElementWrapper name={type}>
            <_ColorInputLabel>
                <_ColorPreview background={state} />
                <_ColorBtn onClick={() => setColorPicker(true)}>{state.toUpperCase()}</_ColorBtn>
            </_ColorInputLabel>
            {colorPicker && (
                <OutsideClickHandler onOutsideClick={() => setColorPicker(false)}>
                    <_ColorPicker
                        color={state}
                        onChange={({ hex }) => {
                            setState(hex);
                        }}
                        onChangeComplete={handleChangeComplete}
                    />
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

export default PatchColor;
