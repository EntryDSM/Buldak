import { StyleProvider } from '@packages/emotion-style-provider';
import type { AppProps } from 'next/app';
import ModalProvider from '../context/ModalContext';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ModalProvider>
            <StyleProvider>
                <Component {...pageProps} />
            </StyleProvider>
        </ModalProvider>
    );
}
