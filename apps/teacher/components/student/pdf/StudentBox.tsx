import styled from '@emotion/styled';
import Profile from '@packages/ui/components/Profile';

export interface pdfStudentListProps {
    public_id: string;
    name: string;
    gcn: number;
    profile_image_path: string;
    isSelected: boolean;
}

interface Props {
    item: pdfStudentListProps;
}

const StudentBox = ({ item }: Props) => {
    return (
        <_Wrapper key={item.public_id}>
            <Profile type="image" src={item.profile_image_path} />
            <_Name>{item.name}</_Name>
            <_StudentNumber>{item.gcn}</_StudentNumber>
            {!item.isSelected ? <_PlusButton>+</_PlusButton> : <_MinusButton>-</_MinusButton>}
        </_Wrapper>
    );
};
export default StudentBox;

const _Wrapper = styled.li`
    width: 100%;
    height: 56px;
    padding: 8px 20px;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    border-bottom: 1px solid ${({ theme }) => theme.color.gay300};
`;
const _Name = styled.strong`
    font-size: 19px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.black};
    font-weight: 500;
    margin-left: 10px;
`;
const _StudentNumber = styled.em`
    font-size: 17px;
    line-height: 21px;
    color: ${({ theme }) => theme.color.gray700};
    font-weight: 500;
    margin-left: 10px;
`;
const _PlusButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.main};
    margin-left: auto;
`;
const _MinusButton = styled(_PlusButton)``;
