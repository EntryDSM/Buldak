import styled from '@emotion/styled';
import { Button } from '@packages/ui';
import { theme } from '@packages/emotion-style-provider/src/theme';

const FeedbackArea = () => {
    return (
        <_Wrapper>
            <_Title>피드백 남기기</_Title>
            <_TextField placeholder="피드백을 적어주세요." />
            <Button
                width={160}
                height={44}
                content="피드백 남기기"
                fontColor={theme.color.main}
                backgroundColor={theme.color.background}
            />
        </_Wrapper>
    );
};
export default FeedbackArea;

const _Wrapper = styled.section`
    position: fixed;
    width: 450px;
    height: 100%;
    z-index: 2;
    background-color: ${({ theme }) => theme.color.white};
    padding: 30px 50px;
    border-right: 2px solid ${({ theme }) => theme.color.gray300};

    > button {
        margin: 15px 0 0 auto;
    }
`;
const _Title = styled.h1`
    font-size: 23px;
    line-height: 29px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.black};
`;
const _TextField = styled.textarea`
    width: 100%;
    height: 356px;
    border: 2px solid ${({ theme }) => theme.color.gray500};
    border-radius: 4px;
    padding: 20px;
    resize: none;
    margin-top: 30px;
    font-size: 18px;
    line-height: 23px;
    color: ${({ theme }) => theme.color.black};
    ::placeholder {
        color: ${({ theme }) => theme.color.gray500};
    }
`;
