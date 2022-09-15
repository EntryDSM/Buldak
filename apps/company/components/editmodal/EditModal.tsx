<<<<<<< HEAD
import styled from '@emotion/styled';
import Image from 'next/image';
import { Frame, ExitButton } from '../../assets/editmodal';
import { Button, TextBox } from '../../../../packages/ui';
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
                            borderColor={theme.color.skyblue}
                            borderWidth={2}
                            content="정보 변경"
                            fontColor={theme.color.skyblue}
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
}

function Input({ title }: InputProps) {
    return (
        <InputWrapper>
            <h1>{title}</h1>
            <div className="temp">
                <TextBox
                    type="text"
                    width={380}
                    correct={true}
                    placeholder={title + '을(를) 입력해주세요'}
                />
            </div>
        </InputWrapper>
    );
}

export default EditModal;

const Background = styled.div`
    z-index: 6;
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Box = styled.div`
    z-index: 6;
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
    }
`;
=======
import styled from '@emotion/styled';
import Image from 'next/image';
import { Frame, ExitButton } from '../../assets/editmodal';
import { Button, TextBox } from '../../../../packages/ui';
import theme from '@packages/emotion-style-provider/src/theme';
import { onlineManager } from 'react-query';
import { changeImageToUrl } from '../../api/image';
import { ChangeEvent, useRef, useState } from 'react';
import { editCompanyInfo } from '../../api/edit';

interface Props {
    closeModal: () => void;
}

function EditModal({ closeModal }: Props) {
    const [prev, setPrev] = useState<string>('');
    const [phone, setPhone] = useState('');
    const [EditBuffer, setBuffer] = useState({
        company_name: '',
        location: '',
        profile_image_path: '',
        name: '',
        phone_number: '',
    });
    const onChangeImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const uploadFile = e.target.files[0];
            if (uploadFile) {
                alert(uploadFile.name + '파일이 선택되었습니다.');
                const formData = new FormData();
                formData.append('file', uploadFile);
                const url = changeImageToUrl(formData);
                setPrev((await url).image_path);
            }
        }
    };

    return (
        <Background>
            <Box>
                <Header />
                <div>
                    <Side>
                        <h1>정보 변경</h1>
                        <div id="wrapper-img">
                            {prev && <Imgs style={{ backgroundImage: `url(${prev})` }} />}
                            <input
                                type={'file'}
                                accept="image/*"
                                onChange={(e) => {
                                    onChangeImg(e);
                                }}
                            />
                            <BoxImg backgroundImg={!prev ? Frame : null} />
                            <p>프로필 사진 설정</p>
                        </div>
                    </Side>
                    <Body>
                        <Exit backgroundImg={ExitButton} onClick={() => closeModal()} />
                        <div id="wrapper-input">
                            <Inputs
                                onChange={(e) => {
                                    setBuffer({ ...EditBuffer, name: e.target.value });
                                }}
                                title={'담당자 이름'}
                            />
                            <Inputs
                                onChange={(e) => {
                                    const regex = /^[0-9\b -]{0,11}$/;
                                    if (regex.test(e.target.value)) {
                                        setBuffer({ ...EditBuffer, phone_number: e.target.value });
                                        setPhone(e.target.value);
                                    }
                                }}
                                value={phone}
                                title={'담당자 연락처'}
                            />
                            <Inputs
                                onChange={(e) => {
                                    setBuffer({ ...EditBuffer, company_name: e.target.value });
                                }}
                                title={'기업 이름'}
                            />
                            <Inputs
                                onChange={(e) => {
                                    setBuffer({ ...EditBuffer, location: e.target.value });
                                }}
                                title={'기업 주소'}
                            />
                        </div>
                        <Button
                            width={380}
                            height={46}
                            borderColor={theme.color.skyblue}
                            borderWidth={2}
                            content="정보 변경"
                            fontColor={theme.color.skyblue}
                            backgroundColor={theme.color.white}
                            onClick={() => {
                                editCompanyInfo({ ...EditBuffer, profile_image_path: prev });
                            }}
                        />
                    </Body>
                </div>
            </Box>
        </Background>
    );
}

interface InputProps {
    title: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

function Inputs({ title, onChange, value }: InputProps) {
    return (
        <InputWrapper>
            <h1>{title}</h1>
            <div className="temp">
                <TextBox
                    onChange={onChange}
                    type="text"
                    width={380}
                    correct={true}
                    value={value}
                    placeholder={title + '을(를) 입력해주세요'}
                />
            </div>
        </InputWrapper>
    );
}

export default EditModal;

const Background = styled.div`
    z-index: 6;
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Box = styled.div`
    z-index: 6;
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
        position: relative;
        > p {
            font-weight: 500;
            font-size: 18px;
            line-height: 23px;
            text-decoration: underline;
            margin-top: 20px;
        }
        > input {
            position: absolute;
            border: 1px solid black;
            width: 90px;
            height: 90px;
            opacity: 0;
        }
    }
`;

const Imgs = styled.div`
    position: absolute;
    width: 90px;
    height: 90px;
    border-radius: 100px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 100%;
`;

const BoxImg = styled.div<{ backgroundImg: StaticImageData | null }>`
    width: 90px;
    height: 90px;
    background-image: url(${(props) => props.backgroundImg?.src});
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
    }
`;
>>>>>>> e00e9c85974154ffb8db7f5caf1c1292b3c3e366
