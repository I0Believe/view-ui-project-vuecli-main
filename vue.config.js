const { defineConfig } = require('@vue/cli-service')
const path = require('path')

const { NODE_ENV, VUE_APP_TITLE = '' } = process.env

const config = {
  transpileDependencies: false,
  productionSourceMap: NODE_ENV === 'production',
  chainWebpack: (setting) => {
    setting.plugin('html').tap((args) => {
      args[0].APP_TITLE = VUE_APP_TITLE
      return args
    })
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        }
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, 'src/styles/variable.less')
      ]
    }
  },
  // 关闭语法检查
  // lintOnSave: false,
  devServer: {
    open: true,
    port: 8080,
    host: 'localhost',
    proxy: {
      // 可以定义多个域名的请求
      // 这里是指所有带有api的请求都会使用以下代理
      '/api': {
        target: 'https://localhost:8080',
        changeOrigin: true,
        // // http://39.98.123.211服务器的地址
        // target: 'http://39.98.123.211'
      }
    }
  }
}

module.exports = defineConfig(config)
