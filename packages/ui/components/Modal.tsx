import styled from '@emotion/styled';
import Image from 'next/image';
import { FC } from 'react';
import { closeIcon } from '../assets/modal';
import { Button } from '@packages/ui';

interface ModalProps {
    option: boolean; // 버튼 유무
    title: string;
    subContent: Array<string>; // 한 줄씩 배열에 담기
    top: number;
    left: number;
    onCloseBtnClick: () => void;
    onSubmitBtnClick?: () => void;
    onCancleBtnClick?: () => void;
}

const Modal: FC<ModalProps> = (props) => {
    const {
        option,
        title,
        subContent,
        onCancleBtnClick,
        onCloseBtnClick,
        onSubmitBtnClick,
    } = props;
    return (
        <ModalWrapper {...props}>
            <Header>
                <p>알림</p>
                <Image
                    src={closeIcon}
                    width={30}
                    height={30}
                    onClick={onCloseBtnClick}
                    className={'image'}
                />
            </Header>
            <Content {...props}>
                <p>{title}</p>
                {subContent.map((data: string, idx: number) => {
                    return <p key={idx}>{data}</p>;
                })}
            </Content>
            {option && (
                <Option>
                    <Button
                        width={87}
                        height={36}
                        content={'취소'}
                        borderColor={'#E0E0E0'}
                        borderWidth={1}
                        onClick={onCancleBtnClick}
                    />
                    <Button
                        width={87}
                        height={36}
                        content={'확인'}
                        backgroundColor={'#0A4595'}
                        fontColor={'#FFFFFF'}
                        onClick={onSubmitBtnClick}
                    />
                </Option>
            )}
        </ModalWrapper>
    );
};

const ModalWrapper = styled.div<ModalProps>`
    width: 420px;
    height: ${({ option }) => (option ? 260 : 220)}px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    position: absolute;
    top: ${({ top }) => top}px;
    left: ${({ left }) => left}px;
    .image {
        cursor: pointer;
    }
    > div {
        padding: 0px 20px;
    }
`;

const Header = styled.div`
    width: 100%;
    height: 43px;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray500};
    display: flex;
    justify-content: space-between;
    align-items: center;
    > p {
        font-size: 20px;
        color: ${({ theme }) => theme.color.gray700};
    }
`;

const Content = styled.div<ModalProps>`
    width: 100%;
    height: ${({ option }) => (option ? 'calc(100% - 99px)' : 'calc(100% - 43px)')};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3px;
    > p {
        color: #5f5f5f;
        font-size: 19px;
    }
    > p:first-of-type {
        color: ${({ theme }) => theme.color.black};
        font-size: 23px;
        margin-bottom: 7px;
    }
`;

const Option = styled.div`
    width: 100%;
    height: 56px;
    border-top: 1px solid ${({ theme }) => theme.color.gray500};
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 16px;
`;

export default Modal;
