import styled from '@emotion/styled';
import ModalWrapper from '../../ModalWrapper';
import PersonalInfo from './PersonalInfo';
import DocumentList from './DocumentList';
import OptionButtons from './OptionButtons';
import useModal from '../../../hooks/useModal';
import { useQuery } from 'react-query';
import { getStudentDetail } from '../../../api/teachers';
import { previewDocument } from '../../../api/documents';
import ModalHeader from '../../modals/ModalHeader';

const UserDetail = () => {
    const { selectedId } = useModal();
    const { data: studentDetail } = useQuery(['getStudentDetail', selectedId], () =>
        getStudentDetail(selectedId || ''),
    );
    const { data: preview } = useQuery(['getDocumentPreview'], () =>
        previewDocument(selectedId || ''),
    );
    return (
        <ModalWrapper>
            <_Box>
                <ModalHeader title="학생 상세 정보" />
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
`;
const _FlexWrapper = styled.div`
    display: flex;
    padding: 0 35px;
`;
