import styled from '@emotion/styled';
import StudentBox, { pdfStudentListProps } from './StudentBox';

interface Props {
    isAddList: boolean;
}

interface studentList {
    public_id: string;
    name: string;
    gcn: number;
    profile_image_path: string;
    feedback_status: boolean;
    public_status: boolean;
    is_submitted: boolean;
}

const dummyData: studentList[] = [
    {
        public_id: '550e8400-e29b-41d4-a716-446655440000',
        name: '정대현',
        gcn: 1406,
        profile_image_path: 'https://~~~~~~~~~~~',
        feedback_status: true,
        public_status: false,
        is_submitted: true,
    },
    {
        public_id: '550e8400-e29b-41d4-a716-446655440000',
        name: '정대현',
        gcn: 1406,
        profile_image_path: 'https://~~~~~~~~~~~',
        feedback_status: true,
        public_status: false,
        is_submitted: true,
    },
    {
        public_id: '550e8400-e29b-41d4-a716-446655440000',
        name: '정대현',
        gcn: 1406,
        profile_image_path: '',
        feedback_status: true,
        public_status: false,
        is_submitted: true,
    },
];

const StudentList = ({ isAddList }: Props) => {
    return (
        <_Wrapper>
            {isAddList ? (
                <_IsEmpty>
                    <em className="empty">학생을 추가해주세요</em>
                </_IsEmpty>
            ) : (
                dummyData.map((item) => {
                    const newItem = {
                        name: item.name,
                        gcn: item.gcn,
                        profile_image_path: item.profile_image_path,
                        public_id: item.public_id,
                        isSelected: false,
                    } as pdfStudentListProps;
                    return <StudentBox item={newItem} />;
                })
            )}
        </_Wrapper>
    );
};
export default StudentList;

const _Wrapper = styled.ul`
    width: 410px;
    height: 430px;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.color.gay300};
    display: flex;
    flex-direction: column;
`;
const _IsEmpty = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    > .empty {
        font-size: 17px;
        line-height: 21px;
        color: ${({ theme }) => theme.color.gray700};
        font-weight: 500;
    }
`;
