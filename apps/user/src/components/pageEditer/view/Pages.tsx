import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { ArrIntoJsx } from '@packages/preview/functions/arrIntoJsx';
import { JsxIntoArr } from '../../../utils/function/jsxIntoArr';
import { ElementListState } from '../../../recoil/ElementListState';
import {
    documentLocalPatch,
    documentLocalQuery,
    documentPublicQuery,
    documentStayQuery,
} from '../../../utils/api/userDocument';
import useDebounce from '../../../hook/useDebounce';
import { toastHandler } from '../../../utils/toast';
import { ErrorType } from '../../header/BtnWrapper';

interface PagesProps {
    zoom: number;
}

function Pages({ zoom = 100 }: PagesProps) {
    const router = useRouter();
    const documentId = router.query.id as string;
    const [elementList, setElementList] = useRecoilState(ElementListState);
    const { debounce } = useDebounce();
    const defpreview =
        'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.30497-1/…NVfooP2tTylP3mPo-577e9Cl7fT_cB7BQ0KOg&oe=634CFC78';
    const localPatch = useMutation(
        ['localPatch'],
        () => {
            return documentLocalPatch(
                documentId,
                defpreview,
                JSON.stringify(
                    elementList.map((element) => {
                        return {
                            id: element.id,
                            args: element.preview(element.args),
                        };
                    }),
                ),
            );
        },
        {
            onSuccess: () => {
                toastHandler('SUCCESS', '성공적으로 임시저장하였습니다.');
            },
            onError: (error: ErrorType) => {
                console.log(error);
                if (error.message === 'Network Error') {
                    toastHandler('ERROR', '인터넷 상태를 확인해 주세요.');
                } else if (error?.response.status === 401) {
                    toastHandler('ERROR', '다시 로그인 해주세요.');
                } else if (error.response.status === 403) {
                    toastHandler('ERROR', '권한이 없습니다.');
                } else {
                    toastHandler('ERROR');
                }
            },
        },
    );
    useEffect(() => {
        debounce(() => {
            localPatch.mutate();
        }, 3000);
    }, [elementList]);
    const { data: Localdata } = useQuery(['queryDocument'], () => documentLocalQuery(documentId));
    const { data: Staydata } = useQuery(['stayDocument'], () => documentStayQuery(documentId));
    const { data: Publicdata } = useQuery(['publicDocument'], () =>
        documentPublicQuery(documentId),
    );
    useEffect(() => {
        if (Localdata) {
            setElementList(
                JSON.parse(Localdata.data.content).map((content: any) => JsxIntoArr(content)),
            );
        } else if (router.query.stay && Staydata) {
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
    }
`;
