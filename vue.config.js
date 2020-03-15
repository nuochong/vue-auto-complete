const path = require('path');

module.exports = {
  publicPath: '/vue-auto-complete',
  // 取消map文件
  productionSourceMap: false,
  // 输出文件目录
  outputDir: 'docs',
  // 将 examples 目录添加为新的页面
  css: { extract: false },
  pages: {
    index: {
      // page 入口
      entry: 'examples/main.js',
      // 模板来源
      template: 'public/index.html',
      // 输出文件名
      filename: 'index.html'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'examples/'),
        '~': path.join(__dirname, 'packages/')
      }
    },
    module: {
      rules: [
        {
          test: /.md$/,
          use: 'text-loader'
        }
      ]
    }
  },
  chainWebpack: config => {
    // 默认小于5kb assets中的图片被转换为base64，自定义为2kb
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 2048 }));
  }
};
