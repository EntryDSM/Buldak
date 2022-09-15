import styled from '@emotion/styled';
import { Dispatch, SetStateAction } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useRecoilState } from 'recoil';
import ElementListState from '../../../recoil/ElementListState';

interface PropsType {
    setDeleteModal: Dispatch<SetStateAction<boolean>>;
    id: string;
}

function DeleteModal({ setDeleteModal, id }: PropsType) {
    const [elementList, setElementList] = useRecoilState(ElementListState);

    function removeElement(id: string) {
        setElementList(elementList.filter((element) => element.id !== id));
        setDeleteModal(false);
    }

    return (
        <OutsideClickHandler onOutsideClick={() => setDeleteModal(false)}>
            <_Wrapper onClick={() => removeElement(id)}>삭제하기</_Wrapper>
        </OutsideClickHandler>
    );
}

const _Wrapper = styled.div`
    position: absolute;
    right: 35px;
    top: 24px;
    z-index: 100;
    width: 120px;
    height: 44px;
    border: 2px solid ${({ theme }) => theme.color.gray300};
    font-size: 18px;
    color: ${({ theme }) => theme.color.error};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.white};
`;

export default DeleteModal;
