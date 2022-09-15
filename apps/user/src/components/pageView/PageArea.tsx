import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { TestArr } from '../../constants/elements';
import Header from './Header';
import Pages from './Pages';

function PageArea() {
    const [zoom, setZoom] = useState<number>(100);
    const [templateArr, setTemplateArr] = useState(TestArr);
    const zoomUp = () => {
        if (zoom < 200) setZoom(zoom + 10);
    };
    const zoomDown = () => {
        if (zoom > 60) setZoom(zoom - 10);
    };
    return (
        <Background>
            <Header zoom={zoom} zoomUp={zoomUp} zoomDown={zoomDown} />
            <Pages zoom={zoom} templateArr={templateArr} />
        </Background>
    );
}

const Background = styled.div`
    background-color: #fbfbfb;
    min-height: 100vh;
    height: fit-content;
    width: 100%;
    min-height:100vh;
    height:fit-content;
    overflow-x: scroll;
    padding-left: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default PageArea;
