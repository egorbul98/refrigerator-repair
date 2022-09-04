/* eslint-disable @typescript-eslint/no-var-requires */

// import path from 'path';
// import HTMLWebpackPlugin from 'html-webpack-plugin';
// import CopyWebpackPlugin from 'copy-webpack-plugin';
// import webpackNodeExternals from 'webpack-node-externals';
const webpackNodeExternals = require('webpack-node-externals');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { getRules } = require('./webpack-utils');

function createConfig() {
    const root = path.resolve(__dirname, '../');

    return {
        name: 'server',
        entry: {
            server: path.resolve(root, 'src/server/server.tsx'),
        },
        mode: 'production',
        output: {
            path: path.resolve(root, 'dist'),
            filename: '[name].js',
            libraryTarget: 'commonjs2',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        externals: [webpackNodeExternals()],
        externalsPresets: { node: true },
        target: 'node',
        node: {
            __dirname: false,
        },
        module: {
            rules: [
                ...getRules('server'),
                {
                    test: /\.(js|ts)x?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: require.resolve(`babel-loader`),
                        options: {
                            presets: [
                                require.resolve('@babel/preset-typescript'),
                                [require.resolve('@babel/preset-env'), { targets: { node: '12' } }],
                                require.resolve('@babel/preset-react'),
                            ],
                            babelrc: false,
                        },
                    },
                },
                // {
                //     test: /\.js?$/,
                //     loader: 'babel-loader',
                // },
            ],
        },
        plugins: [new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })],
    };
}

module.exports = createConfig;
