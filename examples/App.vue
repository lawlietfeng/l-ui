<template>
  <div id="app">
    <div id="nav"><router-link to="/">Home</router-link> | <router-link to="/jsx">JSX</router-link> | <router-link to="/test2">button</router-link></div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
}
</script>

<style lang="scss">
/* * {
  margin: 0;
  padding: 0;
} */
body {
  $--scrollbar-thumb-background: #b4bccc;
  $--scrollbar-track-background: #fff;

  &::-webkit-scrollbar {
    z-index: 11;
    width: 6px;

    &:horizontal {
      height: 6px;
    }

    &-thumb {
      border-radius: 5px;
      width: 6px;
      background: $--scrollbar-thumb-background;
    }

    &-corner {
      background: $--scrollbar-track-background;
    }

    &-track {
      background: $--scrollbar-track-background;

      &-piece {
        background: $--scrollbar-track-background;
        width: 6px;
      }
    }
  }
  padding: 20px;
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
}

#nav {
  /* padding: 30px; */
  text-align: center;
}
a {
  font-weight: bold;
  color: #2c3e50;
}
.router-link-exact-active {
  color: #42b983;
}
</style>
