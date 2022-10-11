import styled from '@emotion/styled';
import { ArrIntoJsx } from '@packages/preview/functions/arrIntoJsx';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getPublicDocument, getStayDocument } from '../../api/documents';
import { JsxIntoArr } from '../../utils/jsxIntoArr';

interface PageProps {
    id: string;
}

function PageArea({ id }: PageProps) {
    const router = useRouter();
    const { data: Staydata } = useQuery([`getStayDocument${id || ''}`, id], () =>
        getStayDocument(id),
    );
    const { data: Publicdata } = useQuery([`getPublicDocument${id || ''}`, id], () =>
        getPublicDocument(id),
    );
    const [document, setDocument] = useState<any[]>([]);
    const [feed, setFeed] = useState<any>([]);
    useEffect(() => {
        if (!router.query.stay && Publicdata) {
            setDocument(JSON.parse(Publicdata.content));
        } else if (Staydata) {
            // 나중에서 수정해주세요. 아무래도 이건 좀 아닌거 같아~
            router.push(`/feedback/${id}?stay=true&documentId=${Staydata.document_id}`);
            setDocument(JSON.parse(Staydata.content));
            setFeed(Staydata.feedback_list);
        }
    }, [Staydata, Publicdata, id]);
    return (
        <_Background>
            <_PageWrapper>
                {document && (
                    <div>
                        {router.query.stay
                            ? document
                                  .map((value) => JsxIntoArr(value))
                                  .map((value, index) =>
                                      ArrIntoJsx({
                                          ...value.args,
                                          feedback: {
                                              feedInfo: feed.filter(
                                                  (value: any) => value.sequence == index + 1,
                                              )[0]?.comment,
                                              isRead: feed.filter(
                                                  (value: any) => value.sequence == index + 1,
                                              )[0]?.apply,
                                              sequence: index + 1,
                                          },
                                          isTeacher: true,
                                      }),
                                  )
                            : document
                                  .map((value) => JsxIntoArr(value))
                                  .map((value) =>
                                      ArrIntoJsx({
                                          ...value.args,
                                          isTeacher: false,
                                      }),
                                  )}
                    </div>
                )}
            </_PageWrapper>
        </_Background>
    );
}

export default PageArea;

const _Background = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const _PageWrapper = styled.div`
    width: 530px;
    min-height: 700px;
    height: fit-content;
    margin: 100px 0px;
    background-color: ${({ theme }) => theme.color.white};
    > div {
    }
`;
