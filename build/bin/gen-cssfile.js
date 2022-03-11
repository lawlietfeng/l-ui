var fs = require('fs');
var path = require('path');
// 读取组件
var Components = require('../../components.json');
// scss文件目录
var themes = [
  'theme-chalk'
];
Components = Object.keys(Components);
var basepath = path.resolve(__dirname, '../../packages/');

function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}

themes.forEach((theme) => {
  var indexContent =  '@import "./base.scss";\n';
  Components.forEach(function(key) {
    // 过滤没有不需要引入的scss文件目录
    if (['icon', 'option', 'option-group'].indexOf(key) > -1) return;
    var fileName = key + '.scss';
    indexContent += '@import "./' + fileName + '";\n';
    var filePath = path.resolve(basepath, theme, 'src', fileName);
    if (!fileExists(filePath)) {
      fs.writeFileSync(filePath, '', 'utf8');
      console.log(theme, ' 创建遗漏的 ', fileName, ' 文件');
    }
  });
  fs.writeFileSync(path.resolve(basepath, theme, 'src','index.scss' ), indexContent);
});
