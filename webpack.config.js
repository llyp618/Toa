const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const WebpackNodeExternal = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');
const path = require('path');




const NODE_ENV = process.env.NODE_ENV === 'production'  ? 'production' : 'development'


const ENTRY_PATH = path.resolve(__dirname, './src/main.ts');
const OUT_PATH = path.resolve(__dirname, 'dist');
const TSCONFIG_PATH = path.resolve(__dirname, './tsconfig.json');

module.exports = {

  entry:  ENTRY_PATH,

  output: {
    path: OUT_PATH,
    filename: '[name].js'
  },

  watch: NODE_ENV === 'production' ? false : true,

  target: 'node',

  mode: NODE_ENV,

  optimization: {
    nodeEnv: NODE_ENV,
  },

  node: {
    __filename: false,
    __dirname: false,
  },

  externals: [WebpackNodeExternal()],

  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [new TsconfigPathsPlugin( { configFile: TSCONFIG_PATH } )]
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              // disable type checker - we will use it in fork plugin
              transpileOnly: true,
              configFile: TSCONFIG_PATH
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        enabled: true,
        files: './src/**/*.{ts,js}'
      },
    }),
    NODE_ENV === 'production' ? null : new NodemonPlugin({
      verbose: true,
      ext: 'js',
      watch: OUT_PATH,
      ignore: [
        'tsconfig.tsbuildinfo'
      ],
      delay: '500',
      env: {
        NODE_ENV: 'development'
      },
      inspect: true
    })
  ].filter(i => i)

}