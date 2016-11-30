module.exports = {
    entry: './displayer.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: "/static/"
    },
    devServer: {
        port: 8989,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [
                    __dirname + '/node_modules',
                ],
                loader: 'babel-loader',
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
            {
                test: /\.md$/,
                loader: __dirname + '/utils/markdown-loader.js',
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                loader: 'url-loader?limit=10000',
            },
        ]
    }
};