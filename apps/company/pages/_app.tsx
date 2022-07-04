import { Global } from '@emotion/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import globalStyles from '../styles/globalStyle';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
                    rel="stylesheet"></link>
                <link
                    href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
                    rel="stylesheet"
                    type="text/css"></link>
            </Head>
            <Global styles={globalStyles}></Global>
            <Component {...pageProps} />
        </>
    );
}
