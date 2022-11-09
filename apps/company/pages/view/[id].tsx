import { JsxIntoArr } from '@apps/user/src/utils/function/jsxIntoArr';
import styled from '@emotion/styled';
import { ArrIntoJsx } from '@packages/preview/functions/arrIntoJsx';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { readPersonalDocument } from '../../api/document';
import { BackArrow } from '../../assets';

function TotalView() {
    const router = useRouter();
    useEffect(() => {
        const documentId = window.location.pathname.slice(6);
        console.log(documentId);
    }, []);
    const { data: documentData, refetch } = useQuery(['getPublicDocument'], async () => {
        return await readPersonalDocument(window.location.pathname.slice(6));
    });
    return (
        <TotalWrapper>
            <Back onClick={() => router.push('/' + process.env.COMPANY_URL)}>
                <Image src={BackArrow} />
            </Back>{' '}
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
export default TotalView;

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

const Back = styled.span`
    cursor: pointer;
    position: fixed;
    top: 30px;
    left: 30px;
`;
