import AddElementDefault from '../assets/svgs/AddElementDefault';
import AddElementImage from '../assets/svgs/AddElementImage';
import AddElementImageText from '../assets/svgs/AddElementImageText';
import AddElementLine from '../assets/svgs/AddElementLine';
import AddElementList from '../assets/svgs/AddElementList';
import AddElementTextImage from '../assets/svgs/AddElementTextImage';
import AddElementBanner from '../assets/svgs/AddElementBanner';
import AddElementBlank from '../assets/svgs/AddElementBlank';
import AddElementBtn from '../assets/svgs/AddElementBtn';
import Color from '../components/pageEditer/patch/Color';
import Upload from '../components/pageEditer/patch/Upload';
import Height from '../components/pageEditer/patch/Height';
import {
    Array_DoubleText,
    Array_Text,
    Array_Gap,
    Array_Image,
    Array_ImageText,
    Array_Line,
    Array_List,
    Array_Profile,
    Array_TextImage,
} from '@packages/preview/functions/arrIntoJsx';
import PatchSingleTitle from '../components/pageEditer/patch/SingleTItle';
import PatchTitle from '../components/pageEditer/patch/Title';
import PatchSubtitle from '../components/pageEditer/patch/SubTItle';
import ProfilePatch from '../components/pageEditer/patch/Profile';
import PatchDoubleColor from '../components/pageEditer/patch/DoubleColor';

export const ElementList = [
    {
        image: <AddElementBanner />,
        text: '텍스트',
        patch: [<Color type={'텍스트 색상'} />, <PatchSingleTitle type="제목" />],
        preview: Array_Text,
        args: { grade: 1, text1: '기본값입니다.', color: '#000000' },
    },
    {
        image: <AddElementBtn />,
        text: '2단 텍스트',
        patch: [
            <PatchDoubleColor />,
            <PatchTitle type="1단 제목" />,
            <PatchSubtitle type="1단 본문" />,
        ],
        preview: Array_DoubleText,
        args: {
            grade: 1,
            text1: ['기본값입니다.', '기본값2입니다.'],
            color: ['#000000', '#000000'],
        },
    },
    {
        image: <AddElementImage />,
        text: '이미지',
        patch: [<Upload />],
        preview: Array_Image,
        args: { grade: 1, url1: '' },
    },
    {
        image: <AddElementLine />,
        text: '구분선',
        patch: [<Height />],
        preview: Array_Line,
        args: { height: 50 },
    },
    {
        image: <AddElementDefault />,
        text: '기본 프로필',
        patch: [<ProfilePatch />],
        preview: Array_Profile,
        args: { name: '', email: '', phone: '', github: '', imageUrl: '' },
    },
    {
        image: <AddElementBlank />,
        text: '여백',
        patch: [<Height />],
        preview: Array_Gap,
        args: { height: 100 },
    },
    {
        image: <AddElementTextImage />,
        text: '텍스트 + 이미지',
        patch: [<Upload />, <Color type={'텍스트 색상'} />,<PatchSingleTitle type='텍스트'/>],
        preview: Array_TextImage,
        args: { url: 'qdw', text: ['dwqqw'], color: '#000000' },
    },
    {
        image: <AddElementImageText />,
        text: '이미지 + 텍스트',
        patch: [<Upload />, <Color type={'텍스트 색상'} />,<PatchSingleTitle type='텍스트'/>],
        preview: Array_ImageText,
        args: { url: 'qdw', text: ['dwqqw'], color: '#000000' },
    },
    {
        image: <AddElementList />,
        text: '리스트',
        patch: [<Color type={'텍스트 색상'} />,],
        preview: Array_List,
        args: { grade: 3, title: 'dwq', list: ['dwqqwd'], color: '#000000' },
    },
];
