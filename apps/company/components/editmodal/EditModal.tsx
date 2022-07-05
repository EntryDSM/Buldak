import styled from '@emotion/styled';
import Image from 'next/image';
import { Frame, ExitButton } from '../../assets/editmodal';
import { Button } from '../../../../packages/ui';
import theme from '@packages/emotion-style-provider/src/theme';
import { onlineManager } from 'react-query';

const inputArr = ['담당자 이름', '담당자 연락처', '기업 이름', '기업 주소'];

interface Props {
    closeModal: () => void;
}

function EditModal({ closeModal }: Props) {
    return (
        <Background>
            <Box>
                <Header />
                <div>
                    <Side>
                        <h1>정보 변경</h1>
                        <div id="wrapper-img">
                            <BoxImg backgroundImg={Frame} />
                            <p>프로필 사진 설정</p>
                        </div>
                    </Side>
                    <Body>
                        <Exit backgroundImg={ExitButton} onClick={() => closeModal()} />
                        <div id="wrapper-input">
                            {inputArr.map((value) => (
                                <Input title={value} />
                            ))}
                        </div>
                        <Button
                            width={380}
                            height={46}
                            borderColor={theme.color.main}
                            content="정보 변경"
                            fontColor={theme.color.main}
                            backgroundColor={theme.color.white}
                        />
                    </Body>
                </div>
            </Box>
        </Background>
    );
}

interface InputProps {
    title?: string;
    placeholder?: string;
}

function Input({ title, placeholder }: InputProps) {
    return (
        <InputWrapper>
            <h1>{title}</h1>
            <div className="temp"></div>
        </InputWrapper>
    );
}

export default EditModal;

const Background = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Box = styled.div`
    width: 750px;
    height: 600px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 10px;
    position: absolute;
    display: flex;
    flex-direction: column;
    > div {
        display: flex;
        flex-direction: row;
    }
`;

const Header = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.color.gray500};
    width: 100%;
    height: 70px;
`;
const Side = styled.div`
    border-right: 1px solid ${({ theme }) => theme.color.gray300};
    width: 250px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    > h1 {
        position: absolute;
        top: 20px;
        left: 25px;
        font-weight: 700;
        font-size: 23px;
        line-height: 29px;
        color: ${({ theme }) => theme.color.gray700};
    }
    > #wrapper-img {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
        > p {
            font-weight: 500;
            font-size: 18px;
            line-height: 23px;
            text-decoration: underline;
            margin-top: 20px;
        }
    }
`;

const BoxImg = styled.div<{ backgroundImg: StaticImageData }>`
    width: 90px;
    height: 90px;
    background-image: url(${(props) => props.backgroundImg.src});
`;

const Body = styled.div`
    height: 100%;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    #wrapper-input {
        width: 380px;
        height: 365px;
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 60px;
    }
`;

const Exit = styled.div<{ backgroundImg: StaticImageData }>`
    width: 34px;
    height: 34px;
    position: absolute;
    top: 20px;
    right: 20px;
    background-image: url(${(props) => props.backgroundImg.src});
    cursor: pointer;
`;

const InputWrapper = styled.div`
    width: 380px;
    height: 76px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > h1 {
        font-weight: 500;
        font-size: 18px;
        line-height: 23px;
    }
    .temp {
        width: 380px;
        height: 44px;
        border: 1px solid black;
    }
`;
