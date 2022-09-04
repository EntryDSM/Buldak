import PatchElementWrapper from './PatchElementWrapper';
import { Upload } from '../../../assets/Images';
import Image from 'next/image';

function UploadImage() {
    return (
        <PatchElementWrapper name="이미지">
            <Image src={Upload} />
        </PatchElementWrapper>
    );
}

export default UploadImage;
