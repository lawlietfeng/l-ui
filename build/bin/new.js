'use strict'

console.log()
process.on('exit', () => {
  console.log('退出')
})
console.log()
if (!process.argv[2]) {
  console.error('[组件名]必填 - Please enter new component name')
  process.exit(1)
}
const path = require('path')
const fs = require('fs')
const fileSave = require('file-save')
const uppercamelcase = require('uppercamelcase')
const action = process.argv[4]
const componentname = (action === 'pc' ? 'l-' : 'lm-') + process.argv[2]
const chineseName = process.argv[3] || componentname
const ComponentName = uppercamelcase(componentname)
const PackagePath = path.resolve(__dirname, '../../packages', componentname)
// 生成文件
const Files = [
  // 入口index
  {
    filename: 'index.js',
    content: `import ${ComponentName} from './src/main';

/* istanbul ignore next */
${ComponentName}.install = function(Vue) {
  Vue.component(${ComponentName}.name, ${ComponentName});
};

export default ${ComponentName};`,
  },
  // 组件vue文件
  {
    filename: 'src/main.vue',
    content: `<template>
  <div class="${componentname}"></div>
</template>

<script>
export default {
  name: '${ComponentName}'
};
</script>`,
  },
  // md文件
  {
    filename: path.join('../../examples/docs/', `${componentname}.md`),
    content: `## ${componentname.split('-')[1]} ${chineseName}`,
  },
  // 单元测试文件
  {
    filename: path.join('../../test/unit/specs', `${componentname}.spec.js`),
    content: `import { createTest, destroyVM } from '../util';
import ${ComponentName} from 'packages/${componentname}';

describe('${ComponentName}', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(${ComponentName}, true);
    expect(vm.$el).to.exist;
  });
});
`,
  },
  // scss文件
  {
    filename: path.join('../../packages/theme-chalk/src', `${componentname}.scss`),
    content: `@import "mixins/mixins";
@import "common/var";

@include b(${componentname}) {
}`,
  },
  // ts声明文件
  {
    filename: path.join('../../types', `${componentname}.d.ts`),
    content: `import { LUIComponent } from './component'

/** ${ComponentName} Component */
export declare class Com${ComponentName}  extends LUIComponent {
}`,
  },
]
// 创建 package
Files.forEach((file) => {
  fileSave(path.join(PackagePath, file.filename)).write(file.content, 'utf8').end('\n')
})

// 添加到 components.json
const componentsFile = require('../../components.json')
if (componentsFile[componentname]) {
  console.error(`${componentname} 已存在.`)
  process.exit(1)
}
componentsFile[componentname] = `./packages/${componentname}/index.js`
fileSave(path.join(__dirname, '../../components.json')).write(JSON.stringify(componentsFile, null, '  '), 'utf8').end('\n')

// 添加到 index.scss
const sassPath = path.join(__dirname, '../../packages/theme-chalk/src/index.scss')
const sassImportText = `${fs.readFileSync(sassPath)}@import "./${componentname}.scss";`
fileSave(sassPath).write(sassImportText, 'utf8').end('\n')

// 添加到 l-ui.d.ts
const lTsPath = path.join(__dirname, '../../types/l-ui.d.ts')

let lTsText = `${fs.readFileSync(lTsPath)}
/** ${ComponentName} Component */
export class ${ComponentName} extends Com${ComponentName} {}`

const index = lTsText.indexOf('export') - 1
const importString = `import { Com${ComponentName} } from './${componentname}'`

lTsText = lTsText.slice(0, index) + importString + '\n' + lTsText.slice(index)

fileSave(lTsPath).write(lTsText, 'utf8').end('\n')

// 添加到 nav.config.json
const navConfigFile = require('../../examples/nav.config.json')
console.log(navConfigFile[1], '[1]')
let groups = navConfigFile[1].groups
groups.push({
  path: `${componentname}`,
  name:  componentname !== chineseName ? `${componentname.split('-')[1]} ${chineseName}` : componentname.split('-')[1],
})

fileSave(path.join(__dirname, '../../examples/nav.config.json')).write(JSON.stringify(navConfigFile, null, '  '), 'utf8').end('\n')

console.log('DONE!')
