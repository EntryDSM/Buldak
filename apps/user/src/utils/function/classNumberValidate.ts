function classNumberValidate(classNumber:number) {
    return classNumber >= 10 ? classNumber :`0${classNumber}`;
}


export default classNumberValidate;