<template>
  <div class="headerWrapper">
    <header ref="header" class="header">
      <div class="container" :class="{inMainPage: inMainPage}">
        <h1>
          <router-link to="/l-ui">
            <img class="logo" src="../assets/logo占位.png" alt="">
          </router-link>
        </h1>
        <div class="header-search">
          <input class="header-search__input" type="text" placeholder="搜索">
          <svg-icon icon-class="search"></svg-icon>
        </div>
        <!-- nav -->
        <ul class="nav">
          <!-- <li class="nav-item">
            <router-link
              active-class="active"
              to="/design"
            >
              设计原则
            </router-link>
          </li> -->
          <li class="nav-item">
            <router-link
              active-class="active"
              to="/components"
            >
              组件
            </router-link>
          </li>
          <li 
            class="nav-item nav-item-theme"
          >
            <router-link
              active-class="active"
              to="/source"
            >
              资源
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              to="/update-log"
              exact
            >
              更新日志
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              to="/question"
              exact
            >
              问题反馈
            </router-link>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    inMainPage() {
      return this.$route.name === 'l-ui';
    },
  },
};
</script>
<style lang="scss" scoped>
  .headerWrapper {
    height: 58px;
  }

  .header {
    height: 58px;
    background-color: #000;
    color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 58px;
    z-index: 100;
    position: relative;
    .container {
      width: 1366px;
      margin: 0 auto;
      padding: 0 136px 0 30px;
      height: 100%;
      box-sizing: border-box;
      box-shadow: 0px 2px 20px 0px rgba(233, 233, 233, 0.5);
      &.inMainPage{
        padding: 0 136px;
        box-shadow: none;
      }
    }
    .header-search{
      float: left;
      margin-left: 113px;
      position: relative;
      > .svg-icon{
        position: absolute;
        top: 50%;
        right: 23px;
        width: 16px;
        height: 16px;
        transform: translateY(-50%);
        cursor: pointer;
      }
    }
    .header-search__input{
      height: 34px;
      width: 184px;
      margin-left: 20px;
      padding: 0 48px 0 16px;
      border-radius: 8px;
      outline: none;
      border: none;
      background-color: #F9FAFA;
      caret-color: #b90000;
      color: #333;
      box-sizing: border-box;
      &::-webkit-input-placeholder{
        color: #333;
      }
    }

    h1 {
      margin: 0;
      float: left;
      font-size: 32px;
      font-weight: normal;
      height: 100%;
      a {
        height: 100%;
        color: #000;
        text-decoration: none;
        display: block;
        display: flex;
        align-items: center;

      }

      span {
        font-size: 12px;
        display: inline-block;
        width: 34px;
        height: 18px;
        border: 1px solid rgba(255, 255, 255, .5);
        text-align: center;
        line-height: 18px;
        vertical-align: middle;
        margin-left: 10px;
        border-radius: 3px;
      }
    }

    .nav {
      float: right;
      height: 100%;
      font-size: 14px;
      line-height: 58px;
      background: transparent;
      padding: 0;
      margin: 0;
      &::before, &::after {
        display: table;
        content: "";
      }
      &::after {
        clear: both;
      }
    }
    .logo{
      height: 31px;
    }

    .nav-item {
      margin: 0;
      float: left;
      list-style: none;
      position: relative;
      cursor: pointer;
      a {
        text-decoration: none;
        color: #fff;
        display: block;
        padding: 0 22px;
        &.active,
        &:hover {
          opacity: 1;
          color: #257CFF;
        }
      }
      &:last-child{
        a {
          padding-right: 0;
        }
      }
    }
  }
</style>