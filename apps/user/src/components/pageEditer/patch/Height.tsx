import styled from '@emotion/styled';
import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import ElementListState from '../../../recoil/ElementListState';
import PatchElementWrapper from './Wrapper';

interface PropsType {
    id?: string;
}

function PatchHeight({ id }: PropsType) {
    const [elementList, setElementList] = useRecoilState(ElementListState);
    const [newArr] = elementList.filter((value) => value.id === id);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const tempargs = { ...newArr.args, height: e.target.value };
        const temp = [...elementList];
        const index = elementList.indexOf(newArr);
        temp.splice(index, 1, { ...newArr, args: tempargs });
        setElementList(temp);
    };

    return (
        <PatchElementWrapper name="높이">
            <_HeightInputLabel>
                <_HeightInput onChange={onChange} value={newArr.args.height} />
                <_Unit>px</_Unit>
            </_HeightInputLabel>
        </PatchElementWrapper>
    );
}

const _HeightInputLabel = styled.label`
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.color.gray700};
    border-radius: 5px;
`;

const _Unit = styled.div`
    font-size: 16px;
    color: ${({ theme }) => theme.color.gray700};
`;

const _HeightInput = styled.input`
    width: 250px;
    height: 38px;
    margin-left: 15px;
    padding-bottom: 9px;
    padding-top: 9px;
    font-size: 16px;
`;

export default PatchHeight;
