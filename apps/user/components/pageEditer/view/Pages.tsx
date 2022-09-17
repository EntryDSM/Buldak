import styled from '@emotion/styled';
import { ReactNode, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { ArrIntoJsx } from '@packages/preview/functions/arrIntoJsx';
import { ElementListState } from '../../../recoil/ElementListState';

interface PagesProps {
    zoom: number;
}

function Pages({ zoom = 100 }: PagesProps) {
    const [elementList, setElementList] = useRecoilState(ElementListState);
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
