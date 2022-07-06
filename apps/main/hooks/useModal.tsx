import { useContext } from 'react';
import {
    ModalDispatchContext,
    ModalStateContext,
    selectedModalType,
} from '../context/ModalContext';

const useModal = () => {
    const dispatch = useContext(ModalDispatchContext);
    const { selectedModal } = useContext(ModalStateContext);
    const closeModal = () => {
        dispatch({ type: 'SELECT', selected: '' });
    };
    const selectModal = (modal: selectedModalType) => {
        dispatch({ type: 'SELECT', selected: modal });
    };
    return {
        closeModal,
        selectedModal,
        selectModal,
    };
};
export default useModal;
