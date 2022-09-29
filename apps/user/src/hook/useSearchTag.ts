import { useQuery } from 'react-query';
import { queryTagResource } from '../utils/api/userResouce';
import { queryKey } from '../utils/queryKey';

const useSearchTag = (autoComplate: string = '', isMajor: boolean) => {
    const key = queryKey.tags.index(autoComplate, isMajor);
    return useQuery(key, queryTagResource);
};

export default useSearchTag;
