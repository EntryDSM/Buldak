import * as T from '@packages/preview/index';
interface Feedback {
    isRead: boolean;
    feedInfo: string;
}

export function ArrIntoJsx(value: any) {
    switch (value.tagType) {
        case 'Text': {
            if (value.grade == 1) {
                return (
                    <T.Template_Text
                        grade={1}
                        // text1={value.innerText}
                        text1={value.text1}
                        color={value.color}
                        feedback={value.feedback}
                        isTeacher={value.isTeacher}
                    />
                );
            }
            if (value.grade == 2) {
                return (
                    <T.Template_Text
                        grade={value.grade}
                        text1={value.innerText[0]}
                        text2={value.innerText[1]}
                        color={value.color}
                        feedback={value.feedback}
                        isTeacher={value.isTeacher}
                    />
                );
            }
            if (value.grade == 3) {
                return (
                    <T.Template_Text
                        grade={value.grade}
                        text1={value.innerText[0]}
                        text2={value.innerText[1]}
                        text3={value.innerText[2]}
                        color={value.color}
                        feedback={value.feedback}
                        isTeacher={value.isTeacher}
                    />
                );
            }
            break;
        }
        case 'DoubleText': {
            if (value.grade == 1) {
                return (
                    <T.Template_DoubleText
                        grade={value.grade}
                        // topText1={value.innerText[0][0]}
                        // bottomText1={value.innerText[0][1]}
                        topText1={value.text1[0]}
                        bottomText1={value.text1[1]}
                        color={value.color}
                        feedback={value.feedback}
                        isTeacher={value.isTeacher}
                    />
                );
            }
            if (value.grade == 2) {
                return (
                    <T.Template_DoubleText
                        grade={value.grade}
                        topText1={value.innerText[0][0]}
                        bottomText1={value.innerText[0][1]}
                        topText2={value.innerText[1][0]}
                        bottomText2={value.innerText[1][1]}
                        color={value.color}
                        feedback={value.feedback}
                        isTeacher={value.isTeacher}
                    />
                );
            }
            if (value.grade == 3) {
                return (
                    <T.Template_DoubleText
                        grade={value.grade}
                        topText1={value.innerText[0][0]}
                        bottomText1={value.innerText[0][1]}
                        topText2={value.innerText[1][0]}
                        bottomText2={value.innerText[1][1]}
                        topText3={value.innerText[2][0]}
                        bottomText3={value.innerText[2][1]}
                        color={value.color}
                        feedback={value.feedback}
                        isTeacher={value.isTeacher}
                    />
                );
            }
        }
        case 'Image': {
            if (value.grade == 1) {
                return (
                    <T.Template_Image
                        grade={value.grade}
                        url1={value.imageUrl[0]}
                        feedback={value.feedback}
                        isTeacher={value.isTeacher}
                    />
                );
            }
            if (value.grade == 2) {
                return (
                    <T.Template_Image
                        grade={value.grade}
                        url1={value.imageUrl[0]}
                        url2={value.imageUrl[1]}
                        feedback={value.feedback}
                        isTeacher={value.isTeacher}
                    />
                );
            }
            if (value.grade == 3) {
                return (
                    <T.Template_Image
                        grade={value.grade}
                        url1={value.imageUrl[0]}
                        url2={value.imageUrl[1]}
                        url3={value.imageUrl[2]}
                        feedback={value.feedback}
                        isTeacher={value.isTeacher}
                    />
                );
            }
        }
        case 'ImageText': {
            return (
                <T.Template_ImageText
                    url={value.imageUrl}
                    // topText={value.innerText[0]}
                    // bottomText={value.innerText[1]}
                    topText={value.text1[0]}
                    bottomText={value.text1[1]}
                    feedback={value.feedback}
                    isTeacher={value.isTeacher}
                />
            );
        }
        case 'TextImage': {
            return (
                <T.Template_TextImage
                    url={value.imageUrl}
                    // topText={value.innerText[0]}
                    // bottomText={value.innerText[1]}
                    topText={value.text1[0]}
                    bottomText={value.text1[1]}
                    feedback={value.feedback}
                    isTeacher={value.isTeacher}
                />
            );
        }
        case 'Line': {
            return (
                <T.Template_RowLine
                    height={value.height}
                    feedback={value.feedback}
                    isTeacher={value.isTeacher}
                />
            );
        }
        case 'Gap': {
            return (
                <T.Template_Gap
                    height={value.height}
                    feedback={value.feedback}
                    isTeacher={value.isTeacher}
                />
            );
        }
        case 'List': {
            return (
                <T.Template_List
                    text={value.text}
                    color={value.color}
                    feedback={value.feedback}
                    isTeacher={value.isTeacher}
                />
            );
        }
        case 'Profile': {
            return (
                <T.Template_DefProfile
                    name={value.name}
                    email={value.email}
                    github={value.github}
                    phone={value.phone}
                    url={value.imageUrl}
                    feedback={value.feedback}
                    isTeacher={value.isTeacher}
                />
            );
        }
        case 'Link': {
            if (value.grade == 1) {
                return (
                    <T.Template_Link
                        grade={value.grade}
                        href1={value.linkUrl[0]}
                        feedback={value.feedback}
                    />
                );
            }
            if (value.grade == 2) {
                return (
                    <T.Template_Link
                        grade={value.grade}
                        href1={value.linkUrl[0]}
                        href2={value.linkUrl[1]}
                        feedback={value.feedback}
                    />
                );
            }
            if (value.grade == 3) {
                return (
                    <T.Template_Link
                        grade={value.grade}
                        href1={value.linkUrl[0]}
                        href2={value.linkUrl[1]}
                        href3={value.linkUrl[2]}
                        feedback={value.feedback}
                    />
                );
            }
        }
        default: {
            return;
        }
    }
}

interface Array_Text_Type {
    color: string;
    grade: number;
    text1: string;
    text2?: string;
    text3?: string;
    feedback: Feedback;
    isTeacher?: boolean;
}

export const Array_Text = ({
    color,
    grade,
    text1,
    text2,
    text3,
    feedback,
    isTeacher = false,
}: Array_Text_Type) => {
    if (grade == 1) {
        return {
            // tagType: 'Text',
            // grade: 1,
            // innerText: [text1],
            // color: color,
            // feedback: feedback,
            // isTeacher: isTeacher,
            tagType: 'Text',
            grade: 1,
            text1: text1,
            color: color,
            feedback: { isRead: feedback.isRead, feedInfo: feedback.feedInfo },
            isTeacher: isTeacher,
        };
    }
    if (grade == 2) {
        return {
            tagType: 'Text',
            grade: 2,
            innerText: [text1, text2],
            color: color,
            feedback: feedback,
        };
    }
    if (grade == 3) {
        return {
            tagType: 'Text',
            grade: 3,
            innerText: [text1, text2, text3],
            color: color,
            feedback: feedback,
        };
    }
    return null;
};

interface Array_DoubleText_Type {
    color: string[];
    grade: number;
    text1: string[];
    text2?: string[];
    text3?: string[];
    feedback: Feedback;
    isTeacher?: boolean;
}

export const Array_DoubleText = ({
    color,
    grade,
    text1,
    text2,
    text3,
    feedback,
    isTeacher = false,
}: Array_DoubleText_Type) => {
    if (grade == 1) {
        return {
            // tagType: 'DoubleText',
            // grade: 1,
            // innerText: [text1],
            // color: color,
            // feedback: feedback,
            // isTeacher: isTeacher,
            tagType: 'DoubleText',
            grade: 1,
            text1: text1,
            color: color,
            feedback: { isRead: feedback.isRead, feedInfo: feedback.feedInfo },
            isTeacher: isTeacher,
        };
    }
    if (grade == 2) {
        return {
            tagType: 'DoubleText',
            grade: 2,
            innerText: [text1, text2],
            color: color,
            feedback: feedback,
        };
    }
    if (grade == 3) {
        return {
            tagType: 'DoubleText',
            grade: 3,
            innerText: [text1, text2, text3],
            color: color,
            feedback: feedback,
        };
    }
};

interface Array_Image_Type {
    grade: number;
    url1: string;
    url2?: string;
    url3?: string;
    feedback: Feedback;
    isTeacher?: boolean;
}

export const Array_Image = ({
    grade,
    url1,
    url2,
    url3,
    feedback,
    isTeacher = false,
}: Array_Image_Type) => {
    if (grade == 1) {
        return {
            tagType: 'Image',
            grade: 1,
            imageUrl: [url1],
            feedback: feedback,
            isTeacher: isTeacher,
        };
    }
    if (grade == 2) {
        return {
            tagType: 'Image',
            grade: 2,
            imageUrl: [url1, url2],
            feedback: feedback,
        };
    }
    if (grade == 3) {
        return {
            tagType: 'Image',
            grade: 3,
            imageUrl: [url1, url2, url3],
            feedback: feedback,
        };
    }
};

interface Array_ImageText_Type {
    url: string;
    text1: string[];
    feedback: Feedback;
    isTeacher?: boolean;
}

export const Array_ImageText = ({
    url,
    text1,
    feedback,
    isTeacher = false,
}: Array_ImageText_Type) => {
    return {
        tagType: 'ImageText',
        imageUrl: url,
        // innerText: text1,
        text1: text1,
        feedback: feedback,
        isTeacher: isTeacher,
    };
};

interface Array_TextImage_Type {
    url: string;
    text1: string[];
    feedback: Feedback;
    isTeacher?: boolean;
}

export const Array_TextImage = ({
    url,
    text1,
    feedback,
    isTeacher = false,
}: Array_TextImage_Type) => {
    return {
        tagType: 'TextImage',
        imageUrl: url,
        // innerText: text1,
        text1: text1,
        feedback: feedback,
        isTeacher: isTeacher,
    };
};

interface Array_Line_Type {
    height: number;
    feedback: Feedback;
    isTeacher?: boolean;
}

export const Array_Line = ({ height, feedback, isTeacher = false }: Array_Line_Type) => {
    return {
        tagType: 'Line',
        height: height,
        feedback: feedback,
        isTeacher: isTeacher,
    };
};

interface Array_Gap_Type {
    height: number;
    feedback: Feedback;
    isTeacher?: boolean;
}

export const Array_Gap = ({ height, feedback, isTeacher = false }: Array_Gap_Type) => {
    return {
        tagType: 'Gap',
        height: height,
        feedback: feedback,
        isTeacher: isTeacher,
    };
};

interface Array_List_Type {
    color: string;
    text: string;
    feedback: Feedback;
    isTeacher?: boolean;
}

export const Array_List = ({ color, text, feedback, isTeacher = false }: Array_List_Type) => {
    return {
        tagType: 'List',
        // innerText: text,
        text: text,
        color: color,
        feedback: feedback,
        isTeacher: isTeacher,
    };
};

interface Array_Profile_Type {
    github: string;
    imgurl: string;
    name?: string;
    email?: string;
    phone?: string;
    feedback: Feedback;
    isTeacher?: boolean;
}

const a = {
    tagType: 'Profile',
    name: '이름',
    email: '이메일',
    phone: '전화번호',
    github: 'https://github.com',
    imageUrl: '',
    feedback: { isRead: false, feedInfo: '' },
    isTeacher: false,
};

export const Array_Profile = ({
    github,
    imgurl,
    name,
    email,
    phone,
    feedback,
    isTeacher = false,
}: Array_Profile_Type) => {
    return {
        tagType: 'Profile',
        github: github,
        name: name,
        email: email,
        phone: phone,
        imageUrl: imgurl,
        feedback: feedback,
        isTeacher: isTeacher,
    };
};

interface Array_Link_Type {
    grade: number;
    url1: string;
    url2?: string;
    url3?: string;
    feedback: Feedback;
    isTeacher?: boolean;
}

export const Array_Link = ({
    grade,
    url1,
    url2,
    url3,
    feedback,
    isTeacher = false,
}: Array_Link_Type) => {
    if (grade == 1) {
        return {
            tagType: 'Link',
            grade: 1,
            linkUrl: [url1],
            feedback: feedback,
            isTeacher: isTeacher,
        };
    }
    if (grade == 2) {
        return {
            tagType: 'Link',
            grade: 2,
            linkUrl: [url1, url2],
            feedback: feedback,
        };
    }
    if (grade == 3) {
        return {
            tagType: 'Link',
            grade: 3,
            linkUrl: [url1, url2, url3],
            feedback: feedback,
        };
    }
};
