// Copyright (c) 2024 Brandon Ramirez (brr.dev)

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        template: '%s - Brandon Ramirez - brr.dev',
        default: 'Portfolio - Brandon Ramirez - brr.dev',
    },
    description:
        'A portfolio to showcase coding projects, technical writing, and shared libraries created by Brandon Ramirez.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#f25e23"
                />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#f36c37" />

                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="brr.dev - Brandon Ramirez - Portfolio"
                />
                <meta
                    property="og:description"
                    content="Portfolio website for Brandon Ramirez."
                />
                <meta
                    property="og:image"
                    content="/search-engine-preview.png"
                />
                <meta property="og:url" content="https://brr.dev" />
            </head>
            <body>{children}</body>
        </html>
    );
}
