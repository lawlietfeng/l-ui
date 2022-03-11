import LButton from './src/main';

/* istanbul ignore next */
LButton.install = function(Vue) {
  Vue.component(LButton.name, LButton);
};

export default LButton;
