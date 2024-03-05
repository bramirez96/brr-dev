// Copyright (c) 2024 Brandon Ramirez (brr.dev)

import { DarkModeProvider } from '@bramirez96/cozy-ui';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function PortfolioApp({
    Component,
    pageProps,
}: AppPropsWithLayout) {
    const getLayout = Component.getLayout || ((page: ReactElement) => page);

    return (
        <DarkModeProvider>
            {getLayout(<Component {...pageProps} />)}
        </DarkModeProvider>
    );
}
