const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    kanban: "./src/index.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "./src"),
        loader: "babel-loader",
        resolve: {
          extensions: [".js", ".jsx"],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" })
  ],
  devServer: {
    historyApiFallback: true,
  },
};
