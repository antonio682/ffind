//WEBPACK: gestiona los paquetes JS para los assests.
// LOADERS DE LAS LIBRERIAS PARA QUE LAS CARGUE WEBPACK
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    // entrada de las importaciones y salida para su utilizacion (Assets para el front)
    entry: './src/app.js',
    output: {
        path: __dirname + '/src/main/webapp/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.(woff2?|ttf|eot|svg|png|jpe?g|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /node_modules\/esri-leaflet-geocoder/,
                loader: 'babel-loader?whitelist[]=es6.modules&loose[]=es6.modules'
            }
        ]
    },
    // puglin para separar el css
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
}