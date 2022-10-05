import React from 'react';
import Image from 'next/image';
import AccessDenied from '../assets/accessDenied.svg';
import styled from '@emotion/styled';

const AccessDeniedPage = () => {
    return (
        <_ErrorLayout>
            <Image src={AccessDenied} />
            <_Introduce>
                <_403>
                    40
                    <p>3</p>
                </_403>
                <_Line />
                <_AccessDenied>Access Denied/Forbidden</_AccessDenied>
            </_Introduce>
        </_ErrorLayout>
    );
};

export default AccessDeniedPage;

const _ErrorLayout = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const _Introduce = styled.div`
    margin-left: 30px;
`;
const _403 = styled.div`
    line-height: 87px;
    display: flex;
    font-size: 100px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.main};
    > p {
        color: ${({ theme }) => theme.color.navy};
    }
`;
const _Line = styled.div`
    width: 100px;
    height: 2px;
    background-color: ${({ theme }) => theme.color.gray700};
    border: 100px;
    margin: 25px 0;
`;
const _AccessDenied = styled.p`
    color: ${({ theme }) => theme.color.black};
    font-size: 35px;
    font-weight: 400;
`;
