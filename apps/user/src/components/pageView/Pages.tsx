import styled from '@emotion/styled';
import DoubleText from '../template/DoubleText';

import { ReactNode, useEffect, useRef, useState } from 'react';
import ArrIntoJsx from '../../constants/arrIntoJsx';

interface PagesProps {
    zoom: number;
    templateArr: object[];
}

function Pages({ zoom = 100, templateArr }: PagesProps) {
    const [furifiedArr, setArr] = useState(null);
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
    useEffect(() => {
        console.log('요소 높이', pageRef.current.clientHeight * (53 / 100));
        console.log('틀 높이', wrapRef.current.clientHeight);
    });
    return (
        <PageWrapper ref={wrapRef}>
            <div ref={pageRef}>{children}</div>
        </PageWrapper>
    );
}

interface TestProps {
    unfurifiedArr: object[];
}

function Test({ unfurifiedArr }: TestProps) {
    const startIndex = useRef(0).current;
    const heightBuffer = useRef(0).current;
    const [result, setResult] = useState([]);
    const [TestingDiv, setdiv] = useState<HTMLElement | null>(null);
    useEffect(() => {
        setdiv(document.getElementById('testingdiv'));
    }, []);
    return (
        <div id="testingdiv">
            {TestingDiv &&
                unfurifiedArr.map((value, index) => {
                    console.log(TestingDiv);
                    console.log(TestingDiv.clientHeight);

                    return ArrIntoJsx(value);
                })}
        </div>
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
