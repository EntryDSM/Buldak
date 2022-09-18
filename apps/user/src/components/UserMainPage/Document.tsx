import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useResource } from '../../hook/useResource';
import { DocumentType, myInfomationResource } from '../../utils/api/userResouce';
import { departmentConverter } from '../../utils/function/department';
import * as S from './styled';

interface DocumentPlusProps {
    previewImagePath: string;
    documentId: string;
}

const DocumentPlus = ({ previewImagePath, documentId }: DocumentPlusProps) => {
    const { data: myInformation } = useResource(myInfomationResource);
    const router = useRouter();

    return (
        <S.Documents
            onClick={() => {
                router.push(`/pageEditer/${documentId}`);
            }}>
            <S.DocumentImg src={previewImagePath || ''}></S.DocumentImg>
            <S.DocumentLine />
            <S.DocumentIntroBox>
                <S.DocumentIntroImg></S.DocumentIntroImg>
                <S.displayFlexColumn>
                    <S.DocumentIntroText>{myInformation?.name}</S.DocumentIntroText>
                    <S.DocumentIntroClass>
                        {departmentConverter(myInformation?.class_num)}
                    </S.DocumentIntroClass>
                </S.displayFlexColumn>
            </S.DocumentIntroBox>
        </S.Documents>
    );
};

export default DocumentPlus;
