const path = require("path");
module.exports = {
  devServer: {
    proxy: "https://en.wikipedia.org/"
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/styles/main.scss";`
      }
    }
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      sourceMap: true,
      patterns: [path.resolve(__dirname, "~@/assets/styles/main.scss")]
    }
  }
};
