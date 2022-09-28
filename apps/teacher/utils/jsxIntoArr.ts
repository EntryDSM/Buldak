import {
    Array_DoubleText,
    Array_Gap,
    Array_Image,
    Array_ImageText,
    Array_Line,
    Array_List,
    Array_Profile,
    Array_Project,
    Array_Text,
    Array_TextImage,
} from '@packages/preview/functions/arrIntoJsx';

export function JsxIntoArr(value: any) {
    console.log('value', value);
    switch (value.args.tagType) {
        case 'Text': {
            return { preview: Array_Text, id: value.id, args: value.args };
        }
        case 'DoubleText': {
            return {
                // tagType: 'DoubleText',
                // image: value.image,
                // grade: 1,
                // innerText: data.text1,
                // color: data.color,
                // feedback: data.feedback,
                // isTeacher: false,
                // id: value.id,
                // preview: Array_DoubleText,
                // patch: value.patch,
                preview: Array_DoubleText,
                id: value.id,
                args: value.args,
            };
        }
        case 'Image': {
            return {
                // tagType: 'Image',
                // image: value.image,
                // grade: 1,
                // imageUrl: data.url1,
                // feedback: data.feedback,
                // isTeacher: false,
                // id: value.id,
                // preview: Array_Image,
                // patch: value.patch,
                preview: Array_Image,
                id: value.id,
                args: value.args,
            };
        }
        case 'Line': {
            return {
                // tagType: 'Line',
                // image: value.image,
                // height: data.height,
                // feedback: data.feedback,
                // isTeacher: false,
                // id: value.id,
                // preview: Array_Line,
                // patch: value.patch,
                preview: Array_Line,
                id: value.id,
                args: value.args,
            };
        }
        case 'Profile': {
            return {
                // tagType: 'Profile',
                // image: value.image,
                // github: data.github,
                // name: data.name,
                // email: data.email,
                // phone: data.phone,
                // imageUrl: data.imgurl,
                // feedback: data.feedback,
                // isTeacher: false,
                // id: value.id,
                // preview: Array_Profile,
                // patch: value.patch,
                preview: Array_Profile,
                id: value.id,
                args: value.args,
            };
        }
        case 'Gap': {
            return {
                // tagType: 'Gap',
                // image: value.image,
                // height: data.height,
                // feedback: data.feedback,
                // isTeacher: false,
                // id: value.id,
                // preview: Array_Gap,
                // patch: value.patch,
                preview: Array_Gap,
                id: value.id,
                args: value.args,
            };
        }
        case 'TextImage': {
            return {
                // tagType: 'TextImage',
                // image: value.image,
                // imageUrl: data.url,
                // innerText: data.text1,
                // color: data.color,
                // feedback: data.feedback,
                // isTeacher: false,
                // id: value.id,
                // preview: Array_TextImage,
                // patch: value.patch,
                preview: Array_TextImage,
                id: value.id,
                args: value.args,
            };
        }
        case 'ImageText': {
            return {
                // tagType: 'ImageText',
                // image: value.image,
                // imageUrl: data.url,
                // innerText: data.text1,
                // color: data.color,
                // feedback: data.feedback,
                // isTeacher: false,
                // id: value.id,
                // preview: Array_ImageText,
                // patch: value.patch,
                preview: Array_ImageText,
                id: value.id,
                args: value.args,
            };
        }
        case 'List': {
            return {
                // tagType: 'List',
                // innerText: data.text,
                // image: value.image,
                // color: data.color,
                // feedback: data.feedback,
                // isTeacher: false,
                // id: value.id,
                // preview: Array_List,
                // patch: value.patch,
                preview: Array_List,
                id: value.id,
                args: value.args,
            };
        }
        case 'Project': {
            return {
                preview: Array_Project,
                id: value.id,
                args: value.args,
            };
        }
    }
}
