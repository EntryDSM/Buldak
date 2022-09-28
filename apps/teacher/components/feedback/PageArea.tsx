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
    const router = useRouter().query.stay;
    const { data: Staydata } = useQuery([`getStayDocument${id || ''}`, id], () =>
        getStayDocument(id),
    );
    const { data: Publicdata } = useQuery([`getPublicDocument${id || ''}`, id], () =>
        getPublicDocument(id),
    );
    const [document, setDocument] = useState<any[]>([]);
    const [feed, setFeed] = useState<any>([]);
    useEffect(() => {
        if (!router && Publicdata) {
            setDocument(JSON.parse(Publicdata.content));
        } else if (Staydata) {
            setDocument(JSON.parse(Staydata.content));
            setFeed(Staydata.feedback_list);
        }
        console.log(document);
    }, [Staydata, Publicdata, id]);
    useEffect(() => {
        console.log('document', document);
    }, [document]);
    return (
        <_Background>
            <_PageWrapper>
                {document && (
                    <div>
                        {router
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
                                              )[0]?.isApply,
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
