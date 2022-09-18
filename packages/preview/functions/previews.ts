import * as Arr from './arrIntoJsx';
export const Previews = (value: string) => {
    switch (value) {
        case 'Text': {
            return Arr.Array_Text;
        }
        case 'DoubleText': {
            return Arr.Array_DoubleText;
        }
        case 'Image': {
            return Arr.Array_Image;
        }
        case 'Line': {
            return Arr.Array_Line;
        }
        case 'Profile': {
            return Arr.Array_Profile;
        }
        case 'Gap': {
            return Arr.Array_Gap;
        }
        case 'TextImage': {
            return Arr.Array_TextImage;
        }
        case 'ImageText': {
            return Arr.Array_ImageText;
        }
        case 'List': {
            return Arr.Array_List;
        }
    }
};
