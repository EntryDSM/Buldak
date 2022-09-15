import styled from '@emotion/styled';
import { Dispatch, SetStateAction, useState } from 'react';
import { Draggable, DraggingStyle, NotDraggingStyle } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import MeatballMenu from '../../../assets/svgs/MeatballsMenu';
import ElementListState, { elementType } from '../../../recoil/ElementListState';

interface PropsType {
    element: elementType;
    setelementPatch: Dispatch<SetStateAction<{ open: boolean; index: number }>>;
    index: number;
}

function AsideElement({ element, setelementPatch, index }: PropsType) {
    const [deleteModal, setDeleteModal] = useState<boolean>(true);
    const [elementList, setElementList] = useRecoilState(ElementListState);
    const getItemStyle = (
        isDragging: boolean,
        draggableStyle: DraggingStyle | NotDraggingStyle | undefined,
    ): React.CSSProperties => ({
        userSelect: 'none',
        // padding: 8,
        margin: `0 0 ${8}px 0`,
        background: isDragging ? '#F3F7FF' : 'white',
        ...draggableStyle,
    });
    return (
        <Draggable key={element.id} draggableId={element.id} index={index}>
            {(provided, snapshot): JSX.Element => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
                    <_CompositionBox
                        onClick={() => {
                            setelementPatch({ open: true, index: index });
                        }}>
                        <_CompositionContent>
                            <_CompositionItem>
                                {element.image}
                                <span>{element.text}</span>
                            </_CompositionItem>
                            <_MeatBallBox onClick={() => setDeleteModal(true)}>
                                <MeatballMenu />
                            </_MeatBallBox>
                        </_CompositionContent>
                    </_CompositionBox>
                </div>
            )}
        </Draggable>
    );
}

const _DeleteWrapper = styled.div`
    position: relative;
    top: 30px;
    left: 10px;
    > button {
        background-color: ${({ theme }) => theme.color.white};
        width: 120px;
        height: 44px;
        color: ${({ theme }) => theme.color.error};
        font-size: 18px;
        border: 2px solid ${({ theme }) => theme.color.gray300};
        border-radius: 5px;
    }
`;

const _MeatBallBox = styled.div`
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    z-index: 3;
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
