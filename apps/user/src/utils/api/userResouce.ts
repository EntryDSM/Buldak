import { QueryFunction, QueryFunctionContext } from 'react-query';
import { queryKey } from '../queryKey';
import { instance } from './instance';

export interface InformationResourceType {
    grade: number;
    class_num: number;
    number: number;
    name: string;
    phone_number: string;
    email: string;
    location: string;
    profile_image_path: string;
    skill_tag_list: { id: string; name: string }[];
    major_tag: string;
    student_id: string;
}

export const myInfomationResource = {
    queryKey: queryKey.students.index(),
    queryFn: async () => {
        return (await instance.get<InformationResourceType>(queryKey.students.index())).data;
    },
};

export type DocumentInfoType = 'document_id' | 'preview_image_path' | 'name' | 'major';

export interface LocalListResourceType {
    document_list: Record<DocumentInfoType, string>[];
}

export const localListResource = {
    queryKey: queryKey.documents.lists(),
    queryFn: async () => {
        return (await instance.get<LocalListResourceType>(queryKey.documents.lists())).data;
    },
};

// export const phoneNumberCertificationResource={

// }

// export const emailCertificationCodeResource = {

// }

// export const phoneNumberCertificationCodeResource={

// }

// export const verifyCertificationCodeResource = {

// }
export type TagParams = 'tag_id' | 'name';
export type TagListParams = Record<TagParams, string>[];
export const queryTagResource = async (context: QueryFunctionContext<string, any>) => {
    return (await instance.get<{ tag_list: TagListParams }>(context.queryKey[0])).data;
};

export const qeuryPublicDoucumentResource = {};

export const getPublicDoucumentLinkResource = {};

export const queryLocalDocumentResource = {};

export const queryLocalDocumentListResource = {};

export const queryStayDocumentResource = {};

export const previewDocumentsResoucre = {};

export const queryCertificationCodeValidation = async (
    context: QueryFunctionContext<string, any>,
) => {
    return (await instance.head(context.queryKey[0])).data;
};

type DocumentType = 'STAY' | 'PUBLIC';

export interface PreviewPublicStayDocument {
    document_list: {
        type: DocumentType;
        preview_image_path: string;
    }[];
}

export const queryPreviewPublicStayDocument = async (
    context: QueryFunctionContext<string, any>,
) => {
    return (await instance.get<PreviewPublicStayDocument>(context.queryKey[0])).data;
};
