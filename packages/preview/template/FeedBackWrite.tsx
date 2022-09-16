import styled from '@emotion/styled';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import * as Icon from '../assets/index';
import CheckBox from '@packages/ui/components/CheckBox';
import OutsideClickHandler from 'react-outside-click-handler';

interface FeedProps {
    isRead?: boolean;
    feedInfo?: string;
    isSelected: boolean;
    sequence?: number;
}

function WriteFeed({ isRead = false, feedInfo = '', isSelected, sequence }: FeedProps) {
    const [isApplyFeed, setIsApply] = useState(isRead);
    const [feedOpen, setFeedOpen] = useState(false);
    const [inputValue, setValue] = useState(feedInfo);
    const inputRef = useRef(null);
    useEffect(() => {
        setFeedOpen(isSelected);
    }, [isSelected]);
    useEffect(() => {
        if (feedOpen) inputRef.current.focus();
    }, [feedOpen]);

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };
    const onComplete = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key == 'Enter') {
            const temp = confirm('해당 피드백을 입력하시겠습니까?');
            if (inputValue == ' ') setValue(inputValue.slice(0, inputValue.length - 1));
            if (temp) {
                setFeedOpen(false);
                //여기 수행할 작업 넣으면 됨. inputValue : 넣은 값.
            }
        }
    };
    return (
        <>
            {feedOpen ? (
                <Wrapper>
                    <div id="feedarrow" onClick={() => setFeedOpen(false)}>
                        <Icon.Icon_FeedArrow />
                    </div>
                    <CenterWrapper>
                        <textarea
                            onChange={(e) => onChange(e)}
                            onKeyDown={(e) => onComplete(e)}
                            value={inputValue}
                            ref={inputRef}></textarea>
                    </CenterWrapper>
                </Wrapper>
            ) : (
                <></>
            )}
            <FeedWrapper
                onClick={() => {
                    setFeedOpen(true);
                }}>
                {inputValue ? (
                    !feedOpen ? (
                        !isApplyFeed ? (
                            <Icon.Icon_NewFeed />
                        ) : (
                            <Icon.Icon_ReadFeed />
                        )
                    ) : (
                        <></>
                    )
                ) : (
                    <></>
                )}
            </FeedWrapper>
        </>
    );
}

export default WriteFeed;

const Wrapper = styled.div`
    z-index: 1;
    zoom: 190%;
    border-radius: 5px;
    filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.15));
    position: absolute;
    width: 400px;
    height: 120px;
    right: -425px;
    top: calc(50% - 60px);
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    align-items: center;
    justify-content: center;
    > #feedarrow {
        width: 20px;
        height: 100px;
        position: absolute;
        left: 0px;
        cursor: pointer;
        top: calc(50% - 10px);
    }
    > #feedarrow svg {
        position: absolute;
        left: 5px;
    }
`;

const CenterWrapper = styled.div`
    width: 340px;
    height: 90px;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.color.gray700};
    > textarea {
        ::-webkit-scrollbar {
            display: none;
        }
        resize: none;
        width: 100%;
        padding: 10px;
        height: 100%;
        font-size: 15px;
        word-break: break-all;
    }
    > #confirm {
        width: 62px;
        height: 22px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        right: 46px;
        bottom: 9px;
        cursor: pointer;
        > p {
            color: ${({ theme }) => theme.color.black};
            font-size: 16px;
            font-weight: 400;
        }
    }
`;

const FeedWrapper = styled.div`
    zoom: 190%;
    cursor: pointer;
    position: absolute;
    right: -44px;
    top: calc(50% - 11px);
`;
