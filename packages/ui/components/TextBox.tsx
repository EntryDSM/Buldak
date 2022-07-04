import styled from '@emotion/styled';
import Image from 'next/image';
import { FC, useState } from 'react';
import { searchIcon, nonEyeIcon, eyeIcon, errorIcon } from '../assets/textBox';

interface TextBoxProps {
    width: number;
    type: 'text' | 'password' | 'search';
    correct: boolean;
    placeholder?: string;
    name?: string;
    value?: string;
    disable?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
}

const TextBox: FC<TextBoxProps> = (props) => {
    const { type, placeholder, name, value, disable, onChange, onClick, correct } = props;
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

    return (
        <>
            {!correct && (
                <Error>
                    <Image src={errorIcon} width={20} height={20} />
                    <p>정보가 틀렸습니다.</p>
                </Error>
            )}
            <TextBoxWrapper {...props}>
                <Input
                    type={type === 'password' ? (isShowPassword ? 'text' : 'password') : 'text'}
                    inputType={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    disabled={disable}
                    onChange={onChange}
                />
                {type === 'search' && (
                    <SearchIcon>
                        <div />
                        <Image
                            src={searchIcon}
                            onClick={onClick}
                            width={18}
                            height={18}
                            className={'image'}
                        />
                    </SearchIcon>
                )}
                {type === 'password' && (
                    <Image
                        src={isShowPassword ? eyeIcon : nonEyeIcon}
                        width={22}
                        height={22}
                        className={'image'}
                        onClick={() => setIsShowPassword(!isShowPassword)}
                    />
                )}
            </TextBoxWrapper>
        </>
    );
};

const TextBoxWrapper = styled.div<TextBoxProps>`
    width: ${({ width }) => width}px;
    height: 38px;
    border: 2px solid ${({ theme, correct }) => (correct ? theme.color.gray700 : theme.color.error)};
    border-radius: 5px;
    padding: 0px 15px;
    display: flex;
    .image {
        cursor: pointer;
    }
`;

const Input = styled.input<{ inputType: string }>`
    width: ${({ inputType }) =>
        inputType === 'search'
            ? 'calc(100% - 34px)'
            : inputType === 'password'
            ? 'calc(100% - 22px)'
            : '100%'};
    height: 100%;
    font-size: 17px;
    ::placeholder {
        color: ${({ theme }) => theme.color.gray700};
    }
`;

const SearchIcon = styled.div`
    width: 34px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
        width: 1px;
        height: 16px;
        background-color: ${({ theme }) => theme.color.gray700};
    }
`;

const Error = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    > p {
        margin-left: 5px;
        font-size: 17px;
        color: ${({ theme }) => theme.color.error};
    }
`;

export default TextBox;
