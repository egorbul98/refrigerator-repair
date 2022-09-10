/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function getRules(type) {
    const root = path.resolve(__dirname, '../');

    const isClient = type === 'client';
    const isServer = type === 'server';
    console.log({ isClient, isServer });

    const postCssLoader = {
        loader: 'postcss-loader',
        options: {
            postcssOptions: {
                config: path.resolve(root, 'postcss.config.js'),
                sourceMap: true,
            },
        },
    };
    return [
        {
            test: /\.css$/,
            use: isServer ? 'null-loader' : [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
            test: /\.scss$/,
            use: [
                ...(isClient ? [MiniCssExtractPlugin.loader] : []),
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        modules: {
                            localIdentName: `[path][name]:[local]-[hash:base64:2]`,
                            localIdentContext: 'src',
                            exportLocalsConvention: 'camelCase',
                            mode: 'local',
                            exportOnlyLocals: isServer,
                        },
                    },
                },
                postCssLoader,
                {
                    loader: 'sass-loader',
                    options: { sourceMap: true },
                },
            ],
        },
        {
            test: /\.(png|jpg|jpeg|gif|ico)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'media',
                        name: '[contenthash].[ext]',
                        limit: undefined,
                    },
                },
            ],
        },
    ];
}

module.exports = {
    getRules,
};
