import { TextBox } from '@packages/ui';
import { ChangeEvent, useState } from 'react';
import { useRecoilState } from 'recoil';
import ElementListState from '../../../recoil/ElementListState';
import PatchWrapper from './Wrapper';

interface PropsType {
    id?: string;
}

function PatchList({ id }: PropsType) {
    const [elementList, setElementList] = useRecoilState(ElementListState);
    const [newArr] = elementList.filter((value) => value.id === id);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const tempargs = { ...newArr.args, text1: e.target.value };
        const temp = [...elementList];
        temp.splice(elementList.indexOf(newArr), 1, { ...newArr, args: tempargs });
        setElementList(temp);
    };

    return (
        <>
            <PatchWrapper name={'1번 항목'}>
                <TextBox
                    value={newArr.args.text1}
                    onChange={onChange}
                    width={300}
                    type={'text'}
                    correct={true}
                />
            </PatchWrapper>
            <PatchWrapper name={'2번 항목'}>
                <TextBox
                    value={newArr.args.text1}
                    onChange={onChange}
                    width={300}
                    type={'text'}
                    correct={true}
                />
            </PatchWrapper>
            <PatchWrapper name={'3번 항목'}>
                <TextBox
                    value={newArr.args.text1}
                    onChange={onChange}
                    width={300}
                    type={'text'}
                    correct={true}
                />
            </PatchWrapper>
        </>
    );
}

export default PatchList;
