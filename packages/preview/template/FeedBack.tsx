import styled from '@emotion/styled';
import { useState } from 'react';
import * as Icon from '../assets/index';
import CheckBox from '@packages/ui/components/CheckBox';

interface FeedProps {
    isRead: boolean;
    feedInfo: String;
}

function FeedBack({ isRead = false, feedInfo }: FeedProps) {
    const [isReadFeed, setIsRead] = useState(isRead);
    const [feedOpen, setFeedOpen] = useState(false);
    return (
        <>
            {feedOpen ? (
                <Wrapper>
                    <div id="feedarrow">
                        <Icon.Icon_FeedArrow
                            onClick={() => {
                                setFeedOpen(false);
                            }}
                        />
                    </div>
                    <CenterWrapper>
                        <p>{feedInfo}</p>
                        <div id="confirm">
                            <p>확인</p>
                            <CheckBox isChecked={isReadFeed} onClick={() => {setIsRead(!isReadFeed)}} />
                        </div>
                    </CenterWrapper>
                </Wrapper>
            ) : (
                <></>
            )}
            <FeedWrapper
                onClick={() => {
                    setFeedOpen(true);
                }}>
                {!feedOpen ? !isReadFeed ? <Icon.Icon_NewFeed /> : <Icon.Icon_ReadFeed /> : <></>}
            </FeedWrapper>
        </>
    );
}

export default FeedBack;

const Wrapper = styled.div`
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
    > #feedarrow svg {
        position: absolute;
        top: calc(50% - 10px);
        left: 5px;
        cursor: pointer;
    }
`;

const CenterWrapper = styled.div`
    width: 340px;
    height: 100px;
    > p {
        width: 100%;
        height: 68px;
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
    cursor: pointer;
    position: absolute;
    right: -44px;
`;
