import styled from '@emotion/styled';
import { Dispatch, SetStateAction } from 'react';

const TechnologyList = ['CSS', 'JAVA', 'ReactNative', 'React', 'GO', 'Vue'];

interface PropsType {
    SetOpenAddTagModal: Dispatch<SetStateAction<boolean>>;
    SetOpenRepresentativeModal: Dispatch<SetStateAction<boolean>>;
}

function Technology({ SetOpenAddTagModal, SetOpenRepresentativeModal }: PropsType) {
    return (
        <TechnologyBox>
            <ExplainBox>
                <Explain>기술스택</Explain>
                <PatchBtn
                    onClick={() => {
                        SetOpenAddTagModal(true);
                    }}>
                    수정
                </PatchBtn>
            </ExplainBox>
            <TechnologyListBox>
                {TechnologyList.map((Technology, index) => (
                    <TechnologyBtn key={index}>{Technology}</TechnologyBtn>
                ))}
            </TechnologyListBox>
            <ExplainBox>
                <Explain>대표분야</Explain>
                <PatchBtn onClick={() => SetOpenRepresentativeModal(true)}>수정</PatchBtn>
            </ExplainBox>
            <TechnologyListBox>
                <TechnologyBtn>프론트 엔드</TechnologyBtn>
            </TechnologyListBox>
        </TechnologyBox>
    );
}

const ExplainBox = styled.div`
    margin: 30px 0px 0px 30px;
`;

const Explain = styled.span`
    font-size: 23px;
    font-weight: bold;
`;

const PatchBtn = styled.button`
    width: 90px;
    height: 35px;
    border: 2px solid ${({ theme }) => theme.color.skyblue};
    background-color: ${({ theme }) => theme.color.white};
    font-weight: bold;
    font-size: 18px;
    color: ${({ theme }) => theme.color.main};
    cursor: pointer;
    text-align: center;
    border-radius: 5px;
    margin-left: 15px;
`;

const TechnologyBtn = styled.button`
    all: unset;
    border-radius: 100px;
    border: 1px solid ${({ theme }) => theme.color.skyblue};
    height: 36px;
    font-size: 18px;
    color: ${({ theme }) => theme.color.main};
    cursor: pointer;
    padding: 0px 25px 0px 25px;
    margin-left: 10px;
`;

const TechnologyListBox = styled.div`
    margin: 20px 0px 0px 20px;
`;

const TechnologyBox = styled.div`
    border: 3px solid ${({ theme }) => theme.color.point};
    width: 900px;
    height: 320px;
    margin-top: 50px;
    border-radius: 5px;
`;

export default Technology;
