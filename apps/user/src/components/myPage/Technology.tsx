import styled from '@emotion/styled';
import { Dispatch, SetStateAction } from 'react';
import { useResource } from '../../hook/useResource';
import { myInfomationResource } from '../../utils/api/userResouce';

const TechnologyList = ['CSS', 'JAVA', 'ReactNative', 'React', 'GO', 'Vue'];

interface PropsType {
    setOpenAddTagModal: Dispatch<SetStateAction<boolean>>;
    setOpenRepresentativeModal: Dispatch<SetStateAction<boolean>>;
}

function Technology({ setOpenAddTagModal, setOpenRepresentativeModal }: PropsType) {
    const { data: myInformaionData } = useResource(myInfomationResource);

    return (
        <_Wrapper>
            <_ExplainBox>
                <_Explain>기술스택</_Explain>
                <_PatchBtn
                    onClick={() => {
                        setOpenAddTagModal(true);
                    }}>
                    수정
                </_PatchBtn>
            </_ExplainBox>
            <_TechnologyListBox>
                {myInformaionData?.skill_tag_list.map((technology, index) => (
                    <_TechnologyBtn key={index}>{technology}</_TechnologyBtn>
                ))}
            </_TechnologyListBox>
            <_ExplainBox>
                <_Explain>대표분야</_Explain>
                <_PatchBtn onClick={() => setOpenRepresentativeModal(true)}>수정</_PatchBtn>
            </_ExplainBox>
            <_TechnologyListBox>
                <_TechnologyBtn>{myInformaionData?.major_tag}</_TechnologyBtn>
            </_TechnologyListBox>
        </_Wrapper>
    );
}

const _ExplainBox = styled.div`
    margin: 30px 0px 0px 30px;
`;

const _Explain = styled.span`
    font-size: 23px;
    font-weight: bold;
`;

const _PatchBtn = styled.button`
    width: 90px;
    height: 35px;
    border: 2px solid ${({ theme }) => theme.color.skyblue};
    background-color: ${({ theme }) => theme.color.white};
    font-weight: bold;
    font-size: 18px;
    color: ${({ theme }) => theme.color.main};
    text-align: center;
    border-radius: 5px;
    margin-left: 15px;
`;

const _TechnologyBtn = styled.button`
    border-radius: 100px;
    border: 1px solid ${({ theme }) => theme.color.skyblue};
    height: 36px;
    font-size: 18px;
    color: ${({ theme }) => theme.color.main};
    padding: 0px 25px;
    margin-left: 10px;
`;

const _TechnologyListBox = styled.div`
    margin: 20px 0px 0px 20px;
`;

const _Wrapper = styled.div`
    border: 3px solid ${({ theme }) => theme.color.point};
    width: 900px;
    height: 320px;
    border-radius: 5px;
`;

export default Technology;
