import { StyleProvider } from '@packages/emotion-style-provider';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import ModalProvider from '../context/ModalContext';

export default function MyApp({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                staleTime: Infinity,
            },
        },
    });
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <ModalProvider>
                    <StyleProvider>
                        <Component {...pageProps} />
                    </StyleProvider>
                </ModalProvider>
            </Hydrate>
        </QueryClientProvider>
    );
}
