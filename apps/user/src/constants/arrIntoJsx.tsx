import * as T from '@packages/preview';

function ArrIntoJsx(value: any) {
    switch (value.tagType) {
        case 'Text': {
            if (value.grade == 1) {
                return (
                    <>
                        <T.Template_Text
                            grade={1}
                            text1={value.innerText[0]}
                            feedback={value.feedBack}
                        />
                    </>
                );
            }
            if (value.grade == 2) {
                return (
                    <T.Template_Text
                        grade={value.grade}
                        text1={value.innerText[0]}
                        text2={value.innerText[1]}
                        feedback={value.feedBack}
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
                        feedback={value.feedBack}
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
                        feedback={value.feedBack}
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
                        feedback={value.feedBack}
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
                        feedback={value.feedBack}
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
                        feedback={value.feedBack}
                    />
                );
            }
            if (value.grade == 2) {
                return (
                    <T.Template_Image
                        grade={value.grade}
                        url1={value.imageUrl[0]}
                        url2={value.imageUrl[1]}
                        feedback={value.feedBack}
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
                        feedback={value.feedBack}
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
                    feedback={value.feedBack}
                />
            );
        }
        case 'TextImage': {
            return (
                <T.Template_TextImage
                    url={value.imageUrl}
                    topText={value.innerText[0]}
                    bottomText={value.innerText[1]}
                    feedback={value.feedBack}
                />
            );
        }
        case 'Line': {
            return <T.Template_RowLine height={value.height} feedback={value.feedBack} />;
        }
        case 'Gap': {
            return <T.Template_Gap height={value.height} feedback={value.feedBack} />;
        }
        case 'List': {
            return (
                <T.Template_List title={value.title} list={value.list} feedback={value.feedBack} />
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
                    feedback={value.feedBack}
                />
            );
        }
        case 'Link': {
            if (value.grade == 1) {
                return (
                    <T.Template_Link
                        grade={value.grade}
                        href1={value.linkUrl[0]}
                        feedback={value.feedBack}
                    />
                );
            }
            if (value.grade == 2) {
                return (
                    <T.Template_Link
                        grade={value.grade}
                        href1={value.linkUrl[0]}
                        href2={value.linkUrl[1]}
                        feedback={value.feedBack}
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
                        feedback={value.feedBack}
                    />
                );
            }
        }
        default: {
            return;
        }
    }
}

export default ArrIntoJsx;
