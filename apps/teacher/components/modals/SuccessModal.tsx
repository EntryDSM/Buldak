import styled from '@emotion/styled';
import ModalWrapper from './ModalWrapper';
import Image from 'next/image';
import { successCheckIcon } from '../../assets';
import ModalHeader from './ModalHeader';

interface Props {
    type: 'RESET_PASSWORD' | 'ADD_COMPANY';
    password: string;
    onClose?: () => void;
}

function SuccessModal({ type, password, onClose }: Props) {
    return (
        <ModalWrapper onCloseFunction={onClose}>
            <_Wrapper>
                <ModalHeader title="알림" onClose={onClose} />
                <_Center>
                    <div id="check-icon">
                        <Image src={successCheckIcon} alt="성공" />
                    </div>
                    <div id="border" />
                    <strong>
                        {type === 'RESET_PASSWORD' ? '비밀번호 초기화' : '기업 추가'}에 성공했습니다
                    </strong>
                    <p id="pwd">
                        {type === 'RESET_PASSWORD' ? '초기화' : '발급'}된 비밀번호 : {password}
                    </p>
                </_Center>
            </_Wrapper>
        </ModalWrapper>
    );
}

export default SuccessModal;

const _Wrapper = styled.div`
    width: 650px;
    height: 400px;
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const _Center = styled.div`
    height: 260px;
    margin-top: 76px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > #check-icon {
        width: 90px;
        height: 90px;
        background-color: ${({ theme }) => theme.color.skyblue};
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100px;
    }
    > #border {
        width: 90px;
        border-top: 1px solid ${({ theme }) => theme.color.gray300};
        margin: 20px;
    }
    > strong {
        font-weight: 500;
        font-size: 22px;
        line-height: 28px;
        color: ${({ theme }) => theme.color.navy};
    }
    > p {
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
        color: ${({ theme }) => theme.color.black};
        margin-top: 20px;
    }
`;
