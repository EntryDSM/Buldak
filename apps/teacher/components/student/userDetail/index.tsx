<<<<<<< Updated upstream:apps/teacher/components/student/userDetail/index.tsx
import styled from '@emotion/styled';
import ModalWrapper from '../../ModalWrapper';
=======
<<<<<<< HEAD:apps/teacher/components/modals/userDetail/index.tsx
import styled from '@emotion/styled';
import ModalWrapper from '../ModalWrapper';
import PersonalInfo from './PersonalInfo';
import DocumentList from './DocumentList';
import OptionButtons from './OptionButtons';
import useModal from '../../../hooks/useModal';
import { useQuery } from 'react-query';
import { getStudentDetail } from '../../../api/teachers';
import { previewDocument } from '../../../api/documents';
import ModalHeader from '../ModalHeader';

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
    margin-top: 25px;
`;
=======
import styled from '@emotion/styled';
import ModalWrapper from '../ModalWrapper';
>>>>>>> Stashed changes:apps/teacher/components/modals/userDetail/index.tsx
import PersonalInfo from './PersonalInfo';
import DocumentList from './DocumentList';
import OptionButtons from './OptionButtons';
import useModal from '../../../hooks/useModal';
import { useQuery } from 'react-query';
import { getStudentDetail } from '../../../api/teachers';
import { previewDocument } from '../../../api/documents';
<<<<<<< Updated upstream:apps/teacher/components/student/userDetail/index.tsx

const UserDetail = () => {
    const { closeModal, selectedId } = useModal();
=======
import ModalHeader from '../ModalHeader';

const UserDetail = () => {
    const { selectedId } = useModal();
>>>>>>> Stashed changes:apps/teacher/components/modals/userDetail/index.tsx
    const { data: studentDetail } = useQuery(['getStudentDetail', selectedId], () =>
        getStudentDetail(selectedId || ''),
    );
    const { data: preview } = useQuery(['getDocumentPreview'], () =>
        previewDocument(selectedId || ''),
    );
    return (
<<<<<<< Updated upstream:apps/teacher/components/student/userDetail/index.tsx
        <ModalWrapper closeModal={closeModal}>
            <_Box>
                <_Title>학생 정보 조회</_Title>
=======
        <ModalWrapper>
            <_Box>
                <ModalHeader title="학생 상세 정보" />
>>>>>>> Stashed changes:apps/teacher/components/modals/userDetail/index.tsx
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
<<<<<<< Updated upstream:apps/teacher/components/student/userDetail/index.tsx
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
=======
`;
const _FlexWrapper = styled.div`
    display: flex;
    padding: 0 35px;
    margin-top: 25px;
`;
>>>>>>> e00e9c85974154ffb8db7f5caf1c1292b3c3e366:apps/teacher/components/student/userDetail/index.tsx
>>>>>>> Stashed changes:apps/teacher/components/modals/userDetail/index.tsx
