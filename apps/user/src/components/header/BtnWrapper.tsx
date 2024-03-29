import styled from '@emotion/styled';
import { JsxIntoArr } from '../../utils/function/jsxIntoArr';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useRecoilState } from 'recoil';
import ElementListState from '../../recoil/ElementListState';
import {
    documentPublicRequest,
    documentLocalDelete,
    documentLocalPatch,
    documentStayPatch,
    documentStayCancel,
} from '../../utils/api/userDocument';
import { toastHandler } from '../../utils/toast';
import { AxiosResponse } from 'axios';

export interface ErrorType {
    code: string;
    config: any;
    message: string;
    name: string;
    request: any;
    response: AxiosResponse;
}

function BtnWrapper({ id }: { id: string }) {
    const [elementList, setElementList] = useRecoilState(ElementListState);
    const router = useRouter();
    const defpreview =
        'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.30497-1/…NVfooP2tTylP3mPo-577e9Cl7fT_cB7BQ0KOg&oe=634CFC78';

    const PublicReq = useMutation(['publicReq'], () =>
        documentPublicRequest(
            id,
            defpreview,
            JSON.stringify(
                elementList.map((element) => {
                    return JsxIntoArr(element);
                }),
            ),
        ),
    );

    const localDeleteMutate = useMutation(['localDelete'], () => documentLocalDelete(id));

    const localPatch = useMutation(
        ['localPatch'],
        () => {
            return documentLocalPatch(
                id,
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

    const stayPatch = useMutation(
        ['stayPatch'],
        () => {
            return documentStayPatch(
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

    const stayCancel = useMutation(['stayCancel'], () => documentStayCancel(id));

    const DeleteDoc = () => {
        if (!router.query.stay) {
            if (confirm('문서를 삭제하시겠습니까?')) {
                localDeleteMutate.mutate();
                alert('삭제되었습니다.');
                router.push('/');
            }
        } else {
            if (confirm('문서 공개 요청을 취소하시겠습니까?')) {
                stayCancel.mutate();
                alert('취소되었습니다.');
                router.push('/');
            }
        }
    };
    const SaveDoc = () => {
        if (router.query.stay) {
            stayPatch.mutate();
        } else {
            localPatch.mutate();
        }
    };
    const PubDoc = async () => {
        PublicReq.mutate();
    };

    useEffect(() => {
        if (PublicReq.isError) {
            alert('대기 문서가 이미 하나 이상 존재하거나 요청이 잘못되었습니다.');
        } else if (PublicReq.data) {
            alert('대기문서로 전환되었습니다.');
            router.push('/');
        }
    }, [PublicReq.error, PublicReq.data]);
    return (
        <_BtnWrapper>
            {router.query.stay && (
                <>
                    <div style={{ width: 120 + 'px' }} />
                    <_DeleteBtn onClick={() => DeleteDoc()}>요청취소</_DeleteBtn>
                    <_TemporaryBtn onClick={SaveDoc}>임시저장</_TemporaryBtn>
                </>
            )}
            {router.query.public && <></>}
            {!router.query.stay && !router.query.public && (
                <>
                    <_DeleteBtn onClick={() => DeleteDoc()}>삭제하기</_DeleteBtn>
                    <_TemporaryBtn onClick={SaveDoc}>임시저장</_TemporaryBtn>
                    <_OpenBtn onClick={PubDoc}>공개요청</_OpenBtn>
                </>
            )}
        </_BtnWrapper>
    );
}

const _BtnWrapper = styled.div`
    width: 400px;
    display: flex;
    justify-content: space-between;
`;

const _DeleteBtn = styled.button`
    width: 120px;
    height: 40px;
    font-weight: bold;
    font-size: 16px;
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.color.gray700};
    color: ${({ theme }) => theme.color.error};
`;

const _TemporaryBtn = styled.button`
    width: 120px;
    height: 40px;
    font-weight: bold;
    font-size: 16px;
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.color.gray700};
`;

const _OpenBtn = styled.button`
    width: 120px;
    height: 40px;
    font-size: 16px;
    border-radius: 3px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.skyblue};
    border: 1px solid ${({ theme }) => theme.color.gray700};
`;

export default BtnWrapper;
