import React from 'react';
import styled from '@emotion/styled';
import OutsideClickHandler from 'react-outside-click-handler';
import useModal from '../../hooks/useModal';

interface Props {
    onCloseFunction?: () => void;
}

const ModalWrapper: React.FC<Props> = ({ children, onCloseFunction }) => {
    const { closeModal } = useModal();
    const onClose = onCloseFunction
        ? onCloseFunction
        : function asd() {
              console.log('h');
          };
    return (
        <_Wrapper>
            <OutsideClickHandler
                onOutsideClick={() => {
                    closeModal();
                    onClose();
                }}>
                {children as JSX.Element}
            </OutsideClickHandler>
        </_Wrapper>
    );
};
export default ModalWrapper;

const _Wrapper = styled.section`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
`;
