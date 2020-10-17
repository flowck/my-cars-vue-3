const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "${path.join(__dirname, '/src/assets/scss/globals.scss')}";`
      }
    }
  }
}