import * as T from '@packages/preview/index';

export function ArrIntoJsx(value: any) {
    switch (value.tagType) {
        case 'Text': {
            if (value.grade == 1) {
                return <T.Template_Text grade={1} text1={value.innerText} color={value.color} />;
            }
            if (value.grade == 2) {
                return (
                    <T.Template_Text
                        grade={value.grade}
                        text1={value.innerText[0]}
                        text2={value.innerText[1]}
                        color={value.color}
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
                        topText1={value.innerText[0][0]}
                        bottomText1={value.innerText[0][1]}
                        color={value.color}
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
                    />
                );
            }
        }
        case 'Image': {
            if (value.grade == 1) {
                return <T.Template_Image grade={value.grade} url1={value.imageUrl[0]} />;
            }
            if (value.grade == 2) {
                return (
                    <T.Template_Image
                        grade={value.grade}
                        url1={value.imageUrl[0]}
                        url2={value.imageUrl[1]}
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
                    />
                );
            }
        }
        case 'ImageText': {
            return (
                <T.Template_ImageText
                    url={value.imageUrl}
                    topText={value.innerText[0]}
                    bottomText={value.innerText[1]}
                    color={value.color}
                />
            );
        }
        case 'TextImage': {
            return (
                <T.Template_TextImage
                    url={value.imageUrl}
                    topText={value.innerText[0]}
                    bottomText={value.innerText[1]}
                    color={value.color}
                />
            );
        }
        case 'Line': {
            return <T.Template_RowLine height={value.height} />;
        }
        case 'Gap': {
            return <T.Template_Gap height={value.height} />;
        }
        case 'List': {
            return (
                <T.Template_List title={value.title} list={value.innerText} color={value.color} />
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
                />
            );
        }
        case 'Link': {
            if (value.grade == 1) {
                return <T.Template_Link grade={value.grade} href1={value.linkUrl[0]} />;
            }
            if (value.grade == 2) {
                return (
                    <T.Template_Link
                        grade={value.grade}
                        href1={value.linkUrl[0]}
                        href2={value.linkUrl[1]}
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
}

export const Array_Text = ({ color, grade, text1, text2, text3 }: Array_Text_Type) => {
    if (grade == 1) {
        return {
            tagType: 'Text',
            grade: 1,
            innerText: [text1],
            color: color,
        };
    }
    if (grade == 2) {
        return {
            tagType: 'Text',
            grade: 2,
            innerText: [text1, text2],
            color: color,
        };
    }
    if (grade == 3) {
        return {
            tagType: 'Text',
            grade: 3,
            innerText: [text1, text2, text3],
            color: color,
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
}

export const Array_DoubleText = ({ color, grade, text1, text2, text3 }: Array_DoubleText_Type) => {
    if (grade == 1) {
        return {
            tagType: 'DoubleText',
            grade: 1,
            innerText: [text1],
            color: color,
        };
    }
    if (grade == 2) {
        return {
            tagType: 'DoubleText',
            grade: 2,
            innerText: [text1, text2],
            color: color,
        };
    }
    if (grade == 3) {
        return {
            tagType: 'DoubleText',
            grade: 3,
            innerText: [text1, text2, text3],
            color: color,
        };
    }
};

interface Array_Image_Type {
    grade: number;
    url1: string;
    url2?: string;
    url3?: string;
}

export const Array_Image = ({ grade, url1, url2, url3 }: Array_Image_Type) => {
    if (grade == 1) {
        return {
            tagType: 'Image',
            grade: 1,
            imageUrl: [url1],
        };
    }
    if (grade == 2) {
        return {
            tagType: 'Image',
            grade: 2,
            imageUrl: [url1, url2],
        };
    }
    if (grade == 3) {
        return {
            tagType: 'Image',
            grade: 3,
            imageUrl: [url1, url2, url3],
        };
    }
};

interface Array_ImageText_Type {
    color: string;
    url: string;
    text: string[];
}

export const Array_ImageText = ({ color, url, text }: Array_ImageText_Type) => {
    return {
        tagType: 'ImageText',
        imageUrl: url,
        innerText: text,
        color: color,
    };
};

interface Array_TextImage_Type {
    color: string;
    url: string;
    text: string[];
}

export const Array_TextImage = ({ color, url, text }: Array_TextImage_Type) => {
    return {
        tagType: 'TextImage',
        imageUrl: url,
        innerText: text,
        color: color,
    };
};

interface Array_Line_Type {
    height: number;
}

export const Array_Line = ({ height }: Array_Line_Type) => {
    return {
        tagType: 'Line',
        height: height,
    };
};

interface Array_Gap_Type {
    height: number;
}

export const Array_Gap = ({ height }: Array_Gap_Type) => {
    return {
        tagType: 'Gap',
        height: height,
    };
};

interface Array_List_Type {
    color: string;
    grade: number;
    title: string;
    list: string[];
}

export const Array_List = ({ color, grade, title, list }: Array_List_Type) => {
    return {
        tagType: 'List',
        grade: grade,
        title: title,
        innerText: list,
        color: color,
    };
};

interface Array_Profile_Type {
    github: string;
    imgurl: string;
    name?: string;
    email?: string;
    phone?: string;
}

export const Array_Profile = ({ github, imgurl, name, email, phone }: Array_Profile_Type) => {
    return {
        tagType: 'Profile',
        github: github,
        name: name,
        email: email,
        phone: phone,
        imageUrl: imgurl,
    };
};

interface Array_Link_Type {
    grade: number;
    url1: string;
    url2?: string;
    url3?: string;
}

export const Array_Link = ({ grade, url1, url2, url3 }: Array_Link_Type) => {
    if (grade == 1) {
        return {
            tagType: 'Link',
            grade: 1,
            linkUrl: [url1],
        };
    }
    if (grade == 2) {
        return {
            tagType: 'Link',
            grade: 2,
            linkUrl: [url1, url2],
        };
    }
    if (grade == 3) {
        return {
            tagType: 'Link',
            grade: 3,
            linkUrl: [url1, url2, url3],
        };
    }
};
