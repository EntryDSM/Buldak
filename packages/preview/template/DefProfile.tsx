import styled from '@emotion/styled';
import React from 'react'
import FeedBack from './FeedBack';

interface Props {
    name: string;
    email: string;
    github: string;
    phone: string;
    url: string;
}

export default function DefProfile({ name, email, github, phone, url }: Props) {
    return (
        <Wrapper>
            <FeedBack />
            <ImgBox>
                <div id="img" style={{ backgroundImage: `url(${url})` }}></div>
            </ImgBox>
            <div id="colline" />
            <div id="textbox">
                <p>이름 : {name}</p>
                <p>이메일 : {email}</p>
                <p>
                    GitHub :<a href={github}>{github}</a>
                </p>
                <p>연락처 : {phone}</p>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position:relative;

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
        margin-left:8px;
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
        border: 1px solid black;
    }
`;
