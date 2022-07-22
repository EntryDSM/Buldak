import styled from '@emotion/styled';
import { Dispatch, SetStateAction } from 'react';
import BackSpace from '../../assets/svgs/BackSpace';
import Color from './patchElement/Color';
import Height from './patchElement/Height';
import Layout from './patchElement/Layout';
import Image from './patchElement/UploadImage';

interface PropsType {
    setelementPatch: Dispatch<SetStateAction<boolean>>;
}

function PatchAside({ setelementPatch }: PropsType) {
    return (
        <_Wrapper>
            <_NameWrapper>
                <span onClick={() => setelementPatch(false)}>
                    <BackSpace />
                </span>
                <strong>텍스트</strong>
            </_NameWrapper>
            <_PatchWrapper>
                <Layout />
                <Height />
                <Color />
                <Image />
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
