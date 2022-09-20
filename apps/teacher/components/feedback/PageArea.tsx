import styled from '@emotion/styled';
import { ArrIntoJsx } from '@packages/preview/functions/arrIntoJsx';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getStayDocument } from '../../api/documents';
import { toastHandler } from '../../utils/toast';

interface PageProps {
    id: string;
}

function PageArea({ id }: PageProps) {
    const { data } = useQuery([`getStayDocument${id || ''}`, id], () => getStayDocument(id), {
        onError: (err) => {
            toastHandler('ERROR');
        },
    });
    const [document, setDocument] = useState<any[]>(['']);
    const [feed, setFeed] = useState<any>([]);
    useEffect(() => {
        if (data) {
            setDocument(JSON.parse(data.content));
            setFeed(data.feedback_list);
        }
    }, [data, id]);
    return (
        <_Background>
            <_PageWrapper>
                <div>
                    {document.map((value, index) =>
                        ArrIntoJsx({
                            ...value.args,
                            feedback: {
                                feedInfo: feed.filter(
                                    (value: any) => value.sequence == index + 1,
                                )[0]?.comment,
                                isRead: feed.filter((value: any) => value.sequence == index + 1)[0]
                                    ?.isApply,
                                sequence: index + 1,
                            },
                            isTeacher: true,
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
        zoom: 53%;
    }
`;
