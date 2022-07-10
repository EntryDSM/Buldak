import styled from '@emotion/styled';
import PatchElementWrapper from './PatchElementWrapper';

function Height() {
    return (
        <PatchElementWrapper name="높이">
            <_HeightInputLabel>
                <_HeightInput />
                <_Unit>px</_Unit>
            </_HeightInputLabel>
        </PatchElementWrapper>
    );
}

const _HeightInputLabel = styled.label`
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.color.gray700};
    border-radius: 5px;
`;

const _Unit = styled.div`
    font-size: 16px;
    color: ${({ theme }) => theme.color.gray700};
`;

const _HeightInput = styled.input`
    width: 250px;
    height: 38px;
    margin-left: 15px;
    padding-bottom: 9px;
    padding-top: 9px;
    font-size: 16px;
`;

export default Height;
