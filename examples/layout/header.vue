<template>
  <div class="headerWrapper">
    <header ref="header" class="header">
      <div class="container" :class="{ inMainPage: inMainPage }">
        <h1>
          <router-link to="/l-ui">
            <!-- <img class="logo" src="../assets/logo占位.png" alt="" /> -->
            <svg-icon className="logo" icon-class="logo"></svg-icon>
          </router-link>
        </h1>
        <!-- <div class="header-search">
          <input class="header-search__input" type="text" placeholder="搜索" />
          <svg-icon icon-class="search"></svg-icon>
        </div> -->
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
          <li @click="linkClick($event)" class="nav-item">
            <router-link active-class="active" to="/components"> 组件 </router-link>
          </li>
          <li @click="linkClick($event)" class="nav-item nav-item-theme">
            <router-link active-class="active" to="/source"> 资源 </router-link>
          </li>
          <li @click="linkClick($event)" class="nav-item">
            <router-link active-class="active" to="/update-log" exact> 更新日志 </router-link>
          </li>
          <li @click="linkClick($event)" class="nav-item">
            <router-link active-class="active" to="/question" exact> 问题反馈 </router-link>
          </li>
          <div class="underline" ref="underline"></div>
        </ul>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {
    inMainPage() {
      return this.$route.name === 'l-ui'
    },
  },
  methods: {
    linkClick(e) {
      console.log(e.target.parentElement.offsetLeft)
      const left = e.target.parentElement.offsetLeft
      const width = e.target.parentElement.offsetWidth
      this.$refs.underline.style.left = `${left}px`
      this.$refs.underline.style.width = `${width}px`
    },
    getDomLeft(dom) {
      let left = 0
      if (dom.tagName === 'BODY') {
        return left
      }
      left = dom.offsetLeft + this.getDomLeft(dom.parentElement)
      console.log(dom.tagName, dom.className, dom.offsetLeft)
      return left
    },
  },
}
</script>
<style lang="scss" scoped>
.headerWrapper {
  // height: 62px;
  display: flex;
  align-items: center;
  // background-color: #000;
  position: relative;
  .underline {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 72px;
    z-index: -1;
    transition: all 0.3s ease-in;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 58px;
      box-sizing: border-box;
      border-bottom: 4px solid;
      border-image: linear-gradient(45deg, #2486b9, #baccd9) 1;
      clip-path: inset(0px round 15px);
      animation: huerotate 3s infinite linear;
      filter: hue-rotate(360deg);
      @keyframes huerotate {
        0% {
          filter: hue-rotate(0deg);
        }
        100% {
          filter: hue-rorate(360deg);
        }
      }
    }
    // &::after {
    //   content: '';
    //   position: absolute;
    //   bottom: 0;
    //   left: 0;
    //   width: 100%;
    //   height: 15px;
    //   background-color: #fff;
    // }
  }
}

.header {
  height: 58px;
  // background-color: #0f59a4;
  // background: linear-gradient(to right, #0f59a4, #baccd9, #0f59a4);
  background: linear-gradient(to right, #baccd9, #0f59a4, #baccd9);
  // background: url('../assets/header-bg.jpg');
  // background-size: 100%;
  // background-position-y: -50px;
  color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 58px;
  z-index: 9;
  position: relative;
  .container {
    width: 1366px;
    margin: 0 auto;
    // padding: 0 136px;
    height: 100%;
    box-sizing: border-box;
    // box-shadow: 0px 2px 20px 0px rgba(233, 233, 233, 0.5);
    &.inMainPage {
      box-shadow: none;
    }
  }
  .header-search {
    float: left;
    margin-left: 113px;
    position: relative;
    > .svg-icon {
      position: absolute;
      top: 50%;
      right: 23px;
      width: 16px;
      height: 16px;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }
  .header-search__input {
    height: 34px;
    width: 184px;
    margin-left: 20px;
    padding: 0 48px 0 16px;
    border-radius: 8px;
    outline: none;
    border: none;
    background-color: #f9fafa;
    caret-color: #5698c3;
    color: #333;
    box-sizing: border-box;
    &::-webkit-input-placeholder {
      color: #333;
    }
  }

  h1 {
    margin: 0;
    float: left;
    font-size: 32px;
    font-weight: normal;
    height: 100%;
    .logo {
      fill: #eef7f2;
      transition: all 1s;
      &:hover {
        fill: #2486b9;
        transform: scale(1.3);
      }
    }
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
      border: 1px solid rgba(255, 255, 255, 0.5);
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
    position: relative;
    &::before,
    &::after {
      display: table;
      content: '';
    }
    &::after {
      clear: both;
    }
  }
  .logo {
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
      color: #baccd9;
      display: block;
      padding: 0 22px;
      &.active,
      &:hover {
        opacity: 1;
        color: #fffef8;
      }
    }
    // &:last-child {
    //   a {
    //     padding-right: 0;
    //   }
    // }
  }
}
</style>
