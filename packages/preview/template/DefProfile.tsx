import styled from '@emotion/styled';
import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { FeedBackType } from '../types/Feedback';
import FeedBack from './FeedBackRead';
import FeedbackComment from './FeedbackComment';

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
                    <FeedBack
                        feedInfo={feedback.feedInfo}
                        isRead={feedback.isRead}
                        sequence={feedback.sequence}
                    />
                )}
                {isTeacher && (
                    <FeedbackComment
                        isRead={feedback?.isRead}
                        feedInfo={feedback?.feedInfo}
                        isSelected={isSelected}
                        sequence={feedback?.sequence}
                    />
                )}
                <h1>{name[0] + ' ' + name[1] + ' ' + name[2]}</h1>
                {/* <ImgBox>
                    <div id="img" style={{ backgroundImage: `url(${url})` }}></div>
                </ImgBox>
                <div id="colline" /> */}
                <div id="textbox">
                    <p></p>
                    <p>이메일 : {email}</p>
                    <p>
                        GitHub :
                        <a href={github} target="_blank">
                            {github}
                        </a>
                    </p>
                    <p></p>
                    {/*                     <p>연락처 : {phone}</p>
                     */}{' '}
                </div>
            </Wrapper>
        </OutsideClickHandler>
    );
}

const Wrapper = styled.div<{ isSelected?: boolean }>`
    border: ${(props) => (props.isSelected ? '1px solid ' + props.theme.color.skyblue : '')};

    position: relative;
    width: 530px;
    height: 121px;
    padding: 25px 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    > #colline {
        width: 2px;
        height: 53px;
        background-color: ${({ theme }) => theme.color.gray300};
        border-radius: 26.5px;
        margin-left: 16px;
        margin-right: 13px;
    }
    > #textbox {
        height: 75px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 12px;
        margin-left: 30px;
        word-break: break-all;
    }
    a {
        color: ${({ theme }) => theme.color.skyblue};
        text-decoration: underline;
        margin-left: 4px;
    }
`;

const ImgBox = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${({ theme }) => theme.color.gray300};
    border-radius: 100px;
    > #img {
        width: 80px;
        height: 80px;
        border-radius: 100px;
        background-color: ${({ theme }) => theme.color.gray300};
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
`;
