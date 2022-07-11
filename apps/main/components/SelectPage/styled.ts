import styled from '@emotion/styled';

export const SelectPageContainer = styled.div`
    position: relative;

    width: 100%;
    height: 100vh;
`;

export const ImgContainer = styled.div`
    position: absolute;
    overflow: hidden;

    width: 100%;
    height: 100%;
`;

export const SelectContainer = styled.div`
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;
`;

export const SelectBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 900px;
    height: 500px;
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
`;

export const SelectTitle = styled.p`
    font-weight: 700;
    font-size: 25px;
    line-height: 31px;
    color: ${({ theme }) => theme.color.navy};

    margin-top: 40px;
`;

export const SelectLine = styled.div`
    width: 50px;
    height: 2px;
    background: ${({ theme }) => theme.color.skyblue};
    margin: 20px 0px;
`;

export const SelectAria = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;
`;

export const SelectLayout = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
`;

export const SelectThingsBox = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 240px;
    height: 270px;
    background: ${({ theme }) => theme.color.white};
    border: 2px solid ${({ theme }) => theme.color.gray300};
    border-radius: 8px;
`;

export const ThingsPorfile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 76px;
    height: 76px;
    background: ${({ theme }) => theme.color.background};
    border: 2px solid ${({ theme }) => theme.color.gray300};
    border-radius: 100px;
    margin-top: 25px;
`;

export const ThingsName = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    color: ${({ theme }) => theme.color.black};

    margin-top: 10px;
    margin-bottom: 5px;
`;

export const ThingsText = styled.pre`
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    text-align: center;
    color: ${({ theme }) => theme.color.gray700};
`;

export const ThingsSelectButton = styled.button`
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    color: ${({ theme }) => theme.color.skyblue};

    width: 100px;
    height: 40px;
    background: ${({ theme }) => theme.color.background};
    border-radius: 100px;
    margin-top: 30px;
    border: none;
`;

export const SelectBackLayout = styled.button`
    cursor: pointer;

    display: flex;
    align-items: center;

    border: none;
    background-color: ${({ theme }) => theme.color.white};
    width: 150px;
`;

export const SelectBackText = styled.p`
    transition: all 0.4s;

    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    color: ${({ theme }) => theme.color.skyblue};

    margin-left: 10px;
    :hover {
        margin-left: 18px;
    }
`;
