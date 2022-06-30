import { Global } from '@emotion/react';
import { AppProps } from 'next/app';
import { StyleProvider } from '../../../packages/emotion-style-provider/src/index';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <StyleProvider>
            <Component {...pageProps} />
        </StyleProvider>
    );
}
