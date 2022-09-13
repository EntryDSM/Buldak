import Image from 'next/image';
import { useResource } from '../../hook/useResource';
import { DocumentType, myInfomationResource } from '../../utils/api/userResouce';
import { departmentConverter } from '../../utils/function/department';
import * as S from './styled';

interface DocumentPlusProps {
    previewImagePath: string;
}

const DocumentPlus = ({ previewImagePath }: DocumentPlusProps) => {
    const { data: myInformation } = useResource(myInfomationResource);
    return (
        <S.Documents>
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
