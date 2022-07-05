import styled from '@emotion/styled';
import Close from '../../assets/svgs/Close';

interface PropsType {
    title: string;
}

function ModalExplain({ title }: PropsType) {
    return (
        <ModalExplainBox>
            {title}
            <Close />
        </ModalExplainBox>
    );
}

const ModalExplainBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray500};
    font-size: 25px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.gray700};
    padding: 0px 25px;
`;

export default ModalExplain;
