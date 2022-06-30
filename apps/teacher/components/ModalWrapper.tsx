import styled from '@emotion/styled';
import OutsideClickHandler from 'react-outside-click-handler';

interface Props {
    setModalStatus: () => void;
}

const ModalWrapper: React.FC<Props> = ({ children, setModalStatus }) => {
    return (
        <_Wrapper>
            <OutsideClickHandler onOutsideClick={setModalStatus}>{children}</OutsideClickHandler>
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
