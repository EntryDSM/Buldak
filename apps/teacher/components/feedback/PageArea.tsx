import styled from '@emotion/styled';
import { ArrIntoJsx } from '@packages/preview/functions/arrIntoJsx';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getPublicDocument, getStayDocument } from '../../api/documents';
import { toastHandler } from '../../utils/toast';

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
    const [document, setDocument] = useState<any[]>(['']);
    const [feed, setFeed] = useState<any>([]);
    useEffect(() => {
        if (!router && Publicdata) {
            setDocument(JSON.parse(Publicdata.content));
        } else if (Staydata) {
            console.log('data', document);
            setDocument(JSON.parse(Staydata.content));
            setFeed(Staydata.feedback_list);
        }
    }, [Staydata, Publicdata, id]);
    return (
        <_Background>
            <_PageWrapper>
                <div>
                    {router
                        ? document.map((value, index) =>
                              ArrIntoJsx({
                                  ...value,
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
                        : document.map((value) =>
                              ArrIntoJsx({
                                  ...value,
                                  isTeacher: false,
                              }),
                          )}
                </div>
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
