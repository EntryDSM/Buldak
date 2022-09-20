import styled from '@emotion/styled';
import { classRoomDropdownItems, gradeDropdownItems } from '../../constant';
import { DropDown } from '@packages/ui';

interface Props {
    onChangeGrade: (value: string) => void;
    onChangeClassNum: (value: string) => void;
}

const PdfFilter: React.FC<Props> = ({ onChangeGrade, onChangeClassNum }) => {
    return (
        <_Wrapper>
            <DropDown
                items={gradeDropdownItems}
                placeholder="학년"
                onChange={onChangeGrade}
                width={150}
            />
            <DropDown
                items={classRoomDropdownItems}
                placeholder="반"
                onChange={onChangeClassNum}
                width={150}
            />
        </_Wrapper>
    );
};
export default PdfFilter;

const _Wrapper = styled.div`
    display: flex;
    gap: 10px;
`;
