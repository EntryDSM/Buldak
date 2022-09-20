import * as S from './styled';
import Image from 'next/image';
import Plus from '../../assets/svgs/Plus.svg';
import { useMutation } from 'react-query';
import { documentLocalCreate } from '../../utils/api/userDocument';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const DocumentPlus = () => {
    const { mutate, data } = useMutation(['LocalCreate'], () => {
        return documentLocalCreate();
    });
    const router = useRouter();

    useEffect(() => {
        if (data) {
            router.push(`/pageEditer/${data.data.document_id}`);
        }
    }, [data]);
    return (
        <S.Documents onClick={() => mutate()}>
            <S.DocumentPlusIcon>
                <Image src={Plus} />
            </S.DocumentPlusIcon>
            <S.DocumentPlusText>문서 추가</S.DocumentPlusText>
        </S.Documents>
    );
};

export default DocumentPlus;
