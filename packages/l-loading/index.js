import LLoading from './src/main';

/* istanbul ignore next */
LLoading.install = function(Vue) {
  Vue.component(LLoading.name, LLoading);
};

export default LLoading;
