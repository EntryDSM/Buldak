import AddElementDefault from '../assets/svgs/AddElementDefault';
import AddElementImage from '../assets/svgs/AddElementImage';
import AddElementImageText from '../assets/svgs/AddElementImageText';
import AddElementLine from '../assets/svgs/AddElementLine';
import AddElementList from '../assets/svgs/AddElementList';
import AddElementProject from '../assets/svgs/AddElementProject';
import AddElementTextImage from '../assets/svgs/AddElementTextImage';
import AddElementBanner from '../assets/svgs/AddElementBanner';
import AddElementBlank from '../assets/svgs/AddElementBlank';
import AddElementBtn from '../assets/svgs/AddElementBtn';

export const ElementList = [
    {
        image: <AddElementBanner />,
        text: '텍스트',
    },
    {
        image: <AddElementBtn />,
        text: '2단 텍스트',
    },
    {
        image: <AddElementBlank />,
        text: '버튼',
    },
    {
        image: <AddElementImage />,
        text: '이미지',
    },
    {
        image: <AddElementBanner />,
        text: '배너',
    },
    {
        image: <AddElementLine />,
        text: '구분선',
    },
    {
        image: <AddElementDefault />,
        text: '기본 프로필',
    },
    {
        image: <AddElementProject />,
        text: '프로젝트',
    },
    {
        image: <AddElementBlank />,
        text: '여백',
    },
    {
        image: <AddElementTextImage />,
        text: '텍스트 + 이미지',
    },
    {
        image: <AddElementImageText />,
        text: '이미지 + 텍스트',
    },
    {
        image: <AddElementList />,
        text: '리스트',
    },
];
