import EditerBanner from "../assets/svgs/EditerBanner";
import EditerDoubleText from "../assets/svgs/EditerDoubleText";
import EditerImage from "../assets/svgs/EditerImage";
import EditerText from "../assets/svgs/EditerText";

const CompositionList = [
    {
        image: <EditerText />,
        text: '텍스트',
    },
    {
        image: <EditerDoubleText />,
        text: '2단 텍스트',
    },
    {
        image: <EditerImage />,
        text: '이미지',
    },
    {
        image: <EditerBanner />,
        text: '배너',
    },
];

export default CompositionList;
