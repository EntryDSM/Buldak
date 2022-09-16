import { TextBox } from '@packages/ui';
import { ChangeEvent, useState } from 'react';
import { useRecoilState } from 'recoil';
import ElementListState from '../../../recoil/ElementListState';
import PatchWrapper from './Wrapper';

interface PropsType {
    type: string;
    id?: string;
}

function PatchSubtitle({ type, id }: PropsType) {
    const [elementList, setElementList] = useRecoilState(ElementListState);
    const [newArr] = elementList.filter((value) => value.id === id);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const tempBottom = [newArr.args.text1[0], e.target.value];
        const tempargs = { ...newArr.args, text1: tempBottom };
        const temp = [...elementList];
        const index = elementList.indexOf(newArr);
        temp.splice(index, 1, { ...newArr, args: tempargs });
        setElementList(temp);
    };

    return (
        <PatchWrapper name={type}>
            <TextBox onChange={onChange} width={300} type={'text'} correct={true} value={newArr.args.text1[1]} />
        </PatchWrapper>
    );
}

export default PatchSubtitle;
