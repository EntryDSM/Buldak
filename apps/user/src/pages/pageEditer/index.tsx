import styled from '@emotion/styled';
import { useState } from 'react';
import Header from '../../components/header/Header';
import AddElement from '../../components/pageEditer/AddElementModal';
import AsideBar from '../../components/pageEditer/AsideBar';
import ShowPage from '../../components/pageEditer/ShowPage';

function PageEditer() {
    const [elementDropDown, setElementDropDown] = useState(false);
    return (
        <>
            <Header />
            <AsideBar setElementDropDown={setElementDropDown} />
            <ShowPage />
            {elementDropDown && <AddElement setElementDropDown={setElementDropDown} />}
        </>
    );
}

export default PageEditer;