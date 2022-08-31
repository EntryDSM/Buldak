import { useContext } from 'react';
import {
    ModalDispatchContext,
    ModalStateContext,
    selectedModalType,
} from '../context/ModalContext';

interface SelectModalProps {
    modal: selectedModalType;
    id?: string;
    password?: string;
}

const useModal = () => {
    const dispatch = useContext(ModalDispatchContext);
    const { selectedModal, selectedId } = useContext(ModalStateContext);
    const closeModal = () => {
        dispatch({ type: 'SELECT', selected: '', id: undefined });
    };
    const selectModal = ({ modal, id, password }: SelectModalProps) => {
        dispatch({ type: 'SELECT', selected: modal, id: id, password: password });
    };
    return {
        closeModal,
        selectedModal,
        selectedId,
        selectModal,
    };
};
export default useModal;
