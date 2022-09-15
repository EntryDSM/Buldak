<<<<<<< HEAD:apps/teacher/components/modals/ModalWrapper.tsx
import styled from '@emotion/styled';
import OutsideClickHandler from 'react-outside-click-handler';
import useModal from '../../hooks/useModal';

const ModalWrapper: React.FC = ({ children }) => {
    const { closeModal } = useModal();
    return (
        <_Wrapper>
            <OutsideClickHandler onOutsideClick={closeModal}>{children}</OutsideClickHandler>
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
=======
import styled from '@emotion/styled';
import OutsideClickHandler from 'react-outside-click-handler';
import useModal from '../../hooks/useModal';

const ModalWrapper: React.FC = ({ children }) => {
    const { closeModal } = useModal();
    return (
        <_Wrapper>
            <OutsideClickHandler onOutsideClick={closeModal}>{children}</OutsideClickHandler>
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
>>>>>>> e00e9c85974154ffb8db7f5caf1c1292b3c3e366:apps/teacher/components/ModalWrapper.tsx
