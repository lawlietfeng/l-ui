import Vue from 'vue';
import components from '../components.json';
import Router from 'vue-router';

const children = Object.keys(components).map((componentName) => {
  return {
    path: componentName,
    name: componentName,
    component: () => import(`./docs/${componentName}.md`),
  };
});

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: __dirname,
  routes: [
    {
      path: '/',
      redirect: 'l-ui',
      component: (resolve) => require(['./layout/index.vue'], resolve),
      children: [
        {
          path: '/l-ui',
          name: 'l-ui',
          component: (resolve) => require(['./views/l-ui.vue'], resolve),
        },
        {
          path: '/components',
          name: 'components',
          redirect: '/components/button',
          component: (resolve) => require(['./layout/components.vue'], resolve),
          children: [...children],
        },
      ],
    },
  ],
});
