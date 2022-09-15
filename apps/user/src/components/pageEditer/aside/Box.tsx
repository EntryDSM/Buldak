import styled from '@emotion/styled';
import { Dispatch, SetStateAction, useState } from 'react';
import AddPlusBtn from '../../../assets/svgs/AddPlusBtn';
import ElementListState from '../../../recoil/ElementListState';
import Patch from './Patch';
import { useRecoilState } from 'recoil';
import Element from './Element';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { elementType } from '../../../recoil/ElementListState';

interface PropsType {
    setElementDropDown: Dispatch<SetStateAction<boolean>>;
}

function AsideBox({ setElementDropDown }: PropsType) {
    const [elementPatch, setelementPatch] = useState<{ open: boolean; index: number }>({
        open: false,
        index: 0,
    });
    const [elementList, setElementList] = useRecoilState(ElementListState);
    console.log(elementList)

    const getListStyle = (isDraggingOver: boolean): React.CSSProperties => ({
        // background: isDraggingOver ? 'lightblue' : 'lightgrey',
        // padding: 8,
        // width: 250,
        margin: `0 0 ${8}px 0`,
    });

    const reorder = (list: elementType[], startIndex: number, endIndex: number): elementType[] => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    const onDragEnd = (result: DropResult): void => {
        if (!result.destination) return;
        const items: elementType[] = reorder(
            elementList,
            result.source.index,
            result.destination.index,
        );
        setElementList(items);
    };

    return (
        <_AsideBox>
            {elementPatch.open ? (
                <Patch index={elementPatch.index} setelementPatch={setelementPatch} />
            ) : (
                <_ContentBox>
                    <div>
                        <_SiteComposition>
                            웹 사이트 구성
                            <span onClick={() => setElementDropDown(true)}>
                                <AddPlusBtn />
                            </span>
                        </_SiteComposition>
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="droppable">
                                {(provided, snapshot): JSX.Element => (
                                    <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        style={getListStyle(snapshot.isDraggingOver)}>
                                        {elementList.map((element, index) => (
                                            <Element
                                                setelementPatch={setelementPatch}
                                                key={index}
                                                index={index}
                                                element={element}
                                            />
                                        ))}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                    </div>
                </_ContentBox>
            )}
        </_AsideBox>
    );
}

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
    ::-webkit-scrollbar {
        display: none;
    }
`;

export default AsideBox;
