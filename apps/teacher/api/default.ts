import { CreateImageResponse } from '../models/default';
import { instance } from './axios';
import { toastHandler } from '../utils/toast';

export type CreateImageType = 'PROFILE' | 'PREVIEW';

export const createImage = async (
    type: CreateImageType,
    file: FormData,
): Promise<CreateImageResponse> => {
    try {
        const imagePath = await instance.post(`/images?type=${type}`, file).then((res) => {
            return res;
        });

        return imagePath.data;
    } catch (err) {
        throw err;
    }
};
