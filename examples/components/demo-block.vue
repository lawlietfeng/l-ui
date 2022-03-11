<template>
  <div class="demo-block" :class="[blockClass, { inIframe: inIframe }]">
    <div v-if="inIframe || !$route.path.includes('lm-')" class="source" :class="{ inIframe: inIframe }">
      <slot name="source"></slot>
    </div>
    <div v-if="$slots.default && !inIframe" class="description">
      <slot></slot>
      <div class="demo-block-control">
        <svg-icon icon-class="openOnline"></svg-icon>
        <svg-icon ref="copy" icon-class="copy" @click.native="copyCode"></svg-icon>
        <svg-icon icon-class="code" @click.native="isExpanded = !isExpanded"></svg-icon>
      </div>
    </div>
    <div v-if="!inIframe" ref="meta" class="meta">
      <div class="highlight">
        <slot name="highlight"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { copy } from '../utils/index'
export default {
  data() {
    return {
      isExpanded: false,
    }
  },
  computed: {
    ...mapGetters(['inIframe']),
    blockClass() {
      return ` demo-${this.$route.name}`
    },
    controlText() {
      return this.isExpanded ? '隐藏代码' : '显示代码'
    },
    codeArea() {
      return this.$el.getElementsByClassName('meta')[0]
    },
    codeAreaHeight() {
      return this.$el.getElementsByClassName('highlight')[0].clientHeight + 20
    },
  },
  watch: {
    isExpanded(val) {
      this.codeArea.style.height = val ? `${this.codeAreaHeight + 1}px` : '0'
    },
  },
  methods: {
    copyCode() {
      copy(this.$refs.meta.innerText)
      console.log('拷贝成功')
    },
  },
}
</script>
<style lang="scss" scoped>
.demo-block {
  border-radius: 3px;
  transition: 0.2s;
  &.inIframe {
    border: none;
  }
  .hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }
  code {
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
  }
  .source {
    padding: 15px;
    &.inIframe {
      padding: 0;
    }
  }
  .meta {
    overflow: hidden;
    height: 0;
    transition: height 0.2s;

    .highlight {
      margin-top: 20px;
      pre {
        margin: 0;
      }
      code.hljs {
        margin: 0;
        border: none;
        max-height: none;
        border-radius: 0;
        padding: 1em;
        border-radius: 4px;
        &::before {
          content: none;
        }
      }
    }
  }
  .description {
    padding: 20px;
    box-sizing: border-box;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    background-color: #f9fafa;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      margin: 0;
      line-height: 26px;
    }
    code {
      color: #5e6d82;
      background-color: #e6effb;
      margin: 0 4px;
      display: inline-block;
      padding: 1px 5px;
      font-size: 12px;
      border-radius: 3px;
      height: 18px;
      line-height: 18px;
    }
    .demo-block-control {
      border: solid 1px #eaeefb;
      width: 106px;
      height: 30px;
      border-radius: 15px;
      box-sizing: border-box;
      background-color: #fff;
      color: #409eff;
      display: flex;
      align-items: center;
      justify-content: center;
      ::v-deep .svg-icon {
        width: 12px;
        height: 12px;
        cursor: pointer;
        fill: #000;
        &:hover {
          fill: #0061ff;
        }
        &:nth-child(n + 2) {
          margin-left: 18px;
        }
        // &:first-child{
        //   cursor: url('../assets/mouse.png'), auto;
        // }
      }
    }
  }
}
</style>
