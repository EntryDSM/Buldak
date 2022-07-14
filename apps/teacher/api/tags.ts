import { CreateTagRequest } from '../models/tags/requests';
import { SearchTagResponse } from '../models/tags/responses';
import { instance } from './axios';

export const searchTag = async (name: string, isMajor: boolean): Promise<SearchTagResponse> => {
    try {
        return await instance.get(`/tags?name=${name}&isMajor=${isMajor}`);
    } catch (err) {
        throw err;
    }
};
export const createTag = async (body: CreateTagRequest) => {
    try {
        await instance.post('/tags', body);
    } catch (err) {
        throw err;
    }
};
export const deleteTag = async (tag_id: string) => {
    try {
        await instance.delete(`/tags/${tag_id}`);
    } catch (err) {
        throw err;
    }
};
