import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { ArrIntoJsx } from '@packages/preview/functions/arrIntoJsx';
import { JsxIntoArr } from '@packages/preview/functions/jsxIntoArr';
import { ElementListState, elementType } from '../../../recoil/ElementListState';
import { instance } from '../../../utils/api/instance';
import { queryDocument } from '../../../utils/api/userDocument';
import { Previews } from '@packages/preview/functions/previews';

interface PagesProps {
    zoom: number;
}

function Pages({ zoom = 100 }: PagesProps) {
    const [elementList, setElementList] = useRecoilState(ElementListState);
    const router = useRouter();
    const { data } = useQuery(['queryDocument'], () => queryDocument(router.query.id));

    useEffect(() => {
        if (data) {
            const loadArr: elementType[] = JSON.parse(data.data.content).map((content: any) => {
                const { image, tagType, patch, id, innerText, preview, ...except } = content;
                const temp = {
                    image: content.image,
                    patch: content.patch,
                    id: content.id,
                    preview: Previews(content.tagType),
                    args: { ...except, text1: innerText },
                };
                return temp;
            });
            console.log(loadArr, elementList);
            console.log(
                loadArr.map((value) => {
                    ArrIntoJsx(value);
                }),
            );
        }
    }, [data]);
    return (
        <PagesWrapper style={{ zoom: zoom + '%' }}>
            <Page>{elementList.map((value) => ArrIntoJsx(value.preview(value.args)))}</Page>
        </PagesWrapper>
    );
}

interface PageProps {
    children: ReactNode;
}

function Page({ children }: PageProps) {
    const pageRef = useRef(null);
    const wrapRef = useRef(null);
    return (
        <PageWrapper ref={wrapRef}>
            <div ref={pageRef}>{children}</div>
        </PageWrapper>
    );
}

export default Pages;

const PagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;

const PageWrapper = styled.div`
    width: 530px;
    min-height: 700px;
    height: fit-content;
    margin-bottom: 100px;
    background-color: ${({ theme }) => theme.color.white};
    > div {
        zoom: 53%;
    }
`;
