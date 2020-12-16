const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["./client/index.js"],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    publicPath: "/dist/",
    proxy: [
      {
        context: ["/api", "/login", "/image"],
        target: "http://localhost:5555",
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
