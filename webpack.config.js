const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    "classy-elements": path.resolve(__dirname, "lib/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: {
      name: "classy",
      type: "umd",
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "./lib"),
        loader: "babel-loader",
      },
    ],
  },
  externals: ["react"],
};
