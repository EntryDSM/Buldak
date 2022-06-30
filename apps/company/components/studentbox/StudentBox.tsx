import styled from '@emotion/styled';

interface Props {
    profile_img: string;
    tags: string;
}

function StudentBox() {
    return (
        <Wrapper>
            <ImgBlock></ImgBlock>
            <Body>
                <strong id="major">프론트엔드</strong>
                <TagsWrapper></TagsWrapper>
            </Body>
            <Footer>
                <div id="imgblock"></div>
                <div id="wrapper-name">
                    <p id="name">성이름</p>
                    <p id="num">1234</p>
                </div>
            </Footer>
        </Wrapper>
    );
}

export default StudentBox;

const Wrapper = styled.div`
    width: 320px;
    height: 340px;
    background-color:  ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    justify-content: space-between;
`;

const ImgBlock = styled.div`
    width: 100%;
    height: 160px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background-color: #d9d9d9;
`;

const Body = styled.div`
    padding: 10px 15px 10px 15px;
    height: 130px;
    #major {
        color:  ${({ theme }) => theme.color.navy};
        font-size: 20px;
        margin-bottom: 10px;
    }
`;
const TagsWrapper = styled.div`

`;
const Footer = styled.div`
    height: 50px;
    width: 100%;
    border-top: 1px solid  ${({ theme }) => theme.color.gay300};
    padding: 10px 15px 10px 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    #imgblock {
        height: 30px;
        width: 30px;
        border: 1px solid black;
        border-radius: 50px;
        margin-right: 10px;
    }
    #wrapper-name {
        display: flex;
        flex-direction: row;
        align-items:center;
        #name {
            font-size: 16px;
            margin-right: 5px;
            color:  ${({ theme }) => theme.color.black};
        }
        #num {
            font-size: 14px;
            color:  ${({ theme }) => theme.color.gray700};
        }
    }
`;