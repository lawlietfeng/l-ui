const path = require('path')
const inquirer = require('inquirer')
const process = require('child_process')
const uppercamelcase = require('uppercamelcase')

// 新增组件
const createComponent = async (action) => {
  let res = await inquirer.prompt([
    {
      type: 'input',
      message: '填写你需要添加的组件名（英文名）',
      name: 'component',
      validate(value) {
        const done = this.async()
        const patt = /^([a-z]|([a-z]-[a-z])){2,20}$/
        if (!patt.test(value)) {
          done('组件名称验证失败: /^([a-z]|([a-z]-[a-z])){2,20}$/')
          return
        }
        done(null, true)
      },
    },
    {
      type: 'input',
      message: '填写你需要添加的组件中文名（中文名）',
      name: 'name',
      validate(value) {
        const done = this.async()
        if (value.trim().length <= 0) {
          done('组件名称不能为空')
          return
        }
        done(null, true)
      },
    },
  ])

  let { confirm } = await inquirer.prompt({
    type: 'confirm',
    message: `请确认你的组件信息： \n 组件名: ${res.component}, 组件中文名: ${res.name}, 组件引入名称: ${action === 'pc' ? 'L' : 'Lm'}${uppercamelcase(
      res.component,
    )} \n `,
    name: 'confirm',
    default: true,
  })

  if (confirm) {
    // process赋值
    process.spawnSync('node', [path.resolve(__dirname, 'bin/new.js'), res.component, res.name, action], { shell: true, stdio: 'inherit' })
  }
}

// 选择需要操作的动作
inquirer
  .prompt({
    type: 'list',
    message: '选择您要创建的组件',
    name: 'action',
    choices: [
      {
        name: '移动组件',
        value: 'mobile',
      },
      {
        name: 'pc组件',
        value: 'pc',
      },
    ],
  })
  .then(({ action }) => {
    createComponent(action)
  })
