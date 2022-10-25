import { JsxIntoArr } from '@apps/user/src/utils/function/jsxIntoArr';
import styled from '@emotion/styled';
import { ArrIntoJsx } from '@packages/preview/functions/arrIntoJsx';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { readPublicDocument } from '../../api/document';

function TotalView() {
    const router = useRouter();
    useEffect(() => {
        const documentId = window.location.pathname.slice(6);
        console.log(documentId);
    }, []);
    const { data: documentData, refetch } = useQuery(['getPublicDocument'], async () => {
        return await readPublicDocument(window.location.pathname.slice(6));
    });
    return (
        <TotalWrapper>
            <Template>
                {documentData &&
                    JSON.parse(documentData.content)
                        .map((value) => JsxIntoArr(value))
                        .map((value) =>
                            ArrIntoJsx({
                                ...value.args,
                                isTeacher: false,
                            }),
                        )}
            </Template>
        </TotalWrapper>
    );
}
export default TotalView;

const TotalWrapper = styled.div`
    min-width: calc(530 * 1.6px);
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Template = styled.div`
    width: 530px;
    zoom: 160%;
`;
