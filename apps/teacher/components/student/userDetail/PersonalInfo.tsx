import styled from '@emotion/styled';
import { Tag } from '@packages/ui';

const PersonalInfo = () => {
    return (
        <_PersonalInfo>
            <ul>
                <_List>
                    <p>이름 : 김의찬</p>
                </_List>
                <_List>
                    <p>학번 : 2101</p>
                </_List>
                <_List>
                    <p>이메일 : Entry1020@dsm.hs.kr</p>
                </_List>
                <_List>
                    <p>전화번호 : 010-1234-5678</p>
                </_List>
                <_List>
                    <p>분야 : 프론트엔드</p>
                </_List>
            </ul>
            <_Tags>
                <Tag tagName="React" color="bdblue" />
            </_Tags>
        </_PersonalInfo>
    );
};
export default PersonalInfo;

const _PersonalInfo = styled.div`
    width: 335px;
    height: 350px;
    border-right: 2px solid ${({ theme }) => theme.color.gray300};
`;
const _List = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 18px;

    :before {
        content: '';
        float: left;
        width: 10px;
        height: 10px;
        background-color: ${({ theme }) => theme.color.main};
        margin-right: 10px;
        border-radius: 50%;
    }
    :last-child {
        margin-bottom: 0;
    }
    > p {
        font-size: 20px;
        line-height: 25px;
        color: ${({ theme }) => theme.color.black};
        font-weight: 500;
    }
`;
const _Tags = styled.ul`
    margin-top: 30px;
    > .tag {
        width: 73px;
        height: 36px;
        background-color: ${({ theme }) => theme.color.navy};
        border-radius: 100px;
    }
`;
