const path = require("path"); //ajudar gerar camimhos absolutos com paths relativos
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const commonChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
//   names: ["vendor", "manifest"],
//   filename: "commons.js",
// });

module.exports = {
  entry: { app: "./src/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.js",
  },
  devServer: {
    port: 3001,
    contentBase: "./dist",
    //compress: true,
    hot: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({ filename: "css/[name].css" }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg)$/,
        use: "file-loader",
      },
      {
        test: /\.html$/,
        loader: "raw-loader",
      },

      // {
      //     test: /\.(woff|woff2|ttf|svg|eot)$/,
      //     loader: 'url-loader'
      // }
    ],
  },
};
