import styled from '@emotion/styled';
import { Dispatch, SetStateAction } from 'react';
import AddElementClose from '../../assets/svgs/AddElementClose';
import { ElementList } from '../../constants/ElementList';
import OutsideClickHandler from 'react-outside-click-handler';

interface PropsType {
    setElementDropDown: Dispatch<SetStateAction<boolean>>;
}

function AddElementModal({ setElementDropDown }: PropsType) {
    return (
        <OutsideClickHandler onOutsideClick={() => setElementDropDown(false)}>
            <_AddElementBox>
                <div>
                    <_AddElementExplain>
                        <span>μμμΆκ°</span>
                        <span onClick={() => setElementDropDown(false)}>
                            <AddElementClose />
                        </span>
                    </_AddElementExplain>
                    <_ElementListBox>
                        {ElementList.map((Element, index) => (
                            <_AddElementListItem key={index}>
                                {Element.image}
                                <span>{Element.text}</span>
                            </_AddElementListItem>
                        ))}
                    </_ElementListBox>
                </div>
            </_AddElementBox>
        </OutsideClickHandler>
    );
}

const _ElementListBox = styled.div`
    height: 330px;
    overflow-y: auto;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const _AddElementListItem = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0px 40px;
    > span {
        margin-left: 10px;
    }
    :hover {
        background-color: ${({ theme }) => theme.color.gray300};
    }
`;

const _AddElementBox = styled.div`
    position: absolute;
    top: 120px;
    left: 280px;
    width: 340px;
    height: 370px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 8px;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.15);
`;

const _AddElementExplain = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    font-weight: bold;
    padding: 0px 40px;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray300};
`;

export default AddElementModal;
