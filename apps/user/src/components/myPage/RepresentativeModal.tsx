import styled from '@emotion/styled';
import { Dispatch, SetStateAction } from 'react';
import ModalCommitBtn from './ModalCommitBtn';
import ModalExplain from './ModalExplain';
import ModalSearchInput from './ModalSearchInput';

interface PropsType {
    SetOpenAddTagModal: Dispatch<SetStateAction<boolean>>;
}

function RepresentativeModal({ SetOpenAddTagModal }: PropsType) {
    return (
        <Background onClick={() => SetOpenAddTagModal(false)}>
            <AddTagBox onClick={(e) => e.stopPropagation()}>
                <ModalExplain title="대표분야 설정" />
                <ContentBox>
                    <ModalSearchInput
                        subtitle="대표분야 검색"
                        placeholder="대표분야를 검색해주세요"
                    />
                    <Representative>
                        대표분야 : <strong>프론트엔드</strong>
                    </Representative>
                </ContentBox>
                <ModalCommitBtn content="설정하기" />
            </AddTagBox>
        </Background>
    );
}

const Representative = styled.p`
    font-size: 20px;
    margin-top: 15px;
    > strong {
        color: ${({ theme }) => theme.color.main};
    }
`;

const ContentBox = styled.div`
    padding: 0px 50px 0px 50px;
    height: 280px;
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.4);
`;

const AddTagBox = styled.div`
    width: 700px;
    height: 450px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.color.white};
`;

export default RepresentativeModal;
