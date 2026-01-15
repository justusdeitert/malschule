const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    entry: './src/js/main.js',
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '',
      clean: true,
      assetModuleFilename: '[path][name][ext]'
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
      compress: true,
      port: 1337,
      open: true,
      watchFiles: ['src/**/*']
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDevelopment
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDevelopment
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]'
          }
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext]'
          }
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css'
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: true
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'images', to: 'images', noErrorOnMissing: true },
          { from: 'fonts', to: 'fonts', noErrorOnMissing: true },
          { from: '404.html', to: '404.html', noErrorOnMissing: true },
          { from: 'favicon.ico', to: 'favicon.ico', noErrorOnMissing: true }
        ]
      })
    ],
    devtool: isDevelopment ? 'source-map' : false
  };
};
