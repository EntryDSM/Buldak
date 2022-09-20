import styled from '@emotion/styled';
import { Button } from '@packages/ui';
import { theme } from '@packages/emotion-style-provider/src/theme';
import { approveDocument, rejectDocument } from '../../api/documents';
import { toastHandler } from '../../utils/toast';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { pages } from '../../utils/constant';

interface Props {
    id: string;
}

const Header = ({ id }: Props) => {
    const router = useRouter();
    const onClickReject = () => {
        rejectDocument(id)
            .then(() => {
                toastHandler('SUCCESS', '문서가 반환되었습니다.');
            })
            .catch((err: AxiosError) => {
                if (err.response?.status === 404) {
                    toastHandler('ERROR', '문서가 존재하지 않습니다.');
                    router.push(pages.manageStudent);
                } else toastHandler('ERROR');
            });
    };
    const onClickApprove = () => {
        approveDocument(id)
            .then(() => {
                toastHandler('SUCCESS', '공개요청이 승인되었습니다.');
            })
            .catch((err: AxiosError) => {
                if (err.response?.status === 404) {
                    toastHandler('ERROR', '문서가 존재하지 않습니다.');
                    router.push(pages.manageStudent);
                } else toastHandler('ERROR');
            });
    };
    return (
        <_Wrapper>
            <_ButtonsWrapper>
                <Button
                    width={120}
                    height={40}
                    content="반환하기"
                    fontColor={theme.color.error}
                    borderColor={theme.color.gray500}
                    onClick={onClickReject}
                />
                <Button
                    width={120}
                    height={40}
                    fontColor={theme.color.white}
                    backgroundColor={theme.color.skyblue}
                    content="공개승인"
                    onClick={onClickApprove}
                />
            </_ButtonsWrapper>
        </_Wrapper>
    );
};
export default Header;

const _Wrapper = styled.header`
    width: 100%;
    height: 70px;
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    align-items: center;
    padding-right: 80px;
`;
const _ButtonsWrapper = styled.div`
    margin-left: auto;
    display: flex;
    gap: 25px;
`;
