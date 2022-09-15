---
to: apps/<%= name %>/pages/_app.tsx
---

import { StyleProvider } from '@packages/emotion-style-provider';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <StyleProvider>
            <Component {...pageProps} />
        </StyleProvider>
    );
}