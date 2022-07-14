import { CreateImageRequest, CreateImageResponse } from '../models/default';
import { instance } from './axios';

type CreateImageType = 'PROFILE' | 'PREVIEW';

export const createImage = async (
    type: CreateImageType,
    body: CreateImageRequest,
): Promise<CreateImageResponse> => {
    try {
        return await instance.post(`/images?type=${type}`, body);
    } catch (err) {
        throw err;
    }
};
