import { StyleProvider } from '@packages/emotion-style-provider';
import { CookiesProvider } from 'react-cookie';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <StyleProvider>
            <CookiesProvider>
                <Component {...pageProps} />
            </CookiesProvider>
        </StyleProvider>
    );
}
