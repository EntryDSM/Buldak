import styled from '@emotion/styled';
import { Dispatch, SetStateAction } from 'react';
import Close from '../../assets/svgs/Close';
import ModalCommitBtn from './ModalCommitBtn';
import ModalExplain from './ModalExplain';
import ModalSearchInput from './ModalSearchInput';

interface PropsType {
    SetOpenRepresentativeModal: Dispatch<SetStateAction<boolean>>;
}

const TagList = ['Java', 'JavaScript'];

function AddTagModal({ SetOpenRepresentativeModal }: PropsType) {
    return (
        <Background onClick={() => SetOpenRepresentativeModal(false)}>
            <RepresentativeBox onClick={(e) => e.stopPropagation()}>
                <ModalExplain title="태그 추가" />
                <ContentBox>
                    <ModalSearchInput subtitle="기술스택" placeholder="태그를 검색해주세요" />
                    <TagContainer>
                        {TagList.map((Tag, index) => (
                            <TagBox key={index}>
                                <span>{Tag}</span>
                                <Close />
                            </TagBox>
                        ))}
                    </TagContainer>
                </ContentBox>
                <ModalCommitBtn content="추가하기" />
            </RepresentativeBox>
        </Background>
    );
}

const ContentBox = styled.div`
    padding: 0px 50px 0px 50px;
`;

const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 270px;
    overflow-y: auto;
`;

const TagBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${({ theme }) => theme.color.background};
    border-radius: 100px;
    height: 40px;
    font-size: 18px;
    padding: 0px 15px 0px 15px;
    margin: 20px 20px 0px 0px;
    > span {
        margin-right: 10px;
    }
`;

const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.4);
`;

const RepresentativeBox = styled.div`
    width: 700px;
    height: 550px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.color.white};
`;

export default AddTagModal;
