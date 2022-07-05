import styled from '@emotion/styled';
import { classRoomDropdownItems, gradeDropdownItems } from '../../constant';
import { DropDown } from '@packages/ui';

const PdfFilter = () => {
    const onChangeDropdown = () => {};
    return (
        <_Wrapper>
            <DropDown
                items={gradeDropdownItems}
                placeholder="학년"
                onChange={onChangeDropdown}
                width={150}
            />
            <DropDown
                items={classRoomDropdownItems}
                placeholder="반"
                onChange={onChangeDropdown}
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
