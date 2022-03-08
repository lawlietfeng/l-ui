import Button from '../packages/button/index'
import Loading from '../packages/loading/index'
import LmLoading from '../packages/lm-loading/index'

// 组件数组
const components = [Button, Loading, LmLoading]

// 定义组件批量注入
const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

// 自动安装
if (typeof window.Vue !== 'undefined' && window.Vue) {
  install(Window.Vue)
}

// 导出install 和各个组件
export default {
  install,
  Button,
  Loading,
  LmLoading
}
