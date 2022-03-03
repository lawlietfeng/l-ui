<template>
  <div class="examples-layout" :class="{ inIframe: !inIframe }">
    <div class="examples-page__container" :class="{ inIframe: !inIframe }">
      <div v-if="inIframe && isComponentPage" class="examples-layout__nav" :class="{ inIframe: !inIframe }">
        <side-nav />
      </div>
      <div class="examples-layout__content" :class="{ inIframe: !inIframe, isComponentPage: isComponentPage }">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import sideNav from './side-nav.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    sideNav,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['inIframe']),
    isComponentPage() {
      return /^\/component/.test(this.$route.fullPath);
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin scroll-bar {
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
}
$nav-width: 200px;
.examples-layout {
  height: calc(100vh - 58px);
  overflow-y: auto;
  overflow-y: overlay;
  @include scroll-bar;
  &.inIframe {
    width: auto;
    height: 100vh;
  }
  .examples-page__container {
    margin: 0 auto;
    width: 1366px;
    position: relative;

    // padding-left: $nav-width;
    &.inIframe {
      width: auto;
    }
    .examples-layout__nav {
      position: fixed;
      top: 58px;
      bottom: 0;
      width: $nav-width;
      height: 100%;
      overflow-y: auto;
      overflow-y: overlay;
      @include scroll-bar;
      &.inIframe {
        &::-webkit-scrollbar {
          width: 0 !important;
        }
      }
    }
    .examples-layout__content {
      height: 100%;
      padding: 20px 0 20px 20px;

      &.isComponentPage {
        padding-left: calc($nav-width + 20px);
      }
      &.inIframe {
        padding: 20px;
        &::-webkit-scrollbar {
          width: 0 !important;
        }
      }
      ::v-deep .content {
        h2,
        h3,
        h4,
        h5 {
          font-weight: 400;
          color: #1f2f3d;
          a {
            float: left;
            margin-left: -20px;
            opacity: 0;
            cursor: pointer;
            &:hover {
              opacity: 0.4;
            }
          }
        }
        table {
          border-collapse: collapse;
          width: 100%;
          background-color: #fff;
          font-size: 14px;
          margin-bottom: 45px;
          line-height: 1.5em;
          border-radius: 4px;
          border: 1px solid #ECECEC;
          td,
          th {
            padding: 10px;
            max-width: 250px;
            height: 40px;
            &:first-child {
              padding-left: 10px;
            }
          }
          th {
            text-align: left;
            white-space: nowrap;
            color: #333;
            font-weight: 700;
            background: #F9FAFA;

          }
          td {
            color: #606266;
            border-bottom: 1px solid #ECECEC;
            // &:nth-child(n+2){
            //   border-left: 1px solid #ECECEC;
            // }
            &:nth-child(n+4) {
              color: #0061FF;
            }
          }
        }
      }
    }
  }
}
</style>
