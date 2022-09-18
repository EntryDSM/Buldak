import styled from '@emotion/styled';
import { Dispatch, SetStateAction, useState } from 'react';
import { Draggable, DraggingStyle, NotDraggingStyle } from 'react-beautiful-dnd';
import MeatballMenu from '../../../assets/svgs/MeatballsMenu';
import { elementType } from '../../../recoil/ElementListState';
import DeleteModal from './DeleteModal';

interface PropsType {
    removeElement: (id: string) => void;
    element: elementType;
    setelementPatch: Dispatch<SetStateAction<{ open: boolean; index: number }>>;
    index: number;
}

function AsideElement({ element, setelementPatch, index }: PropsType) {
    const [deleteModal, setDeleteModal] = useState<boolean>(false);

    const getItemStyle = (
        isDragging: boolean,
        draggableStyle: DraggingStyle | NotDraggingStyle | undefined,
    ): React.CSSProperties => ({
        userSelect: 'none',
        margin: "0 0 12px 0",
        background: isDragging ? '#F3F7FF' : 'white',
        ...draggableStyle,
    });

    return (
        <>
            <Draggable key={element.id} draggableId={element.id} index={index}>
                {(provided, snapshot): JSX.Element => (
                    <_Wrapper
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
                        {deleteModal && (
                            <DeleteModal id={element.id} setDeleteModal={setDeleteModal} />
                        )}
                        <_CompositionBox
                            onClick={() => {
                                setelementPatch({ open: true, index: index });
                            }}>
                            <_CompositionContent>
                                <_CompositionItem>
                                    {element.image}
                                    <span>{element.text}</span>
                                </_CompositionItem>
                                <div onClick={(e) => e.stopPropagation()}>
                                    <_MeatBallBox onClick={() => setDeleteModal(true)}>
                                        <MeatballMenu />
                                    </_MeatBallBox>
                                </div>
                            </_CompositionContent>
                        </_CompositionBox>
                    </_Wrapper>
                )}
            </Draggable>
        </>
    );
}

const _Wrapper = styled.div`
    position: relative;
`;

const _MeatBallBox = styled.div`
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    z-index: 3;
    cursor: pointer;
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

export default AsideElement;