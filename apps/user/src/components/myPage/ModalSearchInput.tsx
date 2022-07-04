import styled from '@emotion/styled';

interface PropsType {
    subtitle: string;
    placeholder: string;
}

function ModalSearchInput({ subtitle, placeholder }: PropsType) {
    return (
        <>
            <ModalSubTitle>{subtitle}</ModalSubTitle>
            <SearchInput />
        </>
    );
}

const ModalSubTitle = styled.p`
    margin: 15px 0px 15px 0px;
    font-size: 22px;
    color: ${({ theme }) => theme.color.gray700};
`;

const SearchInput = styled.input`
    width: 600px;
    height: 50px;
    border-radius: 7px;
    border: 2px solid ${({ theme }) => theme.color.gray700};
`;

export default ModalSearchInput;
