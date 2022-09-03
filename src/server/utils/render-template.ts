export const renderTemplate = ({
    cssPaths,
    jsPaths,
    content,
}: {
    cssPaths: string[];
    jsPaths: string[];
    content: string;
}) => {
    return `<!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="utf-8" />
                <link rel="icon" href="./favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>ПрофХолод</title>
                <link rel="apple-touch-icon" href="./logo192.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet">
                ${cssPaths.map((item) => `<link href="${item}" rel="stylesheet">`)}
              </head>
              <body>
                <div id="root">${content}</div>
                ${jsPaths.map((item) => `<script defer="defer" src="${item}"></script>`)}
              </body>
            </html>
  `;
};
