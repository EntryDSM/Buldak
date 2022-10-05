import { ClassNumValue, DocumentStatusValue, GradeValue } from '../models/teachers/requests';
import { FilterProps } from '../pages';
import { createContext, Dispatch, FunctionComponent, useReducer } from 'react';

type FilterType = 'grade' | 'classNum' | 'docStatus';

type ChangeFilterAction = {
    type: 'CHANGE';
    name: FilterType;
    value: GradeValue | ClassNumValue | DocumentStatusValue;
};

type ResetFilterAction = {
    type: 'RESET';
};

type ActionTypes = ChangeFilterAction | ResetFilterAction;

const filterDefaultValue: FilterProps = {
    grade: null,
    classNum: null,
    docStatus: null,
};

export const FilterStateContext = createContext<FilterProps>(filterDefaultValue);

type ChangeFilterDispatch = Dispatch<ActionTypes>;
export const FilterDispatchContext = createContext<ChangeFilterDispatch>(() => null);

const FilterProvider: FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
    const [filterState, changeFilterDispatch] = useReducer(filterReducer, filterDefaultValue);
    return (
        <FilterStateContext.Provider value={filterState}>
            <FilterDispatchContext.Provider value={changeFilterDispatch}>
                {children}
            </FilterDispatchContext.Provider>
        </FilterStateContext.Provider>
    );
};
const filterReducer = (state: FilterProps, action: ActionTypes): FilterProps => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                [action.name]: action.value,
            };
        case 'RESET':
            return {
                grade: null,
                classNum: null,
                docStatus: null,
            };
        default:
            return state;
    }
};

export default FilterProvider;
