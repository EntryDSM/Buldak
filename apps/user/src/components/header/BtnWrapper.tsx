import styled from '@emotion/styled';
import { useMutation, useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import ElementListState from '../../recoil/ElementListState';
import { publicRequest } from '../../utils/api/userDocument';

function BtnWrapper() {
    const [elementList, setElementList] = useRecoilState(ElementListState);

    const { mutate } = useMutation(['publicReq'], () =>
        publicRequest(
            '811fb1d7-8f43-4895-bf62-ceb17a1bb51f',
            'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.30497-1/…NVfooP2tTylP3mPo-577e9Cl7fT_cB7BQ0KOg&oe=634CFC78',
            JSON.stringify(
                elementList.map((element) => {
                    return {
                        id: element.id,
                        args: element.preview(element.args),
                    };
                }),
            ),
        ),
    );
    return (
        <_BtnWrapper>
            <_DeleteBtn>삭제하기</_DeleteBtn>
            <_TemporaryBtn>임시저장</_TemporaryBtn>
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
