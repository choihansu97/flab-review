const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");

const { resolve } = require("path");

module.exports = {
  mode: "none",
  entry: {
    index: "./src/index.js",
    router: "./src/router.js",
  },

  output: {
    path: resolve(__dirname, "./src/dist"),
    publicPath: "/",
    filename: "[name].js",
  },

  devServer: {
    port: 5050,
    hot: true,
    open: true,
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
      inject: true,
    }),
    new PrettierPlugin({
      trailingComma: "es5",
      singleQuote: true,
      semi: true,
      tabWidth: 4,
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["dist"],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
