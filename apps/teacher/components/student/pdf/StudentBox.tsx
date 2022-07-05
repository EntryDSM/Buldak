import styled from '@emotion/styled';
import Profile from '@packages/ui/components/Profile';

interface PdfStudentListProps {
    public_id: string;
    name: string;
    gcn: number;
    profile_image_path: string;
    isSelected: boolean;
}

interface Props {
    item: PdfStudentListProps;
}

const StudentBox = ({ item }: Props) => {
    return (
        <_Wrapper key={item.public_id}>
            <Profile type="image" src={item.profile_image_path} width="40px" height="40px" />
            <_Name>{item.name}</_Name>
            <_StudentNumber>{item.gcn}</_StudentNumber>
            {!item.isSelected ? (
                <_ChangeStatusButton>+</_ChangeStatusButton>
            ) : (
                <_ChangeStatusButton>-</_ChangeStatusButton>
            )}
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
    border-bottom: 1px solid ${({ theme }) => theme.color.gray300};
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
const _ChangeStatusButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.main};
    margin-left: auto;
`;
