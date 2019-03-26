module.exports = [
    {
        test: /\.(js|jsx|jss|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        }
    },
    {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        loader: 'file-loader'
    },
    {
        test: /\.(woff|woff2)$/,
        exclude: /node_modules/,
        loader: 'url-loader?prefix=font/&limit=5000'
    },
    {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
    },
    {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
            name: '[path][name].[ext]'
        }
    },
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    }
];
