import styled from '@emotion/styled';
import { useRef } from 'react';

const FeedbackComment = () => {
    const feedbackInput = useRef<HTMLTextAreaElement | null>(null);
    const autoResizeTextBox = () => {
        if (feedbackInput.current) {
            feedbackInput.current.style.height = 'auto';
            const height = feedbackInput.current.scrollHeight;
            feedbackInput.current.style.height = `${height + 8}px`;
        }
    };
    return (
        <_Wrapper>
            <_Triangle />
            <_ArrowIcon />
            <_FeedbackBox
                ref={feedbackInput}
                placeholder="피드백을 남겨주세요"
                onKeyDown={autoResizeTextBox}
                onKeyUp={autoResizeTextBox}
            />
        </_Wrapper>
    );
};
export default FeedbackComment;

const _Wrapper = styled.section`
    position: relative;
    width: 400px;
    min-height: 120px;
    padding: 15px 30px 15px 5px;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 5px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: auto;
`;
const _Triangle = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    border-bottom: 40px solid ${({ theme }) => theme.color.white};
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-radius: 1px;
    transform: rotate(-90deg);
    left: -20px;
`;
const _ArrowIcon = styled.div`
    width: 8px;
    height: 20px;
    background-color: ${({ theme }) => theme.color.gray500};
    z-index: 2;
`;
const _FeedbackBox = styled.textarea`
    resize: none;
    border: 2px solid ${({ theme }) => theme.color.gray700};
    border-radius: 5px;
    width: 340px;
    height: auto;
    min-height: 90px;
    margin-left: auto;
    padding: 10px;
    color: ${({ theme }) => theme.color.black};
    ::-webkit-scrollbar {
        display: none;
    }
    ::placeholder {
        color: ${({ theme }) => theme.color.gray700};
    }
`;
