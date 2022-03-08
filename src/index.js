import LButton from '../packages/l-button/index'
import LLoading from '../packages/l-loading/index'
import LmLoading from '../packages/lm-loading/index'

// 组件数组
const components = [LButton, LLoading, LmLoading,]

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
  LButton,
  LLoading,
  LmLoading
}
