import styled from '@emotion/styled';
import theme from '@packages/emotion-style-provider/src/theme';
import { Button } from '@packages/ui';
import { useRouter } from 'next/router';

function TotalView() {
    const arr = [
        {
            year: 2022,
            grade: 1,
        },
        {
            year: 2022,
            grade: 2,
        },
    ];
    const router = useRouter();

    return (
        <Background>
            <Wrapper>
                <Header>
                    <div id="title">
                        <h1>도서관</h1>
                        <Button
                            height={42}
                            width={120}
                            content={'홈으로'}
                            borderColor={theme.color.skyblue}
                            borderWidth={2}
                            fontColor={theme.color.skyblue}
                            onClick={() => {
                                router.push('/' + process.env.NEXT_PUBLIC_COMPANY_URL);
                            }}
                        />
                    </div>
                </Header>
                <BoxesWrapper>
                    {arr.map((value) => (
                        <Box
                            onClick={() => {
                                router.push(`/view/total/${value.year + '-' + value.grade}`);
                            }}>
                            <h1>{value.grade}학년</h1>
                            <h2>{value.year}학년도</h2>
                        </Box>
                    ))}
                </BoxesWrapper>
            </Wrapper>
        </Background>
    );
}

export default TotalView;

const Background = styled.div`
    min-width: 100%;
    width: fit-content;
    min-height: 100vh;
    height: fit-content;
    background-color: #f8f9fa;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Wrapper = styled.div`
    margin-top: 70px;
    width: 1370px;
    height: fit-content;
`;

const Header = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
        font-size: 25px;
        font-weight: bold;
        margin-right: 20px;
    }
    > #title {
        display: flex;
        flex-direction: row;
        align-items: center;
        > h5 {
            color: ${({ theme }) => theme.color.gray700};
        }
    }
    > div:not(#title) {
        //button,div wrapper
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        > div:not(#right) {
            //input,dropdown wrapper
            display: flex;
            flex-direction: row;
            width: 780px;
            align-items: center;
            justify-content: space-between;
        }
    }
`;

const BoxesWrapper = styled.div`
    width: 1370px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
`;

const Box = styled.div`
    width: 320px;
    height: 150px;
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.08);
`;
