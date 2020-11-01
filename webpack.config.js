const path = require("path");

module.exports = {
  devtool: "inline-source-map",
  mode: "development",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [
          path.resolve(__dirname, "src"),
        ],
      },
    ],
  },
  watch: true,
  devServer: {
    publicPath: "/dist",
  },
  resolve: {
    extensions: [
      ".ts", ".js",
    ],
  },
  output: {
    publicPath: "dist",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
