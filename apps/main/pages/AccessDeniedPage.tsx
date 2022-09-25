import React from 'react';
import Image from 'next/image';
import AccessDenied from '../assets/svg/AccessDenied.svg';
import styled from '@emotion/styled';

const NotFoundPage = () => {
    return (
        <_ErrorLayout>
            <_MainLayout>
                <Image src={AccessDenied} />
                <_TextLayout>
                    <_ErrorMethod>
                        40
                        <_ErrorMethodPoint>3</_ErrorMethodPoint>
                    </_ErrorMethod>
                    <_ContentLine />
                    <_ErrorMessage>Access Denied/Forbidden</_ErrorMessage>
                </_TextLayout>
            </_MainLayout>
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

const _MainLayout = styled.div`
    display: flex;
    align-items: center;
`;

const _TextLayout = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
`;

const _ErrorMethod = styled.p`
    display: flex;
    font-weight: 500;
    font-size: 100px;
    color: #3068d3;
    line-height: 90px;
`;

const _ErrorMethodPoint = styled.p`
    font-weight: 500;
    font-size: 100px;
    line-height: 90px;
    color: #0a4595;
`;

const _ContentLine = styled.div`
    width: 100px;
    height: 2px;
    background: #b6b6b6;
    border-radius: 100px;
    margin: 25px 0px 25px 0px;
`;

const _ErrorMessage = styled.p`
    font-weight: 400;
    font-size: 35px;
    color: #343434;
    line-height: 40px;
`;
