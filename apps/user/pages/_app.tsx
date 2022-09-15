import { StyleProvider } from '@packages/emotion-style-provider';
import type { AppProps } from 'next/app';
import ReactModal from 'react-modal';
import { RecoilRoot } from 'recoil';

ReactModal.setAppElement('#__next');

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <StyleProvider>
            <RecoilRoot>
                <Component {...pageProps} />
            </RecoilRoot>``
        </StyleProvider>
    );
}
