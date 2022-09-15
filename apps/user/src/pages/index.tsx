import { useState } from 'react';
import Image from 'next/image';
import * as S from '../components/UserMainPage/styled';
import DocumentPlus from '../components/UserMainPage/DocumentPlus';
import Document from '../components/UserMainPage/Document';
import SideBar from '../components/UserMainPage/SideBar';
import pdf from '../assets/svg/pdf.svg';
import copy from '../assets/svg/copy.svg';
import messege from '../assets/svg/messege.svg';

const UserMainPage = () => {
    const [examine, setExamine] = useState<boolean>(true);
    const [waitingDocument, setWaitingDocument] = useState<boolean>(true);
    const [publicDocument, setPublicDocument] = useState<boolean>(true);

    return (
        <S.UserMainContainer>
            <SideBar />
            <S.DoucumentContainer>
                {examine ? <S.ExamineBox>검토중··</S.ExamineBox> : <></>}
                <S.TagLayout>
                    <S.TagBox>
                        <S.DocumentTitle>대표분야</S.DocumentTitle>
                        <S.testTag />
                    </S.TagBox>
                    <S.TagBox>
                        <S.DocumentTitle>내 태그</S.DocumentTitle>
                        <S.TagAria>
                            <S.testTag />
                            <S.testTag />
                            <S.testTag />
                        </S.TagAria>
                    </S.TagBox>
                </S.TagLayout>
                <S.DocumentTitle>내 문서</S.DocumentTitle>
                <S.DocumentText>로컬 문서</S.DocumentText>
                <S.DocumentsLayout>
                    <DocumentPlus />
                    <Document />
                    <Document />
                    <Document />
                </S.DocumentsLayout>
                <S.DocumentsLayout>
                    <S.DocumentBox marginL="0vw">
                        <S.DocumentText>공개 요청 대기 문서</S.DocumentText>
                        {waitingDocument ? (
                            <>
                                <S.DocumentLayout>
                                    <Document />
                                    <S.DocumentSignal>
                                        <Image src={messege} />
                                    </S.DocumentSignal>
                                </S.DocumentLayout>
                            </>
                        ) : (
                            <S.NonDocumentText>대기 문서가 존재하지 않습니다</S.NonDocumentText>
                        )}
                    </S.DocumentBox>
                    <S.DocumentBox marginL="13.6vw">
                        <S.DocumentText>공개 문서</S.DocumentText>
                        {publicDocument ? (
                            <>
                                <S.DocumentLayout>
                                    <Document />
                                    <S.DocumentButtonBox>
                                        <S.DocumentButton>
                                            <Image src={pdf} />
                                        </S.DocumentButton>
                                        <S.DocumentButton>
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

export default UserMainPage;
