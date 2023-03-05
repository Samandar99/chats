const { defineConfig } = require('@vue/cli-service')
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
        alias: {
            '@src': path.join(__dirname, 'src'),
            '@public': path.join(__dirname, 'public')
        }
    }
}
})
