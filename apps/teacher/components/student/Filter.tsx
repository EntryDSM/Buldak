import styled from '@emotion/styled';
import { Button, DropDown } from '@packages/ui';
import { theme } from '@packages/emotion-style-provider/src/theme';
import {
    ClassNumDropdownType,
    classRoomDropdownItems,
    documentStatusDropdownItems,
    DocumentStatusDropdownType,
    gradeDropdownItems,
    GradeDropdownType,
} from '../constant';
import useModal from '../../hooks/useModal';
import { FilterStateProps } from '.';
import {
    translateClassNumDropdownValue,
    translateDocStatusDropdownValue,
    translateGradeDropdownValue,
} from '../../utils/translate';

const Filter: React.FC<FilterStateProps> = ({ filter, setFilter }) => {
    const { selectModal } = useModal();
    const onChangeGrade = (value: string) => {
        setFilter({
            ...filter,
            grade: translateGradeDropdownValue(value as GradeDropdownType),
        });
    };
    const onChangeClassNum = (value: string) => {
        setFilter({
            ...filter,
            classNum: translateClassNumDropdownValue(value as ClassNumDropdownType),
        });
    };
    const onChangeDocStatus = (value: string) => {
        setFilter({
            ...filter,
            docStatus: translateDocStatusDropdownValue(value as DocumentStatusDropdownType),
        });
    };
    const printExcel = () => {};
    return (
        <_Wrapper>
            <_OptionWrapper>
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
                <DropDown
                    items={documentStatusDropdownItems}
                    placeholder="문서 상태"
                    onChange={onChangeDocStatus}
                    width={180}
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
                    onClick={() => selectModal('PDF')}
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
