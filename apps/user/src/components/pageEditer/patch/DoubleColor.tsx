import styled from '@emotion/styled';
import PatchElementWrapper from './Wrapper';
import { ColorResult, SketchPicker } from 'react-color';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useEffect } from 'react';
import ElementListState from '../../../recoil/ElementListState';
import { useRecoilState } from 'recoil';

interface PropsType {
    id?: string;
}

function PatchDoubleColor({ id }: PropsType) {
    const [colorPickerTop, setColorPickerTop] = useState<boolean>(false);
    const [colorPickerBottom, setColorPickerBottom] = useState<boolean>(false);
    const [elementList, setElementList] = useRecoilState(ElementListState);
    const [topcolor, setTop] = useState('#000000');
    const [bottomcolor, setBottom] = useState('#000000');
    const [newArr] = elementList.filter((value) => value.id === id);
    useEffect(() => {
        setTop(newArr.args.color[0]);
        setBottom(newArr.args.color[1]);
        console.log(newArr.args.color);
    }, []);
    const changeTopColor = (hex: string) => {
        const tempargs = { ...newArr.args, color: [hex, newArr.args.color[1]] };
        const temp = [...elementList];
        const index = elementList.indexOf(newArr);
        temp.splice(index, 1, { ...newArr, args: tempargs });
        setElementList(temp);
    };
    const changeBottomColor = (hex: string) => {
        const tempargs = { ...newArr.args, color: [newArr.args.color[0], hex] };
        const temp = [...elementList];
        const index = elementList.indexOf(newArr);
        temp.splice(index, 1, { ...newArr, args: tempargs });
        setElementList(temp);
    };

    const handleTopChangeComplete = ({ hex }: ColorResult) => changeTopColor(hex);
    const handleBottomChangeComplete = ({ hex }: ColorResult) => changeBottomColor(hex);

    return (
        <>
            <PatchElementWrapper name={'제목 색상'}>
                <_ColorInputLabel>
                    <_ColorPreview background={topcolor} />
                    <_ColorBtn onClick={() => setColorPickerTop(true)}>
                        {topcolor.toUpperCase()}
                    </_ColorBtn>
                </_ColorInputLabel>
                {colorPickerTop && (
                    <OutsideClickHandler onOutsideClick={() => setColorPickerTop(false)}>
                        <_ColorPicker
                            color={topcolor}
                            onChange={({ hex }) => {
                                setTop(hex);
                            }}
                            onChangeComplete={handleTopChangeComplete}
                        />
                    </OutsideClickHandler>
                )}
            </PatchElementWrapper>

            <PatchElementWrapper name={'텍스트 색상'}>
                <_ColorInputLabel>
                    <_ColorPreview background={bottomcolor} />
                    <_ColorBtn onClick={() => setColorPickerBottom(true)}>
                        {bottomcolor.toUpperCase()}
                    </_ColorBtn>
                </_ColorInputLabel>
                {colorPickerBottom && (
                    <OutsideClickHandler onOutsideClick={() => setColorPickerBottom(false)}>
                        <_ColorPicker
                            color={bottomcolor}
                            onChange={({ hex }) => {
                                setBottom(hex);
                            }}
                            onChangeComplete={handleBottomChangeComplete}
                        />
                    </OutsideClickHandler>
                )}
            </PatchElementWrapper>
        </>
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

export default PatchDoubleColor;
