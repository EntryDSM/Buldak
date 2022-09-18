import styled from '@emotion/styled';
import { Template_DefProfile } from '@packages/preview';
import { ArrIntoJsx } from '@packages/preview/functions/arrIntoJsx';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getStayDocument } from '../../api/documents';

interface PageProps {
    id: string;
}

function PageArea({ id }: PageProps) {
    const { data } = useQuery(['getStayDocument' + id], () => getStayDocument(id));
    const [document, setDocument] = useState([]);
    useEffect(() => {
        if (data) {
            setDocument(JSON.parse(data.content));
        }
    }, [data, id]);
    return (
        <_Background>
            <_PageWrapper>
                <div>{document.map((value) => ArrIntoJsx({ ...value, isTeacher: true }))}</div>
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
