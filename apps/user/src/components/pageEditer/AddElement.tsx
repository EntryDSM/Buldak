import styled from '@emotion/styled';
import { Dispatch, SetStateAction } from 'react';
import AddElementBanner from '../../assets/svgs/AddElementBanner';
import AddElementBlank from '../../assets/svgs/AddElementBlank';
import AddElementBtn from '../../assets/svgs/AddElementBtn';
import AddElementDefault from '../../assets/svgs/AddElementDefault';
import AddElementImage from '../../assets/svgs/AddElementImage';
import AddElementImageText from '../../assets/svgs/AddElementImageText';
import AddElementLine from '../../assets/svgs/AddElementLine';
import AddElementList from '../../assets/svgs/AddElementList';
import AddElementProject from '../../assets/svgs/AddElementProject';
import AddElementTextImage from '../../assets/svgs/AddElementTextImage';
import Close from '../../assets/svgs/Close';

const ElementList = [
    {
        image: <AddElementBanner />,
        text: '텍스트',
    },
    {
        image: <AddElementBtn />,
        text: '2단 텍스트',
    },
    {
        image: <AddElementBlank />,
        text: '버튼',
    },
    {
        image: <AddElementImage />,
        text: '이미지',
    },
    {
        image: <AddElementBanner />,
        text: '배너',
    },
    {
        image: <AddElementLine />,
        text: '구분선',
    },
    {
        image: <AddElementDefault />,
        text: '기본 프로필',
    },
    {
        image: <AddElementProject />,
        text: '프로젝트',
    },
    {
        image: <AddElementBlank />,
        text: '여백',
    },
    {
        image: <AddElementTextImage />,
        text: '텍스트 + 이미지',
    },
    {
        image: <AddElementImageText />,
        text: '이미지 + 텍스트',
    },
    {
        image: <AddElementList />,
        text: '리스트',
    },
];

interface PropsType {
    setElementDropDown: Dispatch<SetStateAction<boolean>>;
}

function AddElement({ setElementDropDown }: PropsType) {
    return (
        <Background onClick={() => setElementDropDown(false)}>
            <AddElementBox onClick={(e) => e.stopPropagation()}>
                <div>
                    <AddElementExplain>
                        <span>요소추가</span>
                        <span onClick={() => setElementDropDown(false)}>
                            <Close />
                        </span>
                    </AddElementExplain>
                    <ElementListBox>
                        {ElementList.map((Element, index) => (
                            <AddElementListItem key={index}>
                                {Element.image}
                                <span>{Element.text}</span>
                            </AddElementListItem>
                        ))}
                    </ElementListBox>
                </div>
            </AddElementBox>
        </Background>
    );
}

const ElementListBox = styled.div`
    height: 310px;
    overflow-y: auto;
    -ms-overflow-style: none;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const AddElementListItem = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    width: 260px;
    > span {
        margin-left: 10px;
    }
    :hover {
        background-color: ${({ theme }) => theme.color.gray300};
    }
`;

const Background = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

const AddElementBox = styled.div`
    position: fixed;
    top: 140px;
    left: 240px;
    display: flex;
    justify-content: center;
    width: 340px;
    height: 370px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 8px;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.15);
`;

const AddElementExplain = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 35px;
    font-weight: bold;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray300};
`;

export default AddElement;
