import styled from '@emotion/styled';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { FeedBackType } from '../types/Feedback';
import FeedbackComment from './FeedbackComment';
import FeedBack from './FeedBackRead';

interface Props {
    url: string;
    title: string;
    date: string;
    topText: string;
    bottomText: string;
    skills: string[];
    feedback?: FeedBackType;
    isTeacher?: boolean;
}

export default function Project({
    url,
    title,
    date,
    topText,
    bottomText,
    skills,
    feedback,
    isTeacher,
}: Props) {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <OutsideClickHandler
            onOutsideClick={() => {
                setIsSelected(false);
            }}>
            <Wrapper onClick={() => setIsSelected(true)} isSelected={isSelected}>
                {!isTeacher && feedback?.feedInfo && (
                    <FeedBack
                        feedInfo={feedback.feedInfo}
                        sequence={feedback.sequence}
                        isRead={feedback.isRead}
                    />
                )}
                {isTeacher && (
                    <FeedbackComment
                        isRead={feedback?.isRead}
                        feedInfo={feedback?.feedInfo}
                        sequence={feedback?.sequence}
                        isSelected={isSelected}
                    />
                )}
                <TitleWrapper>
                    <p id="title">{title}</p>
                    <p id="date">{date}</p>
                </TitleWrapper>
                <ImgBox url={url} />
                <SkillWrapper>
                    <p>개발언어 및 스킬</p>
                    <div id="skills">
                        {skills.map((value) => {
                            return <SkillTag name={value} />;
                        })}
                    </div>
                </SkillWrapper>
                <InformationWrapper>
                    <p id="title">{topText}</p>
                    <pre id="explain">{bottomText}</pre>
                </InformationWrapper>
            </Wrapper>
        </OutsideClickHandler>
    );
}

interface TagProps {
    name: string;
}
function SkillTag({ name }: TagProps) {
    return (
        <TagWrapper>
            <div id="imgbox" />
            <p>{name}</p>
        </TagWrapper>
    );
}

const Wrapper = styled.div<{ isSelected?: boolean }>`
    position: relative;
    width: 100%;
    padding: 15px 25px;
    border: ${(props) => (props.isSelected ? '1px solid ' + props.theme.color.skyblue : '')};
`;
const TitleWrapper = styled.div`
    width: 100%;
    height: 15px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    word-break: break-all;
    #title {
        color: ${({ theme }) => theme.color.black};
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        width: 70%;
    }
    #date {
        color: ${({ theme }) => theme.color.black};
        font-weight: 500;
        font-size: 10px;
        line-height: 13px;
        width: 30%;
        text-align: end;
    }
`;

const ImgBox = styled.div<{ url: string }>`
    width: 100%;
    height: 170px;
    border-radius: 5px;
    margin-top: 15px;
    margin-bottom: 34px;
    background-image: url(${(props) => props.url});
    background-color: ${({ theme }) => theme.color.gray300};
    background-size: 100% 100%;
    background-repeat: no-repeat;
`;

const SkillWrapper = styled.div`
    width: 100%;
    min-height: 40px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 13px;
    > p {
        font-weight: 500;
        font-size: 10px;
        line-height: 13px;
        color: ${({ theme }) => theme.color.black};
        font-weight: bold;
    }
    #skills {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

const TagWrapper = styled.div`
    margin-right: 5px;
    margin-top: 5px;
    height: 21px;
    padding: 2.6px 8px;
    padding-right: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 500;
    font-size: 10.6px;
    line-height: 13px;
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.point};
    border-radius: 53px;
    min-width: 10px;
    width: fit-content;
    /* #imgbox {
        width: 16px;
        height: 16px;
        margin-right: 2.6px;
        background-color: ${({ theme }) => theme.color.gray500};
        border-radius: 50px;
    } */
`;

const InformationWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    word-break: break-all;
    #title {
        font-weight: 700;
        font-size: 11.13px;
        line-height: 14px;
        margin-bottom: 6px;
    }
    #explain {
        font-weight: 500;
        font-size: 9.54px;
        line-height: 12px;
    }
`;
