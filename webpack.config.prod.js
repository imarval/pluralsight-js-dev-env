import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'), //Distribution
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    // Genera un archivo css externo con un hash en el filename
    new ExtractTextPlugin('[name].[contenthash].css'),

    // Hash los archivos para que ellos cambien cuando el contenido cambia
    new WebpackMd5Hash(),
    //Use CommonsChunkPlugin para crear un paquete separado
    //de vendor libraries para que se guarden en cache por separado
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

    // Crea HTML que incluye referencia a bundled JS
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),

    // Elimina paquetes duplicados cuando se genera el bundle
    new webpack.optimize.DedupePlugin(),

    // Minificador JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
    ]
  }
}
