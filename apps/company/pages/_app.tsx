import { StyleProvider } from '@packages/emotion-style-provider';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function MyApp({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient();
    return (
        <StyleProvider>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </StyleProvider>
    );
}
