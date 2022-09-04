import { useState } from 'react';
import { readAllBlocks } from '../api/blocks';
import { EachStudentType, SearchProps, StudentsListResponseType } from '../types';

export const useList = () => {
    const [listState, setList] = useState(readAllBlocks());
    const getState = (): Promise<EachStudentType[]> => {
        return listState.then((data) => data.student_list);
    };
    const searchList = ({ search = 'null', major = 'null', classnum = 'null' }: SearchProps) => {
        return getState().then((result) => {
            result.filter((value) => {
                if (
                    value.name.includes(search) &&
                    (value.gcn.slice(1, 2) == classnum || classnum == 'null') &&
                    (value.major == major || major == 'null')
                ) {
                    return value;
                }
            });
        });
    };

    return { getState , searchList };
};
