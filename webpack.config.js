module.exports = {
    entry: [
        './extra/css/bootstrap.min.css',
        './extra/css/jquery-ui-1.10.3.css',
        './extra/css/jquery.datatables.css',
        './extra/css/jquery.gritter.css',
        /*'./extra/css/style.bluenav.css',*/
        './extra/css/style.default.css',
        './extra/css/lato.css',
        './extra/css/my_custom.css',
        /* The main entry point of your JavaScript application */
        './displayer.js',
    ],
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
            {
                test: /\.css/,
                exclude: [
                    __dirname + '/node_modules',
                ],
                loaders: [
                    'style-loader',
                    'css-loader',
                    //'postcss-loader',
                ],
            },
            {
                test: /\.(eot|ttf|wav|mp3)$/,
                loader: 'file-loader',
            },
        ]
    }
};