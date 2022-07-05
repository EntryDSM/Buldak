import styled from '@emotion/styled';
import Image from 'next/image';
import ImgFrame from '../../assets/editmodal/Frame.jpg';
import ExitButton from '../../assets/editmodal/Exit.png';

interface Props {}

function EditModal({}: Props) {
    return (
        <Background>
            <Box>
                <Side>
                    <h1>정보 변경</h1>
                    <div id="wrapper-img">
                        <BoxImg backgroundImg={ImgFrame} />
                        <p>프로필 사진 설정</p>
                    </div>
                </Side>
                <Body>
                    <Exit backgroundImg={ExitButton} />
                    <div id="wrapper-input">
                        <Input title="담당자 이름" />
                        <Input title="1" />
                        <Input title="1" />
                        <Input title="1" />
                    </div>
                    <div id="temp"></div>
                </Body>
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
    flex-direction: row;
`;
const Side = styled.div`
    border-right: 1px solid ${({ theme }) => theme.color.gray300};
    width: 250px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > h1 {
        position: absolute;
        top: 25px;
        left: 30px;
        font-weight: 700;
        font-size: 23px;
        line-height: 29px;
    }
    > #wrapper-img {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
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
        margin-top: 65px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    #temp {
        width: 380px;
        height: 46px;
        border: 1px solid black;
        margin-top: 80px;
    }
`;

const Exit = styled.div<{ backgroundImg: StaticImageData }>`
    width: 34px;
    height: 34px;
    position: absolute;
    top: 20px;
    right: 20px;
    background-image: url(${(props) => props.backgroundImg.src});
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
