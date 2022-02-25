import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'index',
    component: (resolve) => require(['./components/HelloWorld.vue'], resolve),
  },
]
routes.push({
  path: '/test',
  name: 'test',
  component: (resolve) => require(['./docs/loading.md'], resolve),
})
routes.push({
  path: '/test2',
  name: 'test2',
  component: (resolve) => require(['./docs/button.md'], resolve),
})

routes.push({
  path: '/jsx',
  name: 'jsx',
  component: (resolve) => require(['./components/JSX.vue'], resolve),
  // component: () => import('./components/JSX.vue'),
})

export default new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes,
})
