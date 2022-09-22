import React from 'react';
import Image from 'next/image';
import NotFoundFigure from '../assets/svg/NotFoundFigure.svg';
import styled from '@emotion/styled';

const NotFoundPage = () => {
    return (
        <_ErrorLayout>
            <_ErrorMethod>
                40<_ErrorMethodPoint>4</_ErrorMethodPoint>
            </_ErrorMethod>
            <Image src={NotFoundFigure} />
            <_ErrorMessage>Page Not Found</_ErrorMessage>
            <_ContentLine />
            <_HomeButton
                onClick={() => {
                    location.href = '/';
                }}>
                GO HOME
            </_HomeButton>
        </_ErrorLayout>
    );
};

export default NotFoundPage;

const _ErrorLayout = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const _ErrorMethod = styled.p`
    display: flex;
    font-weight: 500;
    font-size: 100px;
    color: #3068d3;
    margin-bottom: 10px;
`;

const _ErrorMethodPoint = styled.p`
    font-weight: 500;
    font-size: 100px;
    color: #0a4595;
`;

const _ErrorMessage = styled.p`
    font-weight: 400;
    font-size: 40px;
    line-height: 50px;
    color: #343434;
    margin-top: 15px;
`;

const _ContentLine = styled.div`
    width: 60px;
    height: 2px;
    background: #b6b6b6;
    border-radius: 100px;
    margin: 15px 0px 20px 0px;
`;

const _HomeButton = styled.button`
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
    width: 150px;
    height: 50px;
    background: #3068d3;
    border-radius: 100px;
`;
