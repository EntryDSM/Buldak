import { instance } from './axios';

interface ImageProps{
    image_path:string
}

export const changeImageToUrl = async (formdata: FormData):Promise<ImageProps> => {
    try {
        return (await instance.post('/images?type=PROFILE', formdata)).data;
    } catch (err) {
        throw err;
    }
};
