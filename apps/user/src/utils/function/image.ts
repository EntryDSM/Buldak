import { ImageProps } from 'next/image';
import { instance } from '../api/instance';

interface ImgProps{
    image_path:string;
}

export const changeImageToUrl = async (formdata: FormData): Promise<ImgProps> => {
    try {
        return (await instance.post('/images?type=PROFILE', formdata)).data;
    } catch (err) {
        throw err;
    }
};
