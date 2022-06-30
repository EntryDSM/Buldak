import styled from '@emotion/styled';
import OutsideClickHandler from 'react-outside-click-handler';
import { PropsWithChildren } from 'react';

interface Props {
    closeModal: () => void;
}

const ModalWrapper = ({ children, closeModal }: PropsWithChildren<Props>) => {
    return (
        <_Wrapper>
            <OutsideClickHandler onOutsideClick={closeModal}>{children}</OutsideClickHandler>
        </_Wrapper>
    );
};
export default ModalWrapper;

const _Wrapper = styled.section`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
`;
