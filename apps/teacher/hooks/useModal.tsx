import { useContext } from 'react';
import {
    ModalDispatchContext,
    ModalStateContext,
    selectedModalType,
} from '../context/ModalContext';

const useModal = () => {
    const dispatch = useContext(ModalDispatchContext);
    const { selectedModal, selectedId } = useContext(ModalStateContext);
    const closeModal = () => {
        dispatch({ type: 'SELECT', selected: '', id: null });
    };
    const selectModal = (modal: selectedModalType, id: string | null) => {
        dispatch({ type: 'SELECT', selected: modal, id: id });
    };
    return {
        closeModal,
        selectedModal,
        selectedId,
        selectModal,
    };
};
export default useModal;
