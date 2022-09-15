import styled from '@emotion/styled';
import theme from '@packages/emotion-style-provider/src/theme';
import { Tag } from '@packages/ui';
import { useEffect } from 'react';

interface Props {
    profile_img?: string;
    prev_img?: string;
    tags: string[];
    name: string;
    num: string | number;
    major: string;
    EOL: boolean;
}

function StudentBox(props: Props) {
    const { profile_img, prev_img, tags, name, num, major, EOL = false } = props;
    return (
        <Wrapper EOL={EOL}>
            <ImgBlock style={{ backgroundImage: `url(${profile_img})` }} />
            <Body>
                <strong id="major">{major}</strong>
                <TagsWrapper>
                    {tags
                        ? tags.map((value, index) => (
                              <Tag tagName={value} color="bdblue" key={index} />
                          ))
                        : ''}
                </TagsWrapper>
            </Body>
            <Footer>
                <PrevImg style={{ backgroundImage: `url(${prev_img})` }} />
                <div id="wrapper-name">
                    <p id="name">{name}</p>
                    <p id="num">{num}</p>
                </div>
            </Footer>
        </Wrapper>
    );
}

export default StudentBox;

const Wrapper = styled.div<{ EOL: boolean }>`
    width: 320px;
    height: 340px;
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    justify-content: space-between;
    margin-bottom: 30px;
    margin-right: ${({ EOL }) => (EOL ? '0px' : '30px')};
`;

const ImgBlock = styled.div`
    width: 100%;
    height: 160px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background-color: ${({ theme }) => theme.color.gray500};
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 100%;
`;

const PrevImg = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 50px;
    margin-right: 10px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 100%;
    background-color: ${({ theme }) => theme.color.gray500};
`;

const Body = styled.div`
    padding: 10px 15px 10px 15px;
    height: 130px;
    #major {
        color: ${({ theme }) => theme.color.navy};
        font-size: 20px;
        margin-bottom: 10px;
    }
`;
const TagsWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    > div {
        margin-right: 5px;
    }
`;
const Footer = styled.div`
    height: 50px;
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.color.gray300};
    padding: 10px 15px 10px 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    #wrapper-name {
        display: flex;
        flex-direction: row;
        align-items: center;
        #name {
            font-size: 16px;
            margin-right: 5px;
            color: ${({ theme }) => theme.color.black};
        }
        #num {
            font-size: 14px;
            color: ${({ theme }) => theme.color.gray700};
        }
    }
`;
