import styled from '@emotion/styled';
import { Button } from '@packages/ui';
import { theme } from '@packages/ui/types/theme';

const Header = () => {
    return (
        <_Wrapper>
            <_ButtonsWrapper>
                <Button
                    width={120}
                    height={40}
                    content="반환하기"
                    fontColor={theme.color.error}
                    borderColor={theme.color.gray500}
                />
                <Button
                    width={120}
                    height={40}
                    fontColor={theme.color.white}
                    backgroundColor={theme.color.skyblue}
                    content="공개승인"
                />
            </_ButtonsWrapper>
        </_Wrapper>
    );
};
export default Header;

const _Wrapper = styled.header`
    width: 100%;
    height: 70px;
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    align-items: center;
    padding-right: 80px;
`;
const _ButtonsWrapper = styled.div`
    margin-left: auto;
    display: flex;
    gap: 25px;
`;
