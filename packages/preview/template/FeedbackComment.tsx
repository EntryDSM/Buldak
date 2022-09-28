import styled from '@emotion/styled';
import { ChangeEvent, FormEvent, useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { feedbackArrow, Icon_NewFeed, Icon_ReadFeed } from '../assets';
import { instance } from '../api/instance';

interface FeedProps {
    isRead?: boolean;
    feedInfo?: string;
    isSelected: boolean;
    sequence?: number;
}

const FeedbackComment = ({ isRead, feedInfo = '', isSelected, sequence = 0 }: FeedProps) => {
    interface AddFeedbackRequest {
        sequence: number;
        comment: string;
    }
    const addFeedback = async (student_id: string, body: AddFeedbackRequest) => {
        try {
            await instance.post(`/teachers/feedback/${student_id}`, body);
        } catch (err) {
            throw err;
        }
    };
    const [isApplyFeed, setIsApply] = useState(isRead);
    const [feedOpen, setFeedOpen] = useState(false);
    const [feedbackContent, setFeedbackContent] = useState(feedInfo);
    const feedbackInput = useRef<HTMLTextAreaElement | null>(null);
    useEffect(() => {
        setFeedOpen(isSelected);
    }, [isSelected]);
    useEffect(() => {
        if (feedOpen && feedbackInput.current) feedbackInput.current?.focus();
    }, [feedOpen]);
    const router = useRouter();
    const { id } = router.query;
    const onChangeFeedbackContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setFeedbackContent(e.target.value);
    };
    const onComplete = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key == 'Enter') {
            const temp = confirm('해당 피드백을 입력하시겠습니까?');
            if (feedbackContent == ' ')
                setFeedbackContent(feedbackContent.slice(0, feedbackContent.length - 1));
            if (temp) {
                setFeedOpen(false);
                addFeedback(id as string, {
                    sequence: sequence,
                    comment: feedbackContent,
                });
            }
        }
    };
    return (
        <>
            {feedOpen ? (
                <_Wrapper>
                    <_Triangle />
                    <Image src={feedbackArrow} alt="화살표" />
                    <_FeedbackBox
                        onChange={onChangeFeedbackContent}
                        ref={feedbackInput}
                        value={feedbackContent}
                        placeholder="피드백을 남겨주세요"
                        onKeyDown={onComplete}
                    />
                </_Wrapper>
            ) : (
                <></>
            )}
            <_FeedWrapper onClick={() => setFeedOpen(true)}>
                {feedbackContent ? (
                    !feedOpen ? (
                        !isApplyFeed ? (
                            <Icon_NewFeed />
                        ) : (
                            <Icon_ReadFeed />
                        )
                    ) : (
                        <></>
                    )
                ) : (
                    <></>
                )}
            </_FeedWrapper>
        </>
    );
};
export default FeedbackComment;

const _Wrapper = styled.form`
    position: absolute;
    width: 400px;
    padding: 15px 30px 15px 5px;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 5px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    transform: translate(-50%, -50%);
    height: 120px;
    right: -645px;
    zoom: 100%;
    top: 50%;
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

const _FeedWrapper = styled.div`
    zoom: 100%;
    cursor: pointer;
    position: absolute;
    right: -44px;
    top: calc(50% - 11px);
`;
