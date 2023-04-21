const express = require('express');
const app = express();
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml');

const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    router: "./src/router.js",
  },

  output: {
    path: __dirname + "/src/dist",
    publicPath: "/",
    filename: "[name].js",
  },

  devServer: {
    port: 5050,
    hot: true,
    open: true,
    historyApiFallback: true,

    onBeforeSetupMiddleware: (devServer) => {
      devServer.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: "tech.html",
      template: "./src/pages/tech.html",
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
