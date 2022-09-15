import PatchElementWrapper from './Wrapper';
import { UploadImg } from '../../../assets/Images';
import Image from 'next/image';

interface PropsType{
    id?:string;
}

function PatchUpload({id}:PropsType) {
    return (
        <PatchElementWrapper name="이미지">
            <Image src={UploadImg} />
        </PatchElementWrapper>
    );
}

export default PatchUpload;