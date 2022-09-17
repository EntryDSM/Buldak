import styled from '@emotion/styled';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { addFeedback } from '../../api/teachers';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { feedbackArrow } from '../../assets';

const FeedbackComment = () => {
    const router = useRouter();
    const { id } = router.query;
    const feedbackInput = useRef<HTMLTextAreaElement | null>(null);
    const [feedbackContent, setFeedbackContent] = useState('');
    const autoResizeTextBox = () => {
        if (feedbackInput.current) {
            feedbackInput.current.style.height = 'auto';
            const height = feedbackInput.current.scrollHeight;
            feedbackInput.current.style.height = `${height + 8}px`;
        }
    };
    const onChangeFeedbackContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setFeedbackContent(e.target.value);
    };
    const onSubmitFeedback = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addFeedback(id as string, {
            sequence: 0,
            comment: feedbackContent,
        });
    };
    return (
        <_Wrapper onSubmit={onSubmitFeedback}>
            <_Triangle />
            <Image src={feedbackArrow} />
            <_FeedbackBox
                onChange={onChangeFeedbackContent}
                ref={feedbackInput}
                value={feedbackContent}
                placeholder="피드백을 남겨주세요"
                onKeyDown={autoResizeTextBox}
                onKeyUp={autoResizeTextBox}
            />
        </_Wrapper>
    );
};
export default FeedbackComment;

const _Wrapper = styled.form`
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
