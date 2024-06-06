const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)/i,
        type: "asset/resource",
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  devServer: {
    static: "./dist",
    compress: true,
    open: true,
    hot: true,
    port: 8564,
  },
  plugins: [
    new HtmlWebpackPlugin({
      name: "index.html",
      inject: false,
      template: "./dist/index.html",
    }),
  ],
  devtool: "inline-source-map",
};