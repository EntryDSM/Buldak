import { useQuery, UseQueryOptions } from 'react-query';
import { Resource } from '../pages/_app';

type ExtractReturnType<P> = P extends Promise<infer T> ? T : never;

export const useResource = <T>(resource: Resource<T>) => {
    const data = useQuery<T>(resource.queryKey, resource.queryFn);
    return data;
};
