import { ElementList } from "../../constants/ElementList";

export function JsxIntoArr(value: any) {
    switch (value.args.tagType) {
        case 'Text': {
            return { ...ElementList[0], id: value.id, args: value.args };
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
                ...ElementList[1],
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
                ...ElementList[2],
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
                ...ElementList[3],
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
                ...ElementList[4],
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
                ...ElementList[5],
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
                ...ElementList[6],
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
                ...ElementList[7],
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
                ...ElementList[8],
                id: value.id,
                args: value.args,
            };
        }
    }
}
