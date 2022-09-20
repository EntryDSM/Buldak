import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { ArrIntoJsx } from '@packages/preview/functions/arrIntoJsx';
import { JsxIntoArr } from '@packages/preview/functions/jsxIntoArr';
import { ElementListState } from '../../../recoil/ElementListState';
import {
    documentLocalQuery,
    documentPublicQuery,
    documentStayQuery,
} from '../../../utils/api/userDocument';

interface PagesProps {
    zoom: number;
}

function Pages({ zoom = 100 }: PagesProps) {
    const [elementList, setElementList] = useRecoilState(ElementListState);
    const router = useRouter();
    const { data: Localdata } = useQuery(['queryDocument'], () =>
        documentLocalQuery(router.query.id as string),
    );
    const { data: Staydata } = useQuery(['stayDocument'], () =>
        documentStayQuery(router.query.id as string),
    );
    const { data: Publicdata } = useQuery(['publicDocument'], () =>
        documentPublicQuery(router.query.id as string),
    );
    useEffect(() => {
        if (router.query.stay && Staydata) {
            const feedbacklist = Staydata.data.feedback_list;
            let Content = JSON.parse(Staydata.data.content);
            feedbacklist.map((value: any) => {
                Content[value.sequence - 1].args.feedback = {
                    sequence: value.sequence,
                    feedInfo: value.comment,
                    isRead: value.apply,
                };
            });
            setElementList(Content.map((content: any) => JsxIntoArr(content)));
        } else if (Localdata) {
            setElementList(
                JSON.parse(Localdata.data.content).map((content: any) => JsxIntoArr(content)),
            );
        } else if (router.query.public && Publicdata) {
            setElementList(
                JSON.parse(Publicdata.data.content).map((content: any) =>
                    JsxIntoArr({
                        ...content,
                        args: { ...content.args, feedback: { feedInfo: '', isRead: false } },
                    }),
                ),
            );
        }
    }, [Localdata, Staydata, Publicdata]);

    useEffect(() => {
        console.log(elementList);
    }, [elementList]);

    return (
        <PagesWrapper style={{ zoom: zoom + '%' }}>
            <Page>
                {elementList.map((value) => {
                    return ArrIntoJsx(value.preview(value.args));
                })}
            </Page>
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
