import styled from '@emotion/styled';
import { Dispatch, SetStateAction } from 'react';
import AddPlusBtn from '../../assets/svgs/AddPlusBtn';
import EditerBanner from '../../assets/svgs/EditerBanner';
import EditerDoubleText from '../../assets/svgs/EditerDoubleText';
import EditerImage from '../../assets/svgs/EditerImage';
import EditerText from '../../assets/svgs/EditerText';
import MeatballMenu from '../../assets/svgs/MeatballsMenu';

const CompositionList = [
    {
        image: <EditerText />,
        text: '텍스트',
    },
    {
        image: <EditerDoubleText />,
        text: '2단 텍스트',
    },
    {
        image: <EditerImage />,
        text: '이미지',
    },
    {
        image: <EditerBanner />,
        text: '배너',
    },
];

interface PropsType {
    setElementDropDown: Dispatch<SetStateAction<boolean>>;
}

function AsideBar({ setElementDropDown }: PropsType) {
    return (
        <AsideBox>
            <ContentBox>
                <SiteComposition>
                    웹 사이트 구성
                    <span onClick={() => setElementDropDown(true)}>
                        <AddPlusBtn />
                    </span>
                </SiteComposition>

                {CompositionList.map((Composition, index) => (
                    <CompositionBox key={index}>
                        <CompositionContent>
                            <CompositionItem>
                                {Composition.image}
                                <span>{Composition.text}</span>
                            </CompositionItem>
                            <MeatBallBox>
                                <MeatballMenu />
                            </MeatBallBox>
                        </CompositionContent>
                    </CompositionBox>
                ))}
            </ContentBox>
        </AsideBox>
    );
}

const MeatBallBox = styled.div`
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    :hover {
        background-color: ${({ theme }) => theme.color.gray500};
    }
`;

const CompositionItem = styled.div`
    display: flex;
    align-items: center;
    width: 170px;
    > span {
        margin-left: 10px;
    }
`;

const CompositionContent = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
`;

const ContentBox = styled.div`
    width: 250px;
`;

const CompositionBox = styled.div`
    width: 250px;
    height: 45px;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid ${({ theme }) => theme.color.gray300};
    > span {
        margin-left: 10px;
    }
    :hover {
        background-color: ${({ theme }) => theme.color.gray300};
    }
`;

const SiteComposition = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
    justify-content: space-between;
    height: 70px;
    > span {
        font-size: 20px;
    }
`;

const AsideBox = styled.aside`
    display: flex;
    justify-content: center;
    position: sticky;
    left: 0;
    bottom: 0;
    width: 350px;
    height: 100vh;
    overflow: auto;
`;

export default AsideBar;
