const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EslingPlugin = require('eslint-webpack-plugin');

let mode = 'development'; 
let target = 'web'; 
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist'; 
}

const plugins = [
    new HtmlWebpackPlugin({
      filename: 'home.html',
      template: './src/pages/home.html', 
    }),
    new HtmlWebpackPlugin({ 
      filename: 'products.html',
      template: './src/pages/products.html',
    }),
    new MiniCssExtractPlugin({
        filename: '[name].css', 
      }), 
    new EslingPlugin({ 
        extensions: 'ts' 
      })
  ]; 


module.exports = {
  mode, 
  target,
  plugins, 
  entry: './src/scripts/main.ts', 
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js', '.html', '.scss']
},
  output: {
    path: path.resolve(__dirname, 'dist'), 
    assetModuleFilename: './assets/[name].[ext]',
    clean: true,
  },
  devServer: {
    hot: true,
  },

  module: {
    rules: [
    { test: /\.(html)$/, use: ['html-loader'] }, 
    {
      test: /\.(s[ac]|c)ss$/i, 
      use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      }, 
      {
        test: /\.(png|jpeg|jpg|gif|svg|webp|ico)$/i,
        type: 'asset/resource',
        loader: 'file-loader',
        options: {
          name: '/assets/[name].[ext]',
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        use: [
            {
                loader: 'file-loader?name=./assets/fonts/webfonts/[name].[ext]'
            },
            {
                loader: 'file-loader?name=./assets/fonts/Roboto/[name].[ext]'
            }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      { 
        test: /\.ts$/i, 
        use: 'ts-loader' 
      },
  ],
},
}