import React from 'react';
import express from 'express';
import path from 'path';
import { renderToString } from 'react-dom/server';
import { App } from '../App';
import { renderTemplate } from './utils/render-template';
import fs from 'fs';

const app = express();

const manifest: any = JSON.parse(fs.readFileSync(path.join(__dirname, 'manifest.json'), 'utf-8'));

app.use(express.static('dist'));

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

app.listen('3000', () => {
    console.log(`Server running on http://localhost:3000`);
});
