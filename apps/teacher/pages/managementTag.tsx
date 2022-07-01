import styled from '@emotion/styled';
import SideBar from '../components/SideBar';
import TagList from '../components/tag';

const ManagementTag = () => {
    return (
        <_Wrapper>
            <SideBar managementType="tag" />
            <TagList />
        </_Wrapper>
    );
};
export default ManagementTag;

const _Wrapper = styled.section`
    display: flex;
`;
