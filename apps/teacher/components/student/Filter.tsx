import styled from '@emotion/styled';
import { Button } from '@packages/ui';

const Filter = () => {
    return (
        <_Wrapper>
            <_Dropdown1 />
            <_Dropdown1 />
            <_Dropdown2 />
            <Button
                width={130}
                height={42}
                borderColor="#5387EC"
                fontColor="#5387EC"
                content="Excel 출력"
            />
            <Button
                width={130}
                height={42}
                borderColor="#5387EC"
                fontColor="#5387EC"
                content="pdf 출력"
            />
        </_Wrapper>
    );
};
export default Filter;

const _Wrapper = styled.section`
    display: flex;
    margin-top: 25px;
    > button {
        margin-right: 10px;
        :last-child {
            margin-right: 0;
        }
    }
`;
const _Dropdown1 = styled.div`
    width: 150px;
    height: 42px;
    margin-right: 10px;
    background-color: ${({ theme }) => theme.color.background};
    :last-child {
        margin-right: 0;
    }
`;
const _Dropdown2 = styled.div`
    width: 180px;
    height: 42px;
    background-color: ${({ theme }) => theme.color.background};
    margin-right: 30px;
`;
