const departmentList = [
    '소프트웨어개발과',
    '소프트웨어개발과',
    '임배디드소프트웨어과',
    '정보보안과',
];

export const departmentConverter = (converterNumber?: number) => {
    return converterNumber && departmentList[converterNumber - 1];
};
