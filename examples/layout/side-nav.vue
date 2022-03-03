<template>
  <div class="side-nav">
    <ul>
      <li v-for="(nav, index) in navsData" :key="index" class="side-nav__item">
        <a v-if="!nav.path">{{ nav.name }}</a>

        <router-link v-if="nav.path" active-class="active" :to="nav.path" exact v-text="nav.title || nav.name" />

        <ul v-if="nav.children" class="side-nav__sub-nav">
          <li v-for="(subNav, subIndex) in nav.children" :key="subIndex" class="side-nav__sub-nav__item">
            <a v-if="!subNav.path">{{ subNav.name }}</a>
            <router-link 
              v-if="subNav.path"
              active-class="active"
              :to="subNav.path"
              exact
              v-text="subNav.title || subNav.name"
            />
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import navsData from '../nav.config.json';
export default {
  data() {
    return {
      navsData,
    };
  },
};
</script>

<style lang="scss" scoped>
.side-nav {
  height: 100%;
  background-color: #f9fafa;
  padding: 30px 30px 0;
  box-sizing: border-box;
  .side-nav__item {
    a {
      display: block;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      color: #333;
      text-decoration: none;
      font-weight: 700;
      &.active {
        color: #0061ff !important;
        background-color: #fff;
        border-radius: 4px;
        margin-left: -10px;
        padding-left: 10px;
      }
    }
    .side-nav__sub-nav {
      .side-nav__sub-nav__item {
        a {
          display: block;
          height: 40px;
          line-height: 40px;
          font-size: 12px;
          color: #777;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-weight: 500;
          // &:hover {
          //   color: #0061ff !important;
          //   background-color: #fff;
          //   border-radius: 4px;
          //   margin-left: -10px;
          //   padding-left: 10px;
          // }
        }
      }
    }
  }
}
</style>
