import styled from '@emotion/styled';
import ModalWrapper from '../../ModalWrapper';
import PersonalInfo from './PersonalInfo';
import DocumentList from './DocumentList';
import OptionButtons from './OptionButtons';
import useModal from '../../../hooks/useModal';
import { useQuery } from 'react-query';
import { getStudentDetail } from '../../../api/teachers';
import { previewDocument } from '../../../api/documents';
import Image from 'next/image';
import { closeIcon } from '../../../assets';

const UserDetail = () => {
    const { closeModal, selectedId } = useModal();
    const { data: studentDetail } = useQuery(['getStudentDetail', selectedId], () =>
        getStudentDetail(selectedId || ''),
    );
    const { data: preview } = useQuery(['getDocumentPreview'], () =>
        previewDocument(selectedId || ''),
    );
    return (
        <ModalWrapper closeModal={closeModal}>
            <_Box>
                <_TitleWrapper>
                    <_Title>학생 정보 조회</_Title>
                    <button onClick={closeModal}>
                        <Image src={closeIcon} alt="닫기" />
                    </button>
                </_TitleWrapper>
                <_FlexWrapper>
                    <PersonalInfo
                        name={studentDetail?.name || '이걸 보시면'}
                        gcn={studentDetail?.gcn || 2117}
                        email={studentDetail?.email || '이준서를 찾아주세요'}
                        major_tag_name={studentDetail?.major_tag_name || ''}
                        my_skill_name_list={studentDetail?.my_skill_name_list || []}
                        phone_number={studentDetail?.phone_number || ''}
                    />
                    <DocumentList
                        documentPreview={preview?.document_list || []}
                        profileImagePath={studentDetail?.profile_image_path || ''}
                    />
                    <OptionButtons student_id={selectedId || ''} />
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
    padding: 20px 0;
`;
const _TitleWrapper = styled.div`
    margin-bottom: 14px;
    padding: 0 25px 20px 25px;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray500};
    display: flex;
    justify-content: space-between;
`;
const _Title = styled.h2`
    font-size: 25px;
    line-height: 31px;
    color: ${({ theme }) => theme.color.gray700};
`;
const _FlexWrapper = styled.div`
    display: flex;
    padding: 0 35px;
`;
