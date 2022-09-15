import styled from '@emotion/styled';

interface PropsType {
    children: React.ReactNode;
    name: string;
}

function PatchWrapper({ children, name }: PropsType) {
    return (
        <_Wrapper>
            <_Explain>{name}</_Explain>
            {children}
        </_Wrapper>
    );
}

const _Explain = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.color.gray900};
    margin-bottom: 13px;
`;

const _Wrapper = styled.div`
    margin-top: 30px;
`;

export default PatchWrapper;