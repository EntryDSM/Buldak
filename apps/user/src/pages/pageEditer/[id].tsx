import { useRouter } from 'next/router';
import { useState } from 'react';
import Header from '../../components/header/Header';
import AddElement from '../../components/pageEditer/AddModal';
import AsideBox from '../../components/pageEditer/aside/Box';
import PageArea from '../../components/pageEditer/view/PageArea';

function PageEditer() {
    const [elementDropDown, setElementDropDown] = useState<boolean>(false);
    const router = useRouter();
    return (
        <>
            <Header />
            {!router.query.public && <AsideBox setElementDropDown={setElementDropDown} />}
            {elementDropDown && <AddElement setElementDropDown={setElementDropDown} />}
            <PageArea />
        </>
    );
}

export default PageEditer;
