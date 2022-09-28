import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import ArrowIcon from '../../../assets/arrow';
import { DocumentPreivew } from '../../../models/documents/responses';
import { DocumentStateEnum } from '../../../utils/enum';

type DocumentState = 'PUBLIC' | 'STAY';

interface Props {
    documentPreview: DocumentPreivew[];
    profileImagePath: string;
    student_id: string;
    major_tag_name: string;
    gcn: number;
    name: string;
}

const DocumentList = ({
    documentPreview,
    profileImagePath,
    student_id,
    major_tag_name,
    gcn,
    name,
}: Props) => {
    const [documentState, setDocumentState] = useState<DocumentState>('PUBLIC');
    const router = useRouter();
    const onClickChangeDocumentType = () => {
        if (documentState === 'PUBLIC') setDocumentState('STAY');
        else setDocumentState('PUBLIC');
    };
    const previewState = useMemo(() => {
        return documentPreview.filter((i) => i.type === documentState)[0];
    }, [documentState, documentPreview]);
    return (
        <_Wrapper>
            <_DocumentType>
                <_ChangeDocumentTypeButton onClick={onClickChangeDocumentType}>
                    <ArrowIcon arrowType="LEFT" />
                </_ChangeDocumentTypeButton>
                <strong className="type">{DocumentStateEnum[documentState]} 문서</strong>
                <_ChangeDocumentTypeButton onClick={onClickChangeDocumentType}>
                    <ArrowIcon arrowType="RIGHT" />
                </_ChangeDocumentTypeButton>
            </_DocumentType>
            <_Document
                onClick={() => {
                    if (previewState?.preview_image_path === undefined) return;
                    if (documentState == 'STAY') router.push(`/feedback/${student_id}?stay=true`);
                    else router.push(`/feedback/${student_id}`);
                }}>
                {previewState?.preview_image_path !== undefined ? (
                    <>
                        {previewState.preview_image_path && (
                            <_Image style={{ backgroundImage: previewState.preview_image_path }} />
                        )}
                        <p className="developPart">{major_tag_name}</p>
                        <_UserSummary>
                            <img src={profileImagePath} alt="프로필" className="profileImage" />
                            <p className="name">{name}</p>
                            <p className="studentNumber">{gcn}</p>
                        </_UserSummary>
                    </>
                ) : (
                    <_EmptyDocument>요청 문서가 없습니다.</_EmptyDocument>
                )}
            </_Document>
        </_Wrapper>
    );
};
export default DocumentList;

const _Wrapper = styled.div`
    width: 400px;
    padding: 0 38px;
    display: flex;
    flex-direction: column;
    border-right: 2px solid ${({ theme }) => theme.color.gray300};
`;
const _DocumentType = styled.div`
    margin: 0 auto;
    width: 219px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > .type {
        font-size: 20px;
        font-weight: 500;
        line-height: 25px;
        color: ${({ theme }) => theme.color.black};
    }
`;
const _ChangeDocumentTypeButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.gray500};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const _Image = styled.div`
    width: 100%;
    height: 170px;
    background-size: 100%;
    background-repeat: no-repeat;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray500};
`;
const _Document = styled.section`
    width: 100%;
    height: 280px;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.color.gray300};
    margin-top: 7px;
    > .previewImage {
        object-fit: contain;
        height: 190px;
        width: 100%;
        object-position: center;
        background-color: ${({ theme }) => theme.color.gray500};
    }
    .previewWrapper {
        border: 1px solid black;
        width: 100%;
        height: 190px;
    }
    > .developPart {
        height: 40px;
        padding-left: 15px;
        font-size: 20px;
        line-height: 40px;
        color: ${({ theme }) => theme.color.navy};
        font-weight: 500;
        border-bottom: 1px solid ${({ theme }) => theme.color.gray300};
    }
`;
const _UserSummary = styled.div`
    display: flex;
    height: 50px;
    padding: 10px 15px;
    align-items: center;
    > .profileImage {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.gray300};
    }
    > .name {
        font-size: 16px;
        line-height: 20px;
        color: ${({ theme }) => theme.color.black};
        margin-left: 10px;
    }
    > .studentNumber {
        font-size: 14px;
        line-height: 17px;
        color: ${({ theme }) => theme.color.gray700};
        margin-left: 5px;
    }
`;
const _EmptyDocument = styled.p`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    height: 100%;
    font-size: 20px;
    color: ${({ theme }) => theme.color.gray700};
`;
