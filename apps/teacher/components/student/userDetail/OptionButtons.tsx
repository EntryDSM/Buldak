import styled from '@emotion/styled';
import { Button } from '@packages/ui';

const OptionButtons = () => {
    return (
        <_Wrapper>
            <Button
                width={180}
                height={44}
                borderColor="#E03131"
                fontColor="#E03131"
                content="학생 탈퇴"
            />
            <Button
                width={180}
                height={44}
                borderColor="#E03131"
                fontColor="#E03131"
                content="공개 문서 삭제"
            />
        </_Wrapper>
    );
};
export default OptionButtons;

const _Wrapper = styled.section`
    width: 250px;
    padding-left: 35px;
    > button {
        margin-bottom: 20px;
        :last-child {
            margin-bottom: 0;
        }
    }
`;
