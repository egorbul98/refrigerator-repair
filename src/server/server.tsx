import React from 'react';
import express, { Application } from 'express';
import path from 'path';
import { renderToString } from 'react-dom/server';
import { App } from '../App';
import { renderTemplate } from './utils/render-template';
import fs from 'fs';
import { sendEmail } from './utils/send-email';
import bodyParser from 'body-parser';

const isDev = process.env.MODE === 'development';

function useMiddlewares(app: Application) {
    app.use(express.static('dist'));
    app.use(
        bodyParser.urlencoded({
            extended: true,
        }),
    );
    app.use(bodyParser.json());
}

export async function createApp() {
    const app = express();

    const manifest: any = JSON.parse(fs.readFileSync(path.join(__dirname, 'manifest.json'), 'utf-8'));

    useMiddlewares(app);

    app.get('/', (req, res) => {
        const content = renderToString(<App />);
        res.send(
            renderTemplate({
                content,
                cssPaths: [`${manifest['client.css']}`],
                jsPaths: [`${manifest['client.js']}`],
            }),
        );
    });

    app.post('/api/email/send', async (req, res) => {
        await sendEmail(req.body);
        res.send({ status: 'ok' });
    });

    if (!isDev) {
        app.listen('3000', () => {
            console.log(`Server running on http://localhost:3000`);
        });
    }

    return app;
}

if (!isDev) {
    createApp();
}
