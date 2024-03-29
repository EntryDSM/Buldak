import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from './Header';
import Pages from './Pages';

function PageArea() {
    const router = useRouter();
    const [zoom, setZoom] = useState<number>(100);
    useEffect(() => {}, []);
    const zoomUp = () => {
        if (zoom < 200) setZoom(zoom + 10);
    };
    const zoomDown = () => {
        if (zoom > 60) setZoom(zoom - 10);
    };
    return (
        <Background style={{ paddingLeft: router.query.public ? '0px' : '350px' }}>
            <Header zoom={zoom} zoomUp={zoomUp} zoomDown={zoomDown} />
            <Pages zoom={zoom} />
        </Background>
    );
}
const Background = styled.div`
    background-color: #fbfbfb;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default PageArea;
