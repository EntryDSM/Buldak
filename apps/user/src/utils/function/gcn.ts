import classNumberValidate from "./classNumberValidate"

export const gcnConverter = (grade?: number, classNum?: number, number?: number) => {
    return grade && classNum && number && `${grade}${classNum}${classNumberValidate(number) }`;
};
