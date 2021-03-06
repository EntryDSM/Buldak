import React, { createContext, Dispatch, FunctionComponent, useReducer } from 'react';

interface ModalState {
    selectedModal: selectedModalType;
}

export type selectedModalType =
    | 'PDF'
    | 'USER_DETAIL'
    | 'COMPANY_DETAIL'
    | 'PATCH_COMPANY_DETAIL'
    | 'SUCCESS'
    | '';

type SelectModalAction = {
    type: 'SELECT';
    selected: selectedModalType;
};

type ActionTypes = SelectModalAction;

const modalDefaultValue: ModalState = {
    selectedModal: '',
};

export const ModalStateContext = createContext<ModalState>(modalDefaultValue);

type SelectModalDispatch = Dispatch<SelectModalAction>;
export const ModalDispatchContext = createContext<SelectModalDispatch>(() => null);

const ModalProvider: FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedModal, changeModalDispatch] = useReducer(modalReducer, modalDefaultValue);
    return (
        <ModalStateContext.Provider value={selectedModal}>
            <ModalDispatchContext.Provider value={changeModalDispatch}>
                {children}
            </ModalDispatchContext.Provider>
        </ModalStateContext.Provider>
    );
};
const modalReducer = (state: ModalState, action: ActionTypes): ModalState => {
    switch (action.type) {
        case 'SELECT':
            return {
                ...state,
                selectedModal: action.selected,
            };
        default:
            return state;
    }
};

export default ModalProvider;
