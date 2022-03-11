/* 通过 './build/bin/build-entry.js' 自动生成 */

import LmLoading from '../packages/lm-loading/index.js';
import LLoading from '../packages/l-loading/index.js';
import LButton from '../packages/l-button/index.js';
// 组件数组
const components = [
  LmLoading,
  LLoading,
  LButton
];
// 定义组件批量注入
const install = (Vue, opts = {}) => {

  components.forEach(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$L = {};

  // Vue.prototype.$loading = Loading.service;
  // Vue.prototype.$msgbox = MessageBox;
  // Vue.prototype.$alert = MessageBox.alert;
  // Vue.prototype.$confirm = MessageBox.confirm;
  // Vue.prototype.$prompt = MessageBox.prompt;
  // Vue.prototype.$notify = Notification;
  // Vue.prototype.$message = Message;

};

// 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
// 导出 version, install 和各个组件
export default {
  version: '0.0.1',
  install,
  LmLoading,
  LLoading,
  LButton
};
