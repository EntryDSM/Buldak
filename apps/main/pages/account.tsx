import { ChangeEvent, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Button, TextBox } from '@packages/ui';
import axios from 'axios';
import Link from 'next/link';
import { DropDown } from '@packages/ui';
import { useQuery } from 'react-query';

interface TagListType {
    tag_list: {
        tag_id: string;
        name: string;
    }[];
}

const Account = () => {
    const [account, setAccount] = useState({
        email: '',
        class_num: null,
        number: null,
        name: '',
        phone_number: '',
        grade: '',
        location: '',
    });
    const [isCreated, setIsCreated] = useState(false);
    const [response, setResponse] = useState({
        email: '',
        password: '',
    });
    const [tagList, setTagList] = useState<TagListType['tag_list']>([]);
    const [selectTag, setSelectTag] = useState<undefined | string>('');
    const onChangeAccountInfo = (e: ChangeEvent<HTMLInputElement>) => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value,
        });
    };

    const tagListSearch = async () => {
        const tagListUrl = 'https://server.dsm-repo.com/tags?name=&isMajor=true';
        const tagListData = (await axios.get<TagListType>(tagListUrl)).data.tag_list;
        setTagList(tagListData);
    };

    useEffect(() => {
        tagListSearch();
    }, []);

    const onClickCreateTestAccount = () => {
        axios
            .post('https://server.dsm-repo.com/students/account', {
                ...account,
                class_num: Number(account.class_num),
                number: Number(account.number),
                grade: Number(account.grade),
                tag_id: selectTag,
            })
            .then((res) => {
                setResponse(res.data);
                setIsCreated(true);
            })
            .catch((err) => {
                if (err.response.status === 409) alert('이미 존재하는 이메일 입니다');
                else alert('입력한 값을 확인하세요.');
            });
    };
    return (
        <_Wrapper>
            {isCreated ? (
                <section>
                    <h1>발급된 계정</h1>
                    <strong>
                        계정 정보를 다른곳에 적어놓으세요. 새로고침 시 정보가 날아갑니다.
                    </strong>
                    <h3>이메일 : {response.email}</h3>
                    <h3>비밀번호 : {response.password}</h3>
                    <Link href="/select-page">
                        <Button
                            width={300}
                            height={38}
                            content="로그인하러 가기"
                            borderWidth={1}
                            borderColor="#e0e0e0"
                        />
                    </Link>
                </section>
            ) : (
                <>
                    <h1>계정을 발급합니다.</h1>
                    <TextBox
                        width={400}
                        type={'text'}
                        correct={true}
                        placeholder="이메일"
                        name="email"
                        onChange={onChangeAccountInfo}
                        value={account.email}
                    />
                    <TextBox
                        width={400}
                        type={'text'}
                        correct={true}
                        placeholder="이름"
                        name="name"
                        onChange={onChangeAccountInfo}
                        value={account.name}
                    />
                    <TextBox
                        width={400}
                        type={'text'}
                        correct={true}
                        placeholder="전화번호"
                        name="phone_number"
                        onChange={onChangeAccountInfo}
                        value={account.phone_number}
                    />
                    <_NumberInput
                        placeholder="학년"
                        type="number"
                        name="grade"
                        onChange={onChangeAccountInfo}
                        value={account.grade || ''}
                    />
                    <_NumberInput
                        placeholder="반"
                        type="number"
                        name="class_num"
                        onChange={onChangeAccountInfo}
                        value={account.class_num || ''}
                    />
                    <_NumberInput
                        placeholder="번호"
                        type={'number'}
                        name="number"
                        onChange={onChangeAccountInfo}
                        value={account.number || ''}
                    />

                    <_NumberInput
                        placeholder="주소"
                        name="location"
                        onChange={onChangeAccountInfo}
                        value={account.location || ''}
                    />
                    <DropDown
                        width={400}
                        items={tagList.map((i) => i.name)}
                        placeholder="전공 분야를 입력해주세요."
                        onChange={(value) => {
                            const selectTag = tagList.find((i) => i.name === value);
                            setSelectTag(selectTag?.tag_id);
                        }}
                    />
                    <Button
                        width={400}
                        height={38}
                        content="계정 발급"
                        borderWidth={2}
                        borderColor={'black'}
                        onClick={onClickCreateTestAccount}
                    />
                </>
            )}
        </_Wrapper>
    );
};

const _Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > h1 {
        margin-top: 200px;
    }
    > div {
        margin-top: 20px;
    }
    > button {
        margin-top: 20px;
    }
    > section {
        margin-top: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
`;
const _NumberInput = styled.input`
    width: 400px;
    height: 38px;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.color.gray700};
    margin-top: 20px;
    font-size: 17px;
    padding: 0 15px;
    ::placeholder {
        color: ${({ theme }) => theme.color.gray700};
    }
`;
export default Account;
