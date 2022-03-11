<template>
  <div class="l-compoents">
    <div class="l-compoents-container" :class="{ inIframe: !inIframe && $route.path.includes('lm-') }">
      <router-view></router-view>
    </div>
    <iframe v-if="!inIframe && $route.path.includes('lm-')" :src="origin" frameborder="0"></iframe>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['inIframe']),
    origin() {
      return window.location.origin + '/#' + this.$route.path
    },
  },
}
</script>
<style scoped lang="scss">
.l-compoents {
  .l-compoents-container {
    margin-right: 0;
    &.inIframe {
      margin-right: 420px;
    }
  }
}
iframe {
  background-color: #fff;
  position: fixed;
  top: 140px;
  margin-left: 750px;
  width: 375px;
  height: 70vh;
  box-shadow: 0px 0px 10px 5px #ccc;
  border-radius: 5px;
}
</style>
