import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters: {
    inIframe() {
      return window.frames.length === parent.frames.length;
    },
  },
});
