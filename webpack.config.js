const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (env, options) => {
  const isDevelopment = options.mode !== 'production';
  const enableAnalysis = Boolean(options.env.analyze);
  return {
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    entry: {
      main: path.resolve(__dirname, './src/index.tsx'),
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name]_[contenthash].js',
      publicPath: '/',
    },
    mode: isDevelopment ? 'development' : 'production',
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                plugins: [isDevelopment && 'react-refresh/babel'].filter(Boolean),
              },
            },
            'ts-loader',
          ],
        },
        {
          test: /\.css$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            { loader: 'css-loader', options: { sourceMap: true } },
          ],
        },
        {
          test: /\.(png|jpg|gif|svg|ico|webp|woff2?)$/,
          type: 'asset/resource',
        },
      ],
    },
    performance: {
      hints: isDevelopment ? false : 'warning',
    },
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin({
          terserOptions: {
            ecma: 2020,
          },
        }),
      ],
    },
    devServer: {
      historyApiFallback: true,
      static: true,
      open: true,
      compress: true,
      hot: true,
      port: 8080,
    },
    plugins: [
      new HtmlWebPackPlugin({
        title: 'React Template',
        hash: true,
        filename: './index.html', // target html
        template: path.resolve(__dirname, './public/index.html'), // source html
      }),
      new MiniCssExtractPlugin(),
      new FaviconsWebpackPlugin('./public/favicon.svg'),
      new CleanWebpackPlugin(),
      new CompressionPlugin(),
      isDevelopment && new ReactRefreshWebpackPlugin(),
      enableAnalysis && new BundleAnalyzerPlugin(),
    ].filter(Boolean),
  };
};
