import styled from '@emotion/styled';
import { useState } from 'react';
import Header from '../../components/header/Header';
import AddElement from '../../components/pageEditer/AddElement';
import AsideBar from '../../components/pageEditer/AsideBar';
import ShowPage from '../../components/pageEditer/ShowPage';

function PageEditer() {
    const [elementDropDown, setElementDropDown] = useState(false);
    return (
        <>
            <Header />
            <PageEditerBox>
                <AsideBar setElementDropDown={setElementDropDown} />
                <ShowPage />
                {elementDropDown && <AddElement setElementDropDown={setElementDropDown} />}
            </PageEditerBox>
        </>
    );
}

const PageEditerBox = styled.div`
    display: flex;
    padding-top: 70px;
`;

export default PageEditer;
