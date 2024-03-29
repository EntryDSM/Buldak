import { useEffect, useState } from 'react';
import Image from 'next/image';
import * as S from '../components/UserMainPage/styled';
import DocumentPlus from '../components/UserMainPage/DocumentPlus';
import Document from '../components/UserMainPage/Document';
import SideBar from '../components/UserMainPage/SideBar';
import pdf from '../assets/svgs/pdf.svg';
import copy from '../assets/svgs/copy.svg';
import clipboard from '../assets/svgs/clipboard.svg';
import messege from '../assets/svgs/messege.svg';
import { NextPage } from 'next';
import { localListResource, myInfomationResource } from '../utils/api/userResouce';
import { useResource } from '../hook/useResource';
import usePreviewPublicStayDocument from '../hook/usePreviewPublicStayDocument';
import { documentTypeCheck } from '../utils/function/documentTypeCheck';
import { Tag } from '@packages/ui';
import { useMutation } from 'react-query';
import { copyPublicDocument } from '../utils/api/userDocument';
import { toastHandler } from '../utils/toast';

const UserMainPage: NextPage = () => {
    const [examine, setExamine] = useState<boolean>(true);
    const { data: myInformation } = useResource(myInfomationResource);
    const { data: localList, refetch } = useResource(localListResource);
    const { data: previewPublicStayDocument } = usePreviewPublicStayDocument(
        myInformation?.student_id,
    );
    const { mutate: copyDocument } = useMutation(
        ['copyDocument'],
        () => {
            return copyPublicDocument();
        },
        { onMutate: () => toastHandler('SUCCESS', '문서가 로컬에 복사되었습니다.') },
    );

    const handleCopyClipBoard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            toastHandler('SUCCESS', '클립보드에 복사되었습니다.');
        } catch (error) {
            toastHandler('WARN');
        }
    };

    return (
        <S.UserMainContainer>
            <SideBar />
            <S.DoucumentContainer>
                <S.TagLayout>
                    <S.TagBox>
                        <S.DocumentTitle>대표분야</S.DocumentTitle>
                        <Tag color="bdblue" tagName={myInformation?.major_tag as string} />
                    </S.TagBox>
                    <S.TagBox>
                        <S.DocumentTitle>내 태그</S.DocumentTitle>
                        <S.TagAria>
                            {(myInformation?.skill_tag_list || []).map((info, idx) => (
                                <Tag color="bdblue" key={idx} tagName={info.name} />
                            ))}
                        </S.TagAria>
                    </S.TagBox>
                </S.TagLayout>
                <S.DocumentTitle>내 문서</S.DocumentTitle>
                <S.DocumentText>로컬 문서</S.DocumentText>
                <S.DocumentsLayout>
                    <DocumentPlus />
                    {localList?.document_list.map((info) => {
                        return (
                            <Document
                                previewImagePath={info.preview_image_path}
                                documentId={info.document_id}
                            />
                        );
                    })}
                </S.DocumentsLayout>
                <S.DocumentsLayout>
                    <S.DocumentBox marginL="0vw">
                        <S.DocumentText>공개 요청 대기 문서</S.DocumentText>
                        {/* {examine ? <S.ExamineBox>검토중··</S.ExamineBox> : <></>} */}
                        {!!documentTypeCheck('STAY', previewPublicStayDocument)?.type ? (
                            <S.Display>
                                <Document
                                    previewImagePath={
                                        documentTypeCheck('STAY', previewPublicStayDocument)
                                            ?.preview_image_path || ''
                                    }
                                    documentId={myInformation?.student_id + '?stay=true'}
                                />
                                <S.DocumentLayout>
                                    <S.DocumentSignal>
                                        <Image src={messege} />
                                    </S.DocumentSignal>
                                </S.DocumentLayout>
                            </S.Display>
                        ) : (
                            <S.NonDocumentText>대기 문서가 존재하지 않습니다</S.NonDocumentText>
                        )}
                    </S.DocumentBox>
                    <S.DocumentBox marginL="13.6vw">
                        <S.DocumentText>공개 문서</S.DocumentText>
                        {!!documentTypeCheck('PUBLIC', previewPublicStayDocument)?.type ? (
                            <>
                                <S.DocumentLayout>
                                    <Document
                                        previewImagePath={
                                            documentTypeCheck('PUBLIC', previewPublicStayDocument)
                                                ?.preview_image_path || ''
                                        }
                                        documentId={myInformation?.student_id + '?public=true'}
                                    />
                                    <S.DocumentButtonBox>
                                        <S.DocumentButton
                                            onClick={() => {
                                                handleCopyClipBoard(
                                                    'https://company.dsm-repo.com/personal/' +
                                                        btoa(myInformation?.student_id as string),
                                                );
                                            }}>
                                            <Image src={clipboard} />
                                        </S.DocumentButton>
                                        <S.DocumentButton
                                            onClick={() => {
                                                copyDocument();
                                                window.location.href = window.location.href;
                                                toastHandler('SUCCESS');
                                            }}>
                                            <Image src={copy} />
                                        </S.DocumentButton>
                                    </S.DocumentButtonBox>
                                </S.DocumentLayout>
                            </>
                        ) : (
                            <S.NonDocumentText>공개 문서가 존재하지 않습니다</S.NonDocumentText>
                        )}
                    </S.DocumentBox>
                </S.DocumentsLayout>
            </S.DoucumentContainer>
        </S.UserMainContainer>
    );
};

UserMainPage.requiredResources = [myInfomationResource, localListResource];

export default UserMainPage;
