import styled from '@emotion/styled';
import OutsideClickHandler from 'react-outside-click-handler';
import useModal from '../hooks/useModal';

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
