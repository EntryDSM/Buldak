import { TextBox } from '@packages/ui';
import { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import ElementListState from '../../../recoil/ElementListState';
import PatchWrapper from './Wrapper';
import styled from '@emotion/styled';

interface PropsType {
    type: string;
    id?: string;
}

function PatchTitle({ type, id }: PropsType) {
    const [elementList, setElementList] = useRecoilState(ElementListState);
    const [curText, setText] = useState('');
    const [newArr] = elementList.filter((value) => value.id === id);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const tempTop = [e.target.value, newArr.args.text1[1]];
        const tempargs = { ...newArr.args, text1: tempTop };
        const temp = [...elementList];
        const index = elementList.indexOf(newArr);
        temp.splice(index, 1, { ...newArr, args: tempargs });
        setElementList(temp);
    };

    useEffect(() => {
        const [newArr] = elementList.filter((value) => value.id === id);
        setText(newArr.args.text1);
    }, []);

    return (
        <PatchWrapper name={type}>
            <TextBox
                onChange={onChange}
                width={300}
                type={'text'}
                correct={true}
                value={newArr.args.text1[0]}
            />
        </PatchWrapper>
    );
}

export default PatchTitle;
