import Image from 'next/image';
import { closeIcon } from '../../assets';
import styled from '@emotion/styled';
import useModal from '../../hooks/useModal';

interface Props {
    title: string;
    onClose?: () => void;
}

const ModalHeader = ({ title, onClose }: Props) => {
    const onCloseFunction = onClose ? onClose : function () {};
    const { closeModal } = useModal();
    return (
        <_TitleWrapper>
            <_Title>{title}</_Title>
            <button
                onClick={() => {
                    closeModal();
                    onCloseFunction();
                }}>
                <Image src={closeIcon} alt="닫기" />
            </button>
        </_TitleWrapper>
    );
};
export default ModalHeader;

const _TitleWrapper = styled.div`
    padding: 12px 25px;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray500};
    display: flex;
    justify-content: space-between;
`;
const _Title = styled.p`
    font-size: 25px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.gray700};
`;
