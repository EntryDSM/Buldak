import styled from '@emotion/styled';
import { Dispatch, SetStateAction, useState } from 'react';
import AddPlusBtn from '../../assets/svgs/AddPlusBtn';
import MeatballMenu from '../../assets/svgs/MeatballsMenu';
import CompositionList from '../../constants/CompositionList';
import PatchAside from './PatchAside';

interface PropsType {
    setElementDropDown: Dispatch<SetStateAction<boolean>>;
}

function AsideBar({ setElementDropDown }: PropsType) {
    const [elementPatch, setelementPatch] = useState<boolean>(false);
    const [deleteModal, setDeleteModal] = useState<boolean>(false);
    return (
        <_AsideBox>
            {elementPatch ? (
                <PatchAside setelementPatch={setelementPatch} />
            ) : (
                <_ContentBox>
                    <div>
                        <_SiteComposition>
                            웹 사이트 구성
                            <span onClick={() => setElementDropDown(true)}>
                                <AddPlusBtn />
                            </span>
                        </_SiteComposition>
                        {CompositionList.map((Composition, index) => (
                            <_CompositionBox
                                onClick={() => {
                                    setelementPatch(true);
                                }}
                                key={index}>
                                <_CompositionContent>
                                    <_CompositionItem>
                                        {Composition.image}
                                        <span>{Composition.text}</span>
                                    </_CompositionItem>
                                    <_MeatBallBox onClick={() => setDeleteModal(true)}>
                                        <MeatballMenu />
                                    </_MeatBallBox>
                                </_CompositionContent>
                            </_CompositionBox>
                        ))}
                    </div>
                </_ContentBox>
            )}
        </_AsideBox>
    );
}

const _MeatBallBox = styled.div`
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    :hover {
        background-color: ${({ theme }) => theme.color.gray500};
    }
`;

const _CompositionItem = styled.div`
    display: flex;
    align-items: center;
    width: 170px;
    > span {
        margin-left: 10px;
    }
`;

const _CompositionContent = styled.div`
    width: 220px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const _ContentBox = styled.div`
    display: flex;
    justify-content: center;
    @keyframes fadeInRight {
        0% {
            opacity: 0;
            transform: translate3d(100%, 0, 0);
        }
        to {
            opacity: 1;
            transform: translateZ(0);
        }
    }
    animation: fadeInRight 0.3s;
    > div {
        width: 280px;
    }
`;

const _CompositionBox = styled.div`
    height: 45px;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid ${({ theme }) => theme.color.gray300};
    > span {
        margin-left: 10px;
    }
    :hover {
        background-color: ${({ theme }) => theme.color.gray300};
    }
`;

const _SiteComposition = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
    justify-content: space-between;
    height: 70px;
    > span {
        font-size: 20px;
    }
`;

const _AsideBox = styled.aside`
    position: fixed;
    width: 350px;
    background-color: ${({ theme }) => theme.color.white};
    padding-top: 70px;
    height: 100vh;
    overflow: auto;
    scrollbar-width: none;
`;

export default AsideBar;
