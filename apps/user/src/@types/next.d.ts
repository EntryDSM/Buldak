import 'next';
import { NextComponentType, NextPageContext } from 'next/dist/shared/lib/utils';
import { ComponentType } from 'react';

declare module 'next' {
    type NextPage<P = {}, IP = P> = NextComponentType<NextPageContext, IP, P> & {
        requiredResources?: {
            queryKey: string;
            queryFn: () => void;
        }[];
    };
}
