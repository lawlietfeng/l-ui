const path = require('path')
//js忽略路径
exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/
// 定义路径别名
exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  'l-ui': path.resolve(__dirname, '../'),
}

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};