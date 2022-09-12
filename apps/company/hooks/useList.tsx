import { FC, useState } from 'react';
import { readAllBlocks } from '../api/blocks';
import { EachStudentType, SearchProps, StudentsListResponseType } from '../types';

export const useList = () => {
    const [listState, setList] = useState(readAllBlocks());
    const getState = (): Promise<EachStudentType[]> => {
        return listState.then((data) => data.student_list);
    };
    const searchList = (searchP = '', majorP = '', classnumP = '') => {
        const search = searchP;
        const major = majorP == '전체' ? '' : majorP;
        const classnum = classnumP == '전체' ? '' : classnumP;
        return getState().then((result) => {
            result.filter((value) => {
                if (
                    value.name.includes(search) &&
                    (value.gcn.slice(1, 2) == classnum || !classnum) &&
                    (value.major == major || !major)
                ) {
                    return value;
                }
            });
        });
    };

    return { getState, searchList };
};
