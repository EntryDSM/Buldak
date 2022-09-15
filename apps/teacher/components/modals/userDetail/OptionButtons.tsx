import styled from '@emotion/styled';
import { Button } from '@packages/ui';
import { theme } from '@packages/emotion-style-provider/src/theme';
import { deletePublicDocument } from '../../../api/documents';
import { deleteStudent } from '../../../api/teachers';
import { useRouter } from 'next/router';

interface Props {
    student_id: string;
}

const OptionButtons = ({ student_id }: Props) => {
    const router = useRouter();
    const onClickDeleteStudent = () => {
        deleteStudent(student_id).then(() => {
            router.reload();
        });
    };
    const onClickDeletePublicDocument = () => {
        deletePublicDocument(student_id).then(() => {
            router.reload();
        });
    };
    return (
        <_Wrapper>
            <Button
                width={180}
                height={44}
                borderWidth={2}
                borderColor={theme.color.error}
                fontColor={theme.color.error}
                content="학생 탈퇴"
                onClick={onClickDeleteStudent}
            />
            <Button
                width={180}
                height={44}
                borderWidth={2}
                borderColor={theme.color.error}
                fontColor={theme.color.error}
                content="공개 문서 삭제"
                onClick={onClickDeletePublicDocument}
            />
        </_Wrapper>
    );
};
export default OptionButtons;

const _Wrapper = styled.section`
    width: 250px;
    padding-left: 35px;
    > button {
        margin-bottom: 20px;
        :last-child {
            margin-bottom: 0;
        }
    }
`;
