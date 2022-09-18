import styled from '@emotion/styled';
import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { FeedBackType } from '../types/Feedback';
import FeedBack from './FeedBackRead';
import {WriteFeed} from './FeedBackWrite';

interface Props {
    name: string;
    email: string;
    github: string;
    phone: string;
    url: string;
    feedback?: FeedBackType;
    isTeacher?: boolean;
}

export default function DefProfile({
    name,
    email,
    github,
    phone,
    url,
    feedback,
    isTeacher,
}: Props) {
    const [isSelected, setIsSelected] = useState(false);
    return (
        <OutsideClickHandler
            onOutsideClick={() => {
                setIsSelected(false);
            }}>
            <Wrapper isSelected={isSelected} onClick={() => setIsSelected(true)}>
                {!isTeacher && feedback?.feedInfo && (
                    <FeedBack feedInfo={feedback.feedInfo} isRead={feedback.isRead} sequence={feedback.sequence}/>
                )}
                {isTeacher && (
                    <WriteFeed
                        isRead={feedback?.isRead}
                        feedInfo={feedback?.feedInfo}
                        isSelected={isSelected}
                        sequence={feedback?.sequence}
                    />
                )}
                <ImgBox>
                    <div id="img" style={{ backgroundImage: `url(${url})` }}></div>
                </ImgBox>
                <div id="colline" />
                <div id="textbox">
                    <p>이름 : {name}</p>
                    <p>이메일 : {email}</p>
                    <p>
                        GitHub :
                        <a href={github} target="_blank">
                            {github}
                        </a>
                    </p>
                    <p>연락처 : {phone}</p>
                </div>
            </Wrapper>
        </OutsideClickHandler>
    );
}

const Wrapper = styled.div<{ isSelected?: boolean }>`
    border: ${(props) => (props.isSelected ? '1px solid ' + props.theme.color.skyblue : '')};

    position: relative;
    width: 1000px;
    height: 285px;
    padding: 47px 95px;
    display: flex;
    flex-direction: row;
    align-items: center;
    > #colline {
        width: 2px;
        height: 100px;
        background-color: ${({ theme }) => theme.color.gray300};
        border-radius: 50px;
        margin-left: 30px;
        margin-right: 25px;
    }
    > #textbox {
        height: 142px;
        width: 563px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 22px;
        word-break: break-all;
    }
    a {
        color: ${({ theme }) => theme.color.skyblue};
        text-decoration: underline;
        margin-left: 8px;
    }
`;

const ImgBox = styled.div`
    width: 190px;
    height: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid ${({ theme }) => theme.color.gray300};
    border-radius: 100px;
    > #img {
        width: 150px;
        height: 150px;
        border-radius: 100px;
        background-color: ${({ theme }) => theme.color.gray300};
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
