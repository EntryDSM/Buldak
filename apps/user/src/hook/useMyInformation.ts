import { useQuery } from 'react-query';
import { myInfomationResource } from '../utils/api/userResouce';

type ExtractReturnType<P> = P extends Promise<infer T> ? T : never;

const useMyInformation = () => {
    return useQuery<ExtractReturnType<ReturnType<typeof myInfomationResource['queryFn']>>>(
        myInfomationResource.queryKey,
        myInfomationResource.queryFn,
    );
};

export default useMyInformation;
