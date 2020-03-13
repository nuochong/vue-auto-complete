const path = require('path');

module.exports = {
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
      },
    },
  },
}