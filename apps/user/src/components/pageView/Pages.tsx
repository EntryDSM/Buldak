import styled from '@emotion/styled';
import { ReactNode, useEffect, useRef, useState } from 'react';
import ArrIntoJsx from '../../constants/arrIntoJsx';

interface PagesProps {
    zoom: number;
    templateArr: object[];
}

function Pages({ zoom = 100, templateArr }: PagesProps) {
    return (
        <PagesWrapper style={{ zoom: zoom + '%' }}>
            <Page>{templateArr.map((value) => ArrIntoJsx(value))}</Page>
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
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;

const PageWrapper = styled.div`
    border: 1px solid black;
    width: 530px;
    min-height: 700px;
    height: fit-content;
    margin-bottom: 100px;
    background-color: ${({ theme }) => theme.color.white};
    > div {
        zoom: 53%;
    }
`;
