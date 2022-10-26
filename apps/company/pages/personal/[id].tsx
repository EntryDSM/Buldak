import { JsxIntoArr } from '@apps/user/src/utils/function/jsxIntoArr';
import styled from '@emotion/styled';
import { ArrIntoJsx } from '@packages/preview/functions/arrIntoJsx';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { readPersonalDocument, readPublicDocument } from '../../api/document';

function PersonalView() {
    const router = useRouter();
    useEffect(() => {
        const documentId = window.location.pathname.slice(10);
        console.log(documentId);
    }, []);
    const { data: documentData } = useQuery(
        ['getPersonalDocument'],
        async () => {
            return await readPersonalDocument(atob(window.location.pathname.slice(10)));
        },
        {
            onError: () => {
                console.log('error');
                router.push('/');
            },
        },
    );

    return (
        <TotalWrapper onClick={() => console.log()}>
            <Template>
                {documentData &&
                    JSON.parse(documentData.content)
                        .map((value) => JsxIntoArr(value))
                        .map((value) =>
                            ArrIntoJsx({
                                ...value.args,
                                isTeacher: false,
                                feedback: {
                                    feedInfo: '',
                                    isRead: false,
                                },
                            }),
                        )}
            </Template>
        </TotalWrapper>
    );
}
export default PersonalView;

const TotalWrapper = styled.div`
    min-width: calc(530 * 1.6px);
    width: 100%;
    height: fit-content;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.color.gray300};
`;

const Template = styled.div`
    width: 530px;
    zoom: 160%;
    background-color: white;
    margin: 50px;
`;

const Back = styled.h1`
    cursor: pointer;
    position: fixed;
    top: 10px;
    left: 10px;
`;
