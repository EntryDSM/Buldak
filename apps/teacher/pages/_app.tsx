import { StyleProvider } from '@packages/emotion-style-provider';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import ModalProvider from '../context/ModalContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FilterProvider from '../context/FilterContext';

export default function MyApp({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                staleTime: 10000,
            },
        },
    });
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <ModalProvider>
                    <FilterProvider>
                        <StyleProvider>
                            <Component {...pageProps} />
                            <ToastContainer />
                        </StyleProvider>
                    </FilterProvider>
                </ModalProvider>
            </Hydrate>
        </QueryClientProvider>
    );
}
