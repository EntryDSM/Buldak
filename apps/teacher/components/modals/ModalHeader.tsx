import Image from 'next/image';
import { closeIcon } from '../../assets';
import styled from '@emotion/styled';
import useModal from '../../hooks/useModal';

interface Props {
    title: string;
}

const ModalHeader = ({ title }: Props) => {
    const { closeModal } = useModal();
    return (
        <_TitleWrapper>
            <_Title>{title}</_Title>
            <button onClick={closeModal}>
                <Image src={closeIcon} alt="닫기" />
            </button>
        </_TitleWrapper>
    );
};
export default ModalHeader;

const _TitleWrapper = styled.div`
    padding: 12px 25px;
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
