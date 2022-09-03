/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { getRules } = require('./webpack-utils');

function createConfig() {
    const root = path.resolve(__dirname, '../');

    return {
        name: 'client',
        entry: {
            client: path.resolve(root, 'src/client.tsx'),
        },
        mode: 'production',
        output: {
            path: path.resolve(root, 'dist'),
            filename: '[name].[contenthash].js',
            publicPath: '',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        target: 'web',
        module: {
            rules: [
                ...getRules('client'),
                {
                    test: /\.(js|ts)x?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: require.resolve(`babel-loader`),
                        options: {
                            presets: [
                                require.resolve('@babel/preset-typescript'),
                                [require.resolve('@babel/preset-env'), { modules: false }],
                                require.resolve('@babel/preset-react'),
                            ],
                            plugins: [
                                [
                                    '@babel/plugin-transform-runtime',
                                    {
                                        regenerator: true,
                                    },
                                ],
                            ],
                            babelrc: false,
                        },
                    },
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
            new WebpackManifestPlugin(),
        ],
    };
}

module.exports = createConfig();
