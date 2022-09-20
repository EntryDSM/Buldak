import { StyleProvider } from '@packages/emotion-style-provider';
import { NextComponentType, NextPageContext } from 'next';
import type { AppContext, AppProps } from 'next/app';
import React, { useState } from 'react';
import { dehydrate, Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';

export default function MyApp({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: { retry: 0, refetchInterval: 0, refetchOnWindowFocus: false },
                },
            }),
    );
    return (
        <StyleProvider>
            <QueryClientProvider client={queryClient}>
                <RecoilRoot>
                    <Hydrate state={pageProps?.dehydratedState}>
                        <Component {...pageProps} />
                    </Hydrate>
                </RecoilRoot>
                <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
            </QueryClientProvider>
        </StyleProvider>
    );
}

export interface Resource<T> {
    queryKey: string;
    queryFn: () => Promise<T>;
}

interface CustomComponent<T = any> {
    Component: NextComponentType<NextPageContext> & {
        requiredResources: ReadonlyArray<Resource<T>>;
    };
}

MyApp.getInitialProps = async ({
    Component,
    ctx,
}: Omit<AppContext, 'Component'> & CustomComponent) => {
    let pageProps;
    const queryClient = new QueryClient();
    const { requiredResources } = Component;
    requiredResources?.length &&
        (await Promise.all(
            requiredResources.map((resource) =>
                queryClient.prefetchQuery(resource.queryKey, resource.queryFn),
            ),
        ));

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps: { ...pageProps, dehydratedState: dehydrate(queryClient) } };
};
