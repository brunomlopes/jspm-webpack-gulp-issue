const path = require("path");
const webpack = require("webpack");

const paths = {
  outputPublicPath: "/dist/"
};

module.exports = (env, argv) => {
  const local_resolve = n => path.resolve(__dirname, n);

  let config = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    plugins: [],
    output: {
      // we nede this publicpath so we know where to load chunks from
      publicPath: paths.outputPublicPath,
      filename: "[name].[contenthash].js"
    },
    optimization: {
      runtimeChunk: "single",
      moduleIds: "hashed"
    },
    entry: {
      index: local_resolve("./src/index.js")
    },
    externals: {},
    resolve: {
      alias: {},
      modules: ["src", "node_modules"].map(local_resolve)
    },
    resolveLoader: {
      modules: ["node_modules"].map(local_resolve)
    },
    watch: false
  };
  return config;
};
