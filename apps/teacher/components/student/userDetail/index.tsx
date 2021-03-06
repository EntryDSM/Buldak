import styled from '@emotion/styled';
import ModalWrapper from '../../ModalWrapper';
import PersonalInfo from './PersonalInfo';
import DocumentList from './DocumentList';
import OptionButtons from './OptionButtons';
import useModal from '../../../hooks/useModal';

const UserDetail = () => {
    const { closeModal } = useModal();
    return (
        <ModalWrapper closeModal={closeModal}>
            <_Box>
                <_Title>학생 정보 조회</_Title>
                <_FlexWrapper>
                    <PersonalInfo />
                    <DocumentList />
                    <OptionButtons />
                </_FlexWrapper>
            </_Box>
        </ModalWrapper>
    );
};
export default UserDetail;

const _Box = styled.div`
    width: 1050px;
    height: 500px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 10px;
    padding: 30px 35px;
`;
const _Title = styled.h2`
    font-size: 25px;
    line-height: 31px;
    color: ${({ theme }) => theme.color.black};
    margin-bottom: 14px;
`;
const _FlexWrapper = styled.div`
    display: flex;
`;
