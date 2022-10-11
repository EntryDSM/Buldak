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

interface AddFeedbackRequest {
    sequence: number;
    comment: string;
}

export interface DeleteFeedbackRequest {
    document_id: string;
    sequence: number;
}

const FeedbackComment = ({ isRead, feedInfo = '', isSelected, sequence = 0 }: FeedProps) => {
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
    const addFeedback = async (student_id: string, body: AddFeedbackRequest) => {
        try {
            await instance.post(`/teachers/feedback/${student_id}`, body);
        } catch (err) {
            throw err;
        }
    };
    const deleteFeedback = async (body: DeleteFeedbackRequest) => {
        try {
            await instance.delete(`/teachers/feedback`, {
                data: body,
            });
        } catch (err) {
            throw err;
        }
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
    const onClickDeleteFeedback = () => {
        deleteFeedback({
            document_id: router.query.documentId as string,
            sequence,
        })
            .then(() => {
                router.reload();
            })
            .catch((err) => {
                if (err.response.status === 404) alert('ERROR', '해당 피드백을 찾을 수 없습니다.');
                else alert('ERROR');
            });
    };
    return (
        <>
            {feedOpen ? (
                <_Wrapper>
                    <_Triangle />
                    <Image src={feedbackArrow} alt="화살표" />
                    <_Flex>
                        <_FeedbackBox
                            onChange={onChangeFeedbackContent}
                            ref={feedbackInput}
                            value={feedbackContent}
                            placeholder="피드백을 남겨주세요"
                            onKeyDown={onComplete}
                        />
                        <_DeleteButton onClick={onClickDeleteFeedback}>삭제</_DeleteButton>
                    </_Flex>
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

const _Wrapper = styled.div`
    position: absolute;
    width: 400px;
    padding: 15px 30px 15px 5px;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 5px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    transform: translate(-50%, -50%);
    min-height: 120px;
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
const _Flex = styled.div`
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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
const _DeleteButton = styled.button`
    padding: 4px 16px;
    margin-top: 8px;
    border-radius: 8px;
    color: ${({ theme }) => theme.color.error};
    border: 1px solid ${({ theme }) => theme.color.error};
    background-color: ${({ theme }) => theme.color.white};

    :hover {
        background-color: ${({ theme }) => theme.color.error};
        color: ${({ theme }) => theme.color.white};
    }
`;
