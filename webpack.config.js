const path = require("path");
const webpack = require("webpack");

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
    entry: {
      index: local_resolve("./src/index.js")
    }
  };
  return config;
};
