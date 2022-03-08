<template>
  <div id="app">
    <Header v-if="!inIframe"></Header>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from './layout/header.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    Header,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['inIframe']),
  },

};
</script>
<style scoped>
@import './style/reset.scss';
</style>