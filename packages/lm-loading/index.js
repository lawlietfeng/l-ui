import LmLoading from './src/main';

/* istanbul ignore next */
LmLoading.install = function(Vue) {
  Vue.component(LmLoading.name, LmLoading);
};

export default LmLoading;
