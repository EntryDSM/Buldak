import styled from '@emotion/styled';
import { cloneElement, Dispatch, SetStateAction } from 'react';
import { useRecoilState } from 'recoil';
import BackSpace from '../../../assets/svgs/BackSpace';
import ElementListState from '../../../recoil/ElementListState';

interface PropsType {
    setelementPatch: Dispatch<SetStateAction<{ open: boolean; index: number }>>;
    index: number;
}

function PatchAside({ setelementPatch, index }: PropsType) {
    const [elementList, setElementList] = useRecoilState(ElementListState);
    return (
        <_Wrapper>
            <_NameWrapper>
                <span onClick={() => setelementPatch({ open: false, index: 0 })}>
                    <BackSpace />
                </span>
                <strong>{elementList[index].text}</strong>
            </_NameWrapper>
            <_PatchWrapper>
                {elementList[index].patch.map((patch) =>
                    cloneElement(patch, { id: elementList[index].id }),
                )}
            </_PatchWrapper>
        </_Wrapper>
    );
}

const _PatchWrapper = styled.div`
    margin-left: 25px;
    margin-right: 25px;
`;

const _NameWrapper = styled.div`
    font-size: 20px;
    padding-top: 25px;
    padding-left: 20px;
    padding-bottom: 12px;
    > strong {
        margin-left: 15px;
    }
`;

const _Wrapper = styled.div`
    width: 350px;
    height: 100%;
    background-color: ${({ theme }) => theme.color.white};
    @keyframes fadeInLeft {
        0% {
            opacity: 0;
            transform: translate3d(-100%, 0, 0);
        }
        to {
            opacity: 1;
            transform: translateZ(0);
        }
    }
    animation: fadeInLeft 0.3s;
`;

export default PatchAside;
