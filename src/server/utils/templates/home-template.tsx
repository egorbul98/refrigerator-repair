import React from 'react';
import favicon from '../../../assets/favicon.ico';
import { renderToString } from 'react-dom/server';

export const HomeTemplate = ({
    cssPaths,
    jsPaths,
    content,
}: {
    cssPaths: string[];
    jsPaths: { src: string; type: 'defer' | 'async' }[];
    content: React.ReactNode;
}) => {
    const mainHtml = renderToString(
        <html lang="ru">
            <head>
                <meta charSet="utf-8" />
                <link rel="icon" href={favicon} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>ПрофХолод</title>
                <link rel="apple-touch-icon" href={favicon} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
                {cssPaths.map((item) => (
                    <link key={item} href={item} rel="stylesheet" />
                ))}
            </head>
            <body>
                <div id="root">{content}</div>
                {jsPaths.map(({ src, type }) => (
                    <script key={src} src={src} {...(type === 'defer' ? { defer: true } : { async: true })} />
                ))}
            </body>
        </html>,
    );

    return `<!DOCTYPE html>${mainHtml}`;
};
