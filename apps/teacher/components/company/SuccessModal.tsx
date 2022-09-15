<<<<<<< Updated upstream:apps/teacher/components/company/SuccessModal.tsx
import styled from '@emotion/styled';
import ModalWrapper from '../ModalWrapper';
import useModal from '../../hooks/useModal';
import Image from 'next/image';
import { closeIcon } from '../../assets';
=======
<<<<<<< HEAD:apps/teacher/components/modals/SuccessModal.tsx
import styled from '@emotion/styled';
import ModalWrapper from './ModalWrapper';
import Image from 'next/image';
import { successCheckIcon } from '../../assets';
import ModalHeader from './ModalHeader';

interface Props {
    type: 'RESET_PASSWORD' | 'ADD_COMPANY';
    password: string;
}

function SuccessModal({ type, password }: Props) {
    return (
        <ModalWrapper>
            <_Wrapper>
                <ModalHeader title="알림" />
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
=======
import styled from '@emotion/styled';
import ModalWrapper from './ModalWrapper';
import Image from 'next/image';
import { successCheckIcon } from '../../assets';
import ModalHeader from './ModalHeader';
>>>>>>> Stashed changes:apps/teacher/components/modals/SuccessModal.tsx

interface Props {
    type: 'RESET_PASSWORD' | 'ADD_COMPANY';
    password: string;
}

function SuccessModal({ type, password }: Props) {
<<<<<<< Updated upstream:apps/teacher/components/company/SuccessModal.tsx
    const { closeModal } = useModal();

    return (
        <ModalWrapper closeModal={closeModal}>
            <_Wrapper>
                <_Header>
                    <p>알림</p>
                    <button onClick={closeModal}>
                        <Image src={closeIcon} alt="닫기" />
                    </button>
                </_Header>
                <_Center>
                    <div id="check-icon" />
=======
    return (
        <ModalWrapper>
            <_Wrapper>
                <ModalHeader title="알림" />
                <_Center>
                    <div id="check-icon">
                        <Image src={successCheckIcon} alt="성공" />
                    </div>
>>>>>>> Stashed changes:apps/teacher/components/modals/SuccessModal.tsx
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

<<<<<<< Updated upstream:apps/teacher/components/company/SuccessModal.tsx
const _Header = styled.div`
    width: 100%;
    height: 44px;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray300};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    > p {
        font-weight: 500;
        font-size: 20px;
        line-height: 25px;
        color: ${({ theme }) => theme.color.gray700};
    }
    > #exit {
        width: 30px;
        height: 30px;
        border: 1px solid black;
    }
    > button {
        cursor: pointer;
    }
`;

=======
>>>>>>> Stashed changes:apps/teacher/components/modals/SuccessModal.tsx
const _Center = styled.div`
    height: 260px;
    margin-top: 76px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > #check-icon {
        width: 90px;
        height: 90px;
<<<<<<< Updated upstream:apps/teacher/components/company/SuccessModal.tsx
        border: 1px solid black;
        background-color: ${({ theme }) => theme.color.skyblue};
=======
        background-color: ${({ theme }) => theme.color.skyblue};
        display: flex;
        align-items: center;
        justify-content: center;
>>>>>>> Stashed changes:apps/teacher/components/modals/SuccessModal.tsx
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
<<<<<<< Updated upstream:apps/teacher/components/company/SuccessModal.tsx
=======
>>>>>>> e00e9c85974154ffb8db7f5caf1c1292b3c3e366:apps/teacher/components/company/SuccessModal.tsx
>>>>>>> Stashed changes:apps/teacher/components/modals/SuccessModal.tsx
