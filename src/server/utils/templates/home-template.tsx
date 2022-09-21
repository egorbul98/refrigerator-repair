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

                <div
                    dangerouslySetInnerHTML={{
                        __html: `<!-- Yandex.Metrika counter -->
                                <script type="text/javascript" >
                                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                                m[i].l=1*new Date();
                                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                                ym(90509081, "init", {
                                        clickmap:true,
                                        trackLinks:true,
                                        accurateTrackBounce:true,
                                        webvisor:true
                                });
                                </script>
                                <noscript><div><img src="https://mc.yandex.ru/watch/90509081" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
                                <!-- /Yandex.Metrika counter -->`,
                    }}
                />
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
