import PatchElementWrapper from './Wrapper';
import { Upload } from '../../../assets/Images';
import Image from 'next/image';

interface PropsType {
    id?: string;
}

function PatchUpload({ id }: PropsType) {
    return (
        <PatchElementWrapper name="이미지">
            <Image src={Upload} />
        </PatchElementWrapper>
    );
}

export default PatchUpload;