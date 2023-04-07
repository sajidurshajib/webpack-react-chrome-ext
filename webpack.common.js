const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    entry: {
        popup: path.resolve('./src/popup/popup.tsx'),
        options: path.resolve('./src/options/options.tsx'),
        background: path.resolve('./src/background/background.ts'),
        contentScript: path.resolve('./src/contentScript/contentScript.ts'),
        newTab: path.resolve('./src/tabs/index.tsx'),
    },
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.tsx$/,
                exclude: /node_modules/,
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/i,
            },
            {
                type: 'asset/resource',
                test: /\.(png|jpg)$/i,
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve('src/static'),
                    to: path.resolve('dist'),
                },
            ],
        }),
        ...getHtmlPlgins(['popup', 'options', 'newTab']),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};

function getHtmlPlgins(chunks) {
    return chunks.map(
        (chunk) =>
            new HtmlPlugin({
                title: 'Webpack-React chrome-ext Boilerplate',
                filename: `${chunk}.html`,
                chunks: [chunk],
            })
    );
}
