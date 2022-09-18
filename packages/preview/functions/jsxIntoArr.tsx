import {
    Array_DoubleText,
    Array_Gap,
    Array_Image,
    Array_ImageText,
    Array_Line,
    Array_List,
    Array_Profile,
    Array_Text,
    Array_TextImage,
} from './arrIntoJsx';

export function JsxIntoArr(value: any) {
    const data = value.args;
    switch (value.text) {
        case '텍스트': {
            return {
                tagType: 'Text',
                image: value.image,
                grade: 1,
                innerText: data.text1,
                color: data.color,
                feedback: data.feedback,
                isTeacher: false,
                id: value.id,
                patch: value.patch,
                preview: Array_Text,
            };
        }
        case '2단 텍스트': {
            return {
                tagType: 'DoubleText',
                image: value.image,
                grade: 1,
                innerText: data.text1,
                color: data.color,
                feedback: data.feedback,
                isTeacher: false,
                id: value.id,
                preview: Array_DoubleText,
                patch: value.patch,
            };
        }
        case '이미지': {
            return {
                tagType: 'Image',
                image: value.image,
                grade: 1,
                imageUrl: data.url1,
                feedback: data.feedback,
                isTeacher: false,
                id: value.id,
                preview: Array_Image,
                patch: value.patch,
            };
        }
        case '구분선': {
            return {
                tagType: 'Line',
                image: value.image,
                height: data.height,
                feedback: data.feedback,
                isTeacher: false,
                id: value.id,
                preview: Array_Line,
                patch: value.patch,
            };
        }
        case '기본 프로필': {
            return {
                tagType: 'Profile',
                image: value.image,
                github: data.github,
                name: data.name,
                email: data.email,
                phone: data.phone,
                imageUrl: data.imgurl,
                feedback: data.feedback,
                isTeacher: false,
                id: value.id,
                preview: Array_Profile,
                patch: value.patch,
            };
        }
        case '여백': {
            return {
                tagType: 'Gap',
                image: value.image,
                height: data.height,
                feedback: data.feedback,
                isTeacher: false,
                id: value.id,
                preview: Array_Gap,
                patch: value.patch,
            };
        }
        case '텍스트 + 이미지': {
            return {
                tagType: 'TextImage',
                image: value.image,
                imageUrl: data.url,
                innerText: data.text1,
                color: data.color,
                feedback: data.feedback,
                isTeacher: false,
                id: value.id,
                preview: Array_TextImage,
                patch: value.patch,
            };
        }
        case '이미지 + 텍스트': {
            return {
                tagType: 'ImageText',
                image: value.image,
                imageUrl: data.url,
                innerText: data.text1,
                color: data.color,
                feedback: data.feedback,
                isTeacher: false,
                id: value.id,
                preview: Array_ImageText,
                patch: value.patch,
            };
        }
        case '리스트': {
            return {
                tagType: 'List',
                innerText: data.text,
                image: value.image,
                color: data.color,
                feedback: data.feedback,
                isTeacher: false,
                id: value.id,
                preview: Array_List,
                patch: value.patch,
            };
        }
    }
}
