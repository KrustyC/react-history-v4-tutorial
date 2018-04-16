const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'react-router-dom'],
    index: path.join(__dirname, '../src/app.js')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(css|scss|sass|less)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    alias: {
      components: path.join(__dirname, '../src/views/components/'),
      services: path.join(__dirname, '../src/services/'),
      'routes-templates': path.join(__dirname, '../src/views/routes-templates/'),
      layouts: path.join(__dirname, '../src/views/layouts/')
    },
    extensions: ['.js', '.jsx']
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html'),
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/404.html'),
      filename: '404.html'
    }),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, '../src/assets'), to: './assets' }
    ])
  ]
}
