export const Array_Text = (grade: number, text1: string, text2?: string, text3?: string) => {
    if (grade == 1) {
        return {
            tagType: 'Text',
            grade: 1,
            innerText: [text1],
        };
    }
    if (grade == 2) {
        return {
            tagType: 'Text',
            grade: 2,
            innerText: [text1, text2],
        };
    }
    if (grade == 3) {
        return {
            tagType: 'Text',
            grade: 3,
            innerText: [text1, text2, text3],
        };
    }
    return null;
};

export const Array_DoubleText = (
    grade: number,
    text1: string[],
    text2?: string[],
    text3?: string[],
) => {
    if (grade == 1) {
        return {
            tagType: 'DoubleText',
            grade: 1,
            innerText: [text1],
        };
    }
    if (grade == 2) {
        return {
            tagType: 'DoubleText',
            grade: 2,
            innerText: [text1, text2],
        };
    }
    if (grade == 3) {
        return {
            tagType: 'DoubleText',
            grade: 3,
            innerText: [text1, text2, text3],
        };
    }
};

export const Array_Image = (grade: number, url1: string, url2?: string, url3?: string) => {
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

export const Array_ImageText = (url: string, text: string[]) => {
    return {
        tagType: 'ImageText',
        imageUrl: url,
        innerText: text,
    };
};

export const Array_TextImage = (url: string, text: string[]) => {
    return {
        tagType: 'TextImage',
        imageUrl: url,
        innerText: text,
    };
};

export const Array_Line = (height: number) => {
    return {
        tagType: 'Line',
        height: height,
    };
};

export const Array_Gap = (height: number) => {
    return {
        tagType: 'Gap',
        height: height,
    };
};

export const Array_List = (grade: number, title: string, list: string[]) => {
    return {
        tagType: 'List',
        grade: grade,
        title: title,
        innerText: list,
    };
};

export const Array_Profile = (
    github: string,
    imgurl: string,
    name?: string,
    email?: string,
    phone?: string,
) => {
    return {
        tagType: 'Profile',
        github: github,
        name: name,
        email: email,
        phone: phone,
        imageUrl: imgurl,
    };
};

export const Array_Link = (grade: number, url1: string, url2?: string, url3?: string) => {
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

export const TestArr = [
    Array_Profile('test.git',"asdf", '이경수', 'justinlee05@naver.com', '010-7123-2280'),
    Array_Profile('test.git',"asdf", '이경수', 'justinlee05@naver.com', '010-7123-2280'),
    Array_Profile('test.git',"asdf", '이경수', 'justinlee05@naver.com', '010-7123-2280'),
    Array_Profile('test.git',"asdf", '이경수', 'justinlee05@naver.com', '010-7123-2280'),
    Array_Profile('test.git',"asdf", '이경수', 'justinlee05@naver.com', '010-7123-2280'),
    Array_Profile('test.git',"asdf", '이경수', 'justinlee05@naver.com', '010-7123-2280'),
    Array_Profile('test.git',"asdf", '이경수', 'justinlee05@naver.com', '010-7123-2280'),
    Array_Profile('test.git',"asdf", '이경수', 'justinlee05@naver.com', '010-7123-2280'),
    Array_Profile('test.git',"asdf", '이경수', 'justinlee05@naver.com', '010-7123-2280'),
    Array_Profile('test.git',"asdf", '이경수', 'justinlee05@naver.com', '010-7123-2280'),
    Array_Profile('test.git',"asdf", '이경수', 'justinlee05@naver.com', '010-7123-2280'),
    Array_Profile('test.git',"asdf", '이경수', 'justinlee05@naver.com', '010-7123-2280'),
    Array_ImageText('asdf', ['testtitle,testinfo']),
    Array_DoubleText(3, ['test1', 'te1'], ['test2', 'te2'], ['test3', 'te3']),
    Array_DoubleText(3, ['test1', 'te1'], ['test2', 'te2'], ['test3', 'te3']),
    Array_DoubleText(3, ['test1', 'te1'], ['test2', 'te2'], ['test3', 'te3']),
    Array_DoubleText(3, ['test1', 'te1'], ['test2', 'te2'], ['test3', 'te3']),
    Array_DoubleText(3, ['test1', 'te1'], ['test2', 'te2'], ['test3', 'te3']),
    Array_DoubleText(2, ['test1', 'te1'], ['test2', 'te2']),
    Array_Gap(70),
    Array_Line(50),
];
