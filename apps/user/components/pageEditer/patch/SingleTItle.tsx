import { TextBox } from '@packages/ui';
import { ChangeEvent, useState } from 'react';
import { useRecoilState } from 'recoil';
import ElementListState from '../../../recoil/ElementListState';
import PatchWrapper from './Wrapper';

interface PropsType {
    type: string;
    id?: string;
}

function PatchSingleTitle({ type, id }: PropsType) {
    const [elementList, setElementList] = useRecoilState(ElementListState);
    const [newArr] = elementList.filter((value) => value.id === id);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const tempargs = { ...newArr.args, text1: e.target.value };
        const temp = [...elementList];
        temp.splice(elementList.indexOf(newArr), 1, { ...newArr, args: tempargs });
        setElementList(temp);
    };

    return (
        <PatchWrapper name={type}>
            <TextBox
                value={newArr.args.text1}
                onChange={onChange}
                width={300}
                type={'text'}
                correct={true}
            />
        </PatchWrapper>
    );
}

export default PatchSingleTitle;
