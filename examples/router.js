import Vue from 'vue';
import navConfig from './nav.config.json';
import Router from 'vue-router';
const children = []
navConfig.forEach((module) => {
  if (module.children) {
    module.children.forEach(component => {
      children.push(  {
        path: '/components' +  component.path,
        name: component.name,
        // component: () => import(`./docs/${module.children.name}.md`),
      })
    })
  } else {
    module.groups.forEach(component => {
      children.push(  {
        path: '/components/' +  component.path,
        name: component.name,
        component: () => import(`./docs/${component.path}.md`),
      })
    })
  }
});
console.log(children)
Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: __dirname,
  routes: [
    {
      path: '/',
      redirect: 'l-ui',
      component: () => import('./layout/index.vue'),
      children: [
        {
          path: '/l-ui',
          name: 'l-ui',
          component: () => import('./views/l-ui.vue'),
        },
        {
          path: '/components',
          name: 'components',
          redirect: '/components/button',
          component: () => import('./layout/components.vue'),
          children: [...children],
        },
      ],
    },
  ],
});
