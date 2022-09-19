import { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';
import { Button, TextBox } from '@packages/ui';
import axios from 'axios';

const TestAccount = () => {
    const [account, setAccount] = useState({
        email: '',
        class_num: null,
        number: null,
        name: '',
        phone_number: '',
    });
    const [isCreated, setIsCreated] = useState(false);
    const [response, setResponse] = useState({
        email: '',
        password: '',
    });
    const onChangeAccountInfo = (e: ChangeEvent<HTMLInputElement>) => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value,
        });
    };
    const onClickCreateTestAccount = () => {
        axios
            .post('https://server.dsm-repo.com/students/beta', {
                ...account,
                class_num: Number(account.class_num),
                number: Number(account.number),
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
                        계정 정보를 다른곳에 적어놓으세요. 새로고침 시 정보가 날라갑니다.
                    </strong>
                    <h3>이메일 : {response.email}</h3>
                    <h3>비밀번호 : {response.password}</h3>
                </section>
            ) : (
                <>
                    <h1>테스트 계정을 발급합니다.</h1>
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
        margin-top: 100px;
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
export default TestAccount;
