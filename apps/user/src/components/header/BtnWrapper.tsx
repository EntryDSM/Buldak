import styled from '@emotion/styled';
import { JsxIntoArr } from '@packages/preview/functions/jsxIntoArr';
import { useMutation } from 'react-query';
import { useRecoilState } from 'recoil';
import ElementListState from '../../recoil/ElementListState';
import {
    documentPublicRequest,
    documentLocalDelete,
    documentLocalPatch,
} from '../../utils/api/userDocument';

function BtnWrapper({ id }: { id: string }) {
    const [elementList, setElementList] = useRecoilState(ElementListState);

    const { mutate } = useMutation(['publicReq'], () =>
        documentPublicRequest(
            id,
            'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.30497-1/…NVfooP2tTylP3mPo-577e9Cl7fT_cB7BQ0KOg&oe=634CFC78',
            JSON.stringify(
                elementList.map((element) => {
                    console.log('element', element);
                    return JsxIntoArr(element);
                }),
            ),
        ),
    );

    const localDeleteMutate = useMutation(['localDelete'], () => documentLocalDelete(id));

    const localPatch = useMutation(['localPatch'], () => {
        return documentLocalPatch(
            id,
            'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.30497-1/…NVfooP2tTylP3mPo-577e9Cl7fT_cB7BQ0KOg&oe=634CFC78',
            JSON.stringify(
                elementList.map((element) => {
                    console.log(element);
                    const data = element.args;
                    const temp = {
                        color: data.color,
                        grade: data.grade,
                        isTeacher: false,
                        feedback: element,
                    };
                    return {
                        id: element.id,
                        args: element.preview(element.args),
                    };
                }),
            ),
        );
    });

    return (
        <_BtnWrapper>
            <_DeleteBtn onClick={() => localDeleteMutate.mutate()}>삭제하기</_DeleteBtn>
            <_TemporaryBtn onClick={() => localPatch.mutate()}>임시저장</_TemporaryBtn>
            <_OpenBtn onClick={() => mutate()}>공개요청</_OpenBtn>
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
