/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { getRules } = require('./webpack-utils');
const webpack = require('webpack');

function createConfig(_, { mode }) {
    const root = path.resolve(__dirname, '../');

    const isProd = mode === 'production';
    const isDev = mode === 'development';

    return {
        name: 'client',
        entry: {
            client: [
                ...(isDev ? ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'] : []),
                path.resolve(root, 'src/client.tsx'),
            ],
        },
        mode,
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
                                ...(isDev ? [require.resolve('react-refresh/babel')] : []),
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
            new MiniCssExtractPlugin({ filename: isDev ? '[name].css' : '[name].[contenthash].css' }),
            new WebpackManifestPlugin(),
            ...(isDev ? [new webpack.HotModuleReplacementPlugin({}), new ReactRefreshWebpackPlugin()] : []),
            ...(isDev ? [new ReactRefreshWebpackPlugin()] : []),
        ],
    };
}

module.exports = createConfig;
