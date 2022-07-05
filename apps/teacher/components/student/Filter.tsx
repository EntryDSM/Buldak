import styled from '@emotion/styled';
import { Button, DropDown } from '@packages/ui';
import { useContext } from 'react';
import { ModalDispatchContext } from '../../context/ModalContext';
import { theme } from '@packages/emotion-style-provider/src/theme';
import {
    classRoomDropdownItems,
    documentStatusDropdownItems,
    gradeDropdownItems,
} from '../constant';

const Filter = () => {
    const dispatch = useContext(ModalDispatchContext);
    const onClickPrintPDF = () => {
        dispatch({ type: 'SELECT', selected: 'PDF' });
    };
    const onChangeDropdown = (e: string) => {};
    const onPrintExcel = () => {};
    return (
        <_Wrapper>
            <_OptionWrapper>
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
                <DropDown
                    items={documentStatusDropdownItems}
                    placeholder="문서 상태"
                    onChange={onChangeDropdown}
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
                    onClick={onPrintExcel}
                />
                <Button
                    width={130}
                    height={42}
                    borderWidth={2}
                    borderColor={theme.color.skyblue}
                    fontColor={theme.color.skyblue}
                    content="pdf 출력"
                    onClick={onClickPrintPDF}
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
`;
const _Dropdown2 = styled.div`
    width: 180px;
    height: 42px;
    background-color: ${({ theme }) => theme.color.background};
    margin-right: 30px;
`;
