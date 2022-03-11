import Vue from 'vue'
import App from './App.vue'
// 按需引入
// import Button from '../lib/l-button'
// import {LButton} from '../lib/l-ui.common'
// 按需引入样式
// import '../lib/theme-chalk/l-button.css'
// 全局引入
import LUI from '../src/index'
// import LUI from '../lib/l-ui.common'
// import '../lib/theme-chalk/index.css'

import router from './router'
import store from './store';
import hljs from 'highlight.js'
import demoBlock from './components/demo-block.vue'
import demoBlockM from './components/demo-block-m.vue'
import './style/highlight.scss';
import './style/reset.scss';
import './icons';
import './demo-style/index.scss';
import 'packages/theme-chalk/src/index.scss'
Vue.component('demo-block', demoBlock)
Vue.component('demo-block-m', demoBlockM)
// 全局引入
Vue.use(LUI)
// 按需引入
// Vue.use(LButton)
Vue.config.productionTip = false

router.afterEach(() => {
  Vue.nextTick(() => {
    const blocks = [...document.querySelectorAll('pre code:not(.hljs)')]
    console.log(blocks)
    blocks.forEach(hljs.highlightBlock)
  })
  document.title = 'l-ui'
})
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
