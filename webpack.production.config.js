var webpack = require('webpack')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'dist/gobmx.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: true,
          removeComments: true,
          collapseWhitespace: true
        }
      },
      {
        test: /\.less$/,
        loaders: [ 'style-loader', 'css-loader', 'less-loader' ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['url-loader?limit=10000', 'img-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ]
}
