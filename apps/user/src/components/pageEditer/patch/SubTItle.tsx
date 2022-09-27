import { TextBox } from '@packages/ui';
import { ChangeEvent, useState } from 'react';
import { useRecoilState } from 'recoil';
import ElementListState from '../../../recoil/ElementListState';
import PatchWrapper from './Wrapper';
import styled from '@emotion/styled';

interface PropsType {
    type: string;
    id?: string;
}

function PatchSubtitle({ type, id }: PropsType) {
    const [elementList, setElementList] = useRecoilState(ElementListState);
    const [newArr] = elementList.filter((value) => value.id === id);
    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const tempBottom = [newArr.args.text1[0], e.target.value];
        const tempargs = { ...newArr.args, text1: tempBottom };
        const temp = [...elementList];
        const index = elementList.indexOf(newArr);
        temp.splice(index, 1, { ...newArr, args: tempargs });
        setElementList(temp);
    };

    return (
        <PatchWrapper name={type}>
            <_TextArea onChange={onChange} value={newArr.args.text1[1]} />
        </PatchWrapper>
    );
}

export default PatchSubtitle;
export const _TextArea = styled.textarea`
    width: 300px;
    height: 150px;
    border: 2px solid ${({ theme }) => theme.color.gray700};
    padding: 10px 15px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.white};
    resize: none;
`;
