import styled from '@emotion/styled';
import ModalWrapper from '../ModalWrapper';
import { Button, Profile } from '@packages/ui';
import { theme } from '@packages/emotion-style-provider/src/theme';
import { inputArray } from '../constant';
import useModal from '../../hooks/useModal';
import { useQuery } from 'react-query';
import { getCompanyDetail, resetCompanyPassword } from '../../api/teachers';
import Image from 'next/image';
import { closeIcon } from '../../assets';

function CompanyInfo() {
    const { closeModal, selectModal, selectedId } = useModal();
    const { data } = useQuery(['getCompanyDetail', selectedId], () =>
        getCompanyDetail(selectedId || ''),
    );
    const onClickResetPassword = () => {
        resetCompanyPassword(selectedId || '').then((res) => {
            console.log(res);
            selectModal({
                modal: 'RESET_SUCCESS',
                password: res.password,
            });
        });
    };
    return (
        <ModalWrapper closeModal={closeModal}>
            <_Wrapper>
                <_Header>
                    <p>기업 정보</p>
                    <button onClick={closeModal}>
                        <Image src={closeIcon} alt="닫기" />
                    </button>
                </_Header>
                <_Body>
                    <_SideWrapper>
                        <_CompanyType>{data?.is_mou ? 'MOU' : 'NON_MOU'}</_CompanyType>
                        <Profile type="image" src={data?.profile_image_path} />
                        <p>프로필 이미지</p>
                    </_SideWrapper>
                    <_InputsWrapper>
                        {inputArray.map(
                            (item) =>
                                data !== undefined && (
                                    <_InputWrapper key={item.name}>
                                        <p>{item.title}</p>
                                        <div>{data[item.name]}</div>
                                    </_InputWrapper>
                                ),
                        )}
                        <_ButtonsWrapper>
                            <Button
                                width={200}
                                height={44}
                                content="비밀번호 초기화"
                                borderWidth={2}
                                borderColor={theme.color.skyblue}
                                fontColor={theme.color.skyblue}
                                onClick={onClickResetPassword}
                            />
                            <Button
                                width={200}
                                height={44}
                                content="정보 변경"
                                borderWidth={2}
                                borderColor={theme.color.skyblue}
                                fontColor={theme.color.skyblue}
                                onClick={() =>
                                    selectModal({ modal: 'PATCH_COMPANY_DETAIL', id: selectedId })
                                }
                            />
                        </_ButtonsWrapper>
                    </_InputsWrapper>
                </_Body>
            </_Wrapper>
        </ModalWrapper>
    );
}

export default CompanyInfo;

const _Wrapper = styled.div`
    background: ${({ theme }) => theme.color.white};
    border-radius: 8px;
    width: 900px;
    height: 550px;
    display: flex;
    flex-direction: column;
`;

const _Header = styled.div`
    width: 100%;
    height: 68px;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray500};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    > p {
        font-weight: 500;
        font-size: 22px;
        line-height: 28px;
        color: ${({ theme }) => theme.color.gray700};
    }
    > #exit {
        width: 34px;
        height: 34px;
        border: 1px solid black;
    }
`;

const _InputWrapper = styled.div`
    width: 510px;
    height: 40px;
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
    > p {
        font-weight: 400;
        font-size: 22px;
        line-height: 28px;
        color: ${({ theme }) => theme.color.gray900};
    }
    > div {
        margin-left: auto;
        width: 300px;
        height: 40px;
        padding: 10px;
        border-bottom: 1px solid ${({ theme }) => theme.color.black};
    }
`;

const _Body = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 480px;
`;

const _SideWrapper = styled.div`
    width: 310px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 55px;
    > p {
        margin-top: 20px;

        font-weight: 500;
        font-size: 20px;
        line-height: 25px;
        color: ${({ theme }) => theme.color.black};
    }
`;
const _CompanyType = styled.strong`
    font-size: 20px;
    color: ${({ theme }) => theme.color.main};
    font-weight: bold;
    margin-bottom: 9px;
`;
const _InputsWrapper = styled.div`
    width: 510px;
    height: 404px;
    margin-top: 26px;
    display: flex;
    flex-direction: column;
`;
const _ButtonsWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    gap: 20px;
    margin-left: auto;
`;
