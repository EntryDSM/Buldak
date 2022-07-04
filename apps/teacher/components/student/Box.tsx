import { css } from '@emotion/react';
import styled from '@emotion/styled';

const StudentBox = () => {
    return (
        <>
            <_Wrapper isSubmitted={true}>
                <_ProfileImage />
                <_Name className="submittedFont">김의찬</_Name>
                <_StudentNumber className="submittedFont">2106</_StudentNumber>
                <_States>
                    <_StatusSummary className="submittedFont">피드백 상태</_StatusSummary>
                    <_CheckBox />
                    <_StatusSummary className="public submittedFont">공개 상태</_StatusSummary>
                    <_CheckBox />
                </_States>
            </_Wrapper>
            <_Wrapper isSubmitted={false}>
                <_ProfileImage />
                <_Name className="unSubmittedFont">김의찬</_Name>
                <_StudentNumber className="unSubmittedFont">2106</_StudentNumber>
                <_States>
                    <_StatusSummary className="unSubmittedFont">피드백 상태</_StatusSummary>
                    <_CheckBox />
                    <_StatusSummary className="public unSubmittedFont">공개 상태</_StatusSummary>
                    <_CheckBox />
                </_States>
            </_Wrapper>
        </>
    );
};
export default StudentBox;

interface WrapperProps {
    isSubmitted: boolean;
}

const _Wrapper = styled.li<WrapperProps>`
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    padding: 12px 30px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    :last-child {
        margin-bottom: 0;
    }

    ${(props) =>
        props.isSubmitted
            ? css`
                  background-color: ${props.theme.color.white};
                  border: 1px solid ${props.theme.color.skyblue};
              `
            : css`
                  background-color: ${props.theme.color.gray500};
              `}
    > .submittedFont {
        color: ${({ theme }) => theme.color.gray900};
    }
    > .unSubmittedFont {
        color: ${({ theme }) => theme.color.gray700};
    }
`;

//todo div -> Next/Image로 수정
const _ProfileImage = styled.div`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.gray500};
`;

const _Name = styled.p`
    font-size: 22px;
    line-height: 27px;
    margin-left: 15px;
`;
const _StudentNumber = styled.p`
    font-size: 20px;
    line-height: 24px;
    margin-left: 10px;
`;
const _States = styled.div`
    display: flex;
    margin-left: auto;
    > .public {
        margin-left: 20px;
    }
    > .submittedFont {
        color: ${({ theme }) => theme.color.gray900};
    }
    > .unSubmittedFont {
        color: ${({ theme }) => theme.color.gray700};
    }
`;
const _StatusSummary = styled.p`
    font-size: 18px;
    line-height: 23px;
`;
const _CheckBox = styled.div`
    width: 24px;
    height: 24px;
    background-color: ${({ theme }) => theme.color.gray300};
    border-radius: 50%;
    margin-left: 10px;
`;
