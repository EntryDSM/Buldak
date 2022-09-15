import styled from '@emotion/styled';
import ModalWrapper from '../modals/ModalWrapper';
import { Button, Profile } from '@packages/ui';
import { theme } from '@packages/emotion-style-provider/src/theme';
import { inputArray } from '../constant';
import useModal from '../../hooks/useModal';
import { useQuery } from 'react-query';
import { getCompanyDetail, resetCompanyPassword } from '../../api/teachers';
import ModalHeader from '../modals/ModalHeader';
import useCompany from '../../hooks/useCompany';
import { companyIcon } from '../../assets';
import { useEffect } from 'react';
import { queryKeys } from '../../utils/constant';

function CompanyInfo() {
    const { selectModal, selectedId } = useModal();
    const { onChangeFile, profilePreview, setCompanyInfo } = useCompany();
    // tood : 이거랑 editInfo에 있는 쿼리키를 같게 하면 작동을 안 해요 개버그임
    const { data } = useQuery([queryKeys.getCompanyDetail, selectedId], () =>
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
    useEffect(() => {
        data !== undefined && setCompanyInfo(data);
    }, [data]);
    return (
        <ModalWrapper>
            <_Wrapper>
                <ModalHeader title="기업 정보" />
                <_Body>
                    <_SideWrapper>
                        <_CompanyType>{data?.is_mou ? 'MOU' : 'NON_MOU'}</_CompanyType>
                        {profilePreview ? (
                            <img src={profilePreview} alt="preview" className="preview" />
                        ) : (
                            <Profile type="image" src={data?.profile_image_path || companyIcon} />
                        )}
                        <p>프로필 변경</p>
                        <input
                            type="file"
                            onChange={onChangeFile}
                            name="companyInfo"
                            id={data?.company_id}
                        />
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

const _SideWrapper = styled.label`
    width: 310px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 55px;
    > input[type='file'] {
        width: 0;
        height: 0;
    }
    > p {
        margin-top: 20px;
        border-bottom: 1px solid black;
        font-weight: 500;
        font-size: 20px;
        line-height: 25px;
        color: ${({ theme }) => theme.color.black};
    }
    > img {
        width: 90px;
        height: 90px;
        object-fit: contain;
        object-position: center;
        border-radius: 100px;
    }
    > .default {
        background-color: ${({ theme }) => theme.color.skyblue};
        border: 1px solid;
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
