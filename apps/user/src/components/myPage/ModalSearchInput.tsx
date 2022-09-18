import styled from '@emotion/styled';
import { DetailedHTMLProps, HTMLAttributes, useEffect, useMemo, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
interface PropsType extends HTMLAttributes<HTMLInputElement> {
    subtitle: string;
    addTags?: (textValue: string) => void;
    searchTagInfo?: string[];
}

function ModalSearchInput({ subtitle, addTags, searchTagInfo, ...props }: PropsType) {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(true);
        console.log(searchTagInfo);
    }, [searchTagInfo]);
    return (
        <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
            <div style={{ position: 'relative' }}>
                <ModalSubTitle>{subtitle}</ModalSubTitle>
                <SearchInput {...props} />
                {isOpen && !!searchTagInfo?.length && (
                    <SearchInfoBox>
                        {searchTagInfo?.map((info) => (
                            <div
                                onClick={() => {
                                    addTags?.(info);
                                    setIsOpen(false);
                                }}>
                                {info}
                            </div>
                        ))}
                    </SearchInfoBox>
                )}
            </div>
        </OutsideClickHandler>
    );
}

const ModalSubTitle = styled.p`
    margin: 15px 0px;
    font-size: 22px;
    color: ${({ theme }) => theme.color.gray700};
`;

const SearchInput = styled.input`
    width: 600px;
    height: 50px;
    font-size: 20px;
    font-weight: 400;
    padding: 0 25px;
    border-radius: 7px;
    border: 2px solid ${({ theme }) => theme.color.gray700};
`;

const SearchInfoBox = styled.div`
    top: 96px;
    width: 600px;
    position: absolute;
    max-height: 200px;
    overflow: auto;
    border: 2px solid ${({ theme }) => theme.color.gray700};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.white};
    > div {
        cursor: pointer;
        width: 100%;
        height: 44px;
        padding: 0 25px;
        display: flex;
        font-size: 20px;
        font-weight: 400;
        align-items: center;
    }
`;

export default ModalSearchInput;
