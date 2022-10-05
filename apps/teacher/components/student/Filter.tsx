import styled from '@emotion/styled';
import { Button, DropDown } from '@packages/ui';
import { theme } from '@packages/emotion-style-provider/src/theme';
import {
    classRoomDropdownItems,
    documentStatusDropdownItems,
    gradeDropdownItems,
} from '../constant';
import useModal from '../../hooks/useModal';
import { FilterProps } from '../../pages';
import { translateClassNumValue, translateGradeValue } from '../../utils/translate';
import { DocumentStateEnum } from '../../utils/enum';

export interface FilterFunctionProps {
    onChangeGrade: (value: string) => void;
    onChangeClassNum: (value: string) => void;
    onChangeDocStatus: (value: string) => void;
    filter: FilterProps;
}

const Filter: React.FC<FilterFunctionProps> = ({
    onChangeClassNum,
    onChangeGrade,
    onChangeDocStatus,
    filter,
}) => {
    const { selectModal } = useModal();
    const printExcel = () => {};
    return (
        <_Wrapper>
            <_OptionWrapper>
                <DropDown
                    items={gradeDropdownItems}
                    placeholder="학년"
                    onChange={onChangeGrade}
                    width={150}
                    value={translateGradeValue(filter.grade)}
                />
                <DropDown
                    items={classRoomDropdownItems}
                    placeholder="반"
                    onChange={onChangeClassNum}
                    width={150}
                    value={translateClassNumValue(filter.classNum)}
                />
                <DropDown
                    items={documentStatusDropdownItems}
                    placeholder="문서 상태"
                    onChange={onChangeDocStatus}
                    width={180}
                    value={filter.docStatus ? DocumentStateEnum[filter.docStatus] : '전체'}
                />
            </_OptionWrapper>
            <_OptionWrapper>
                <Button
                    width={130}
                    height={42}
                    borderWidth={2}
                    borderColor={theme.color.skyblue}
                    fontColor={theme.color.skyblue}
                    content="Excel 출력"
                    onClick={printExcel}
                />
                <Button
                    width={130}
                    height={42}
                    borderWidth={2}
                    borderColor={theme.color.skyblue}
                    fontColor={theme.color.skyblue}
                    content="pdf 출력"
                    onClick={() => selectModal({ modal: 'PDF' })}
                />
            </_OptionWrapper>
        </_Wrapper>
    );
};
export default Filter;

const _Wrapper = styled.section`
    display: flex;
    margin-top: 25px;
    justify-content: space-between;
`;
const _OptionWrapper = styled.div`
    display: flex;
    gap: 10px;
    > div {
        height: 42px;
    }
`;
