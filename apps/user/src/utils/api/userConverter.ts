import { queryKey } from '../queryKey';
import { instance } from './instance';

export const profileImageConverter = (image: File) => {
    const converterKey = queryKey.images('PROFILE');
    const formData = new FormData();
    formData.append('file', image);
    return instance.post(converterKey, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
};

type StudentInformationConverterParamsKey =
    | 'location'
    | 'name'
    | 'phone_number'
    | 'profile_image_path';

export type StudentInformationConverterParams = Record<
    StudentInformationConverterParamsKey,
    string
>;

export const studentInformationConverter = (params: StudentInformationConverterParams) => {
    const converterKey = queryKey.users.information();
    return instance.patch(converterKey, params);
};

export const tagDeleteConverter = (tag_id: string) => {
    const converterKey = queryKey.tags.myTag(tag_id);
    return instance.delete(converterKey);
};

export const tagSettingConverter = (tag_list: string[]) => {
    const converterKey = queryKey.tags.mySkill();
    return instance.post(converterKey, { tag_list: tag_list });
};

export const majorTagConverter = (tag_id: string) => {
    const converterKey = queryKey.tags.major();
    return instance.patch(converterKey, { tag_id: tag_id });
};
