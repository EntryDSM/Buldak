import { ElementList } from './ElementList';

export function JsxIntoArr(value: any) {
    switch (value.args.tagType) {
        case 'Text': {
            return {
                ...ElementList[0],
                id: value.id,
                args: value.args,
            };
        }
        case 'DoubleText': {
            return {
                ...ElementList[1],
                id: value.id,
                args: value.args,
            };
        }
        case 'Image': {
            return {
                ...ElementList[2],
                id: value.id,
                args: value.args,
            };
        }
        case 'ImageText': {
            return {
                ...ElementList[7],
                id: value.id,
                args: value.args,
            };
        }
        case 'TextImage': {
            return {
                ...ElementList[6],
                id: value.id,
                args: value.args,
            };
        }
        case 'Line': {
            return {
                ...ElementList[3],
                id: value.id,
                args: value.args,
            };
        }
        case 'Gap': {
            return {
                ...ElementList[5],

                id: value.id,
                args: value.args,
            };
        }
        case 'List': {
            return {
                ...ElementList[8],

                id: value.id,
                args: value.args,
            };
        }
        case 'Profile': {
            return {
                ...ElementList[4],

                id: value.id,
                args: value.args,
            };
        }
        default: {
            return;
        }
    }
}
