import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Profile } from '@packages/ui';
import useModal from '../../hooks/useModal';
import { StudentInfo } from '../../models/teachers/responses';

interface Props {
    studentInfo: StudentInfo;
}

const StudentBox: React.FC<Props> = ({ studentInfo }) => {
    const { selectModal } = useModal();
    return (
        <_Wrapper
            isSubmitted={studentInfo.is_submitted}
            onClick={() => selectModal({ modal: 'USER_DETAIL', id: studentInfo.student_id })}>
            <Profile type="image" width="56px" height="56px" src={studentInfo.profile_image_path} />
            <_Name className="submittedFont">{studentInfo.name}</_Name>
            <_StudentNumber className="submittedFont">{studentInfo.gcn}</_StudentNumber>
            <_States>
                <_StatusSummary className="submittedFont">
                    피드백 상태
                    <_Status
                        isSubmitted={studentInfo.is_submitted}
                        isOn={studentInfo.feedback_status}>
                        OFF
                    </_Status>
                </_StatusSummary>
                <_StatusSummary className="public submittedFont">
                    공개 상태
                    <_Status
                        isSubmitted={studentInfo.is_submitted}
                        isOn={studentInfo.public_status}>
                        ON
                    </_Status>
                </_StatusSummary>
            </_States>
        </_Wrapper>
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
const _StatusSummary = styled.div`
    font-size: 18px;
    line-height: 23px;
    display: flex;
    align-items: center;
`;
const _CheckBox = styled.div`
    width: 24px;
    height: 24px;
    background-color: ${({ theme }) => theme.color.gray300};
    border-radius: 50%;
    margin-left: 10px;
`;
interface StatusTag {
    isSubmitted: boolean;
    isOn: boolean;
}
const _Status = styled.div<StatusTag>`
    width: 50px;
    height: 26px;
    font-weight: 500;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    line-height: 19px;
    margin-left: 10px;

    ${({ theme, isOn, isSubmitted }) => {
        if (isSubmitted) {
            return isOn
                ? css`
                      background-color: ${theme.color.skyblue};
                      color: ${theme.color.white};
                  `
                : css`
                      background-color: ${theme.color.gray300};
                      color: ${theme.color.gray900};
                  `;
        } else {
            return css`
                background-color: ${theme.color.gray300};
                color: ${theme.color.gray700};
            `;
        }
    }};
`;
