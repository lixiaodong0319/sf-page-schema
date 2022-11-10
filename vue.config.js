const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  devServer: {
    proxy: {
      '/bi-saas': {
        // target: 'http://ioc-bi-saas-web.sit.sf-express.com', // 顺丰云
        target: 'http://ioc-web.sit.sf-express.com', // 顺丰云
        changeOrigin: true,
        // pathRewrite: {'^/park': ''}
      }
    }
  },
})
