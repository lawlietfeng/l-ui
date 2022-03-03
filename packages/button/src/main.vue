<template>
  <div class="l-button" :class="[type ? `l-button-${type}` : '']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LButton',
  data() {
    return {}
  },
  props: {
    type: {
      type: String,
      default: 'primary',
    },
  },
}
</script>

<style lang="scss" scoped>
.l-button {
  &:nth-child(n + 2) {
    margin-left: 10px;
  }
  &-primary {
    background-color: #409eff !important;
  }
  &-success {
    background-color: #67c23a !important;
  }
  &-warning {
    background-color: #e6a23c !important;
  }
  &-danger {
    background-color: #f56c6c !important;
  }
  &-info {
    background-color: #909399 !important;
  }
}
.l-button,
.l-button::after {
  /* width: 80px; */
  display: inline-block;
  font-family: 'Do Hyeon', sans-serif;
  /* width: 260px; */
  padding: 5px 15px;
  /* height: 80px; */
  text-align: center;
  font-size: 16px;
  /* line-height: 80px; */
  color: rgb(255, 251, 251);
  background: linear-gradient(30deg, transparent 10%, #00062b 10% 95%, #00e4ff 95%);
  box-shadow: 5px 0 0 rgb(4, 176, 255);
  cursor: pointer;
  position: relative;
}
.l-button::after {
  content: 'Aurora Borealis night';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-shadow: -5px -2px 0 rgb(0, 183, 255), 5px 2px 0 rgb(0, 255, 115);
  visibility: hidden;
  animation: san 1s steps(1, end) infinite;
}

@keyframes san {
  0% {
    clip-path: inset(20% -5px 60% 0);
    transform: translate(-6px, 5px);
    visibility: visible;
  }
  10% {
    clip-path: inset(50% -5px 30% 0);
    transform: translate(6px, -5px);
  }
  20% {
    clip-path: inset(20% -5px 60% 0);
    transform: translate(5px, 0px);
  }
  30% {
    clip-path: inset(80% -5px 5% 0);
    transform: translate(-8px, 5px);
  }
  40% {
    clip-path: inset(0 -5px 80% 0);
    transform: translate(-4px, -3px);
  }
  50% {
    clip-path: inset(50% -5px 30% 0);
    transform: translate(-6px, -5px);
  }
  60% {
    clip-path: inset(80% -5px 5% 0);
    transform: translate(-7px, 5px);
  }
  70% {
    clip-path: inset(0 -5px 80% 0);
    transform: translate(3px, 6px);
  }
  80% {
    clip-path: inset(50% -5px 30% 0);
    transform: translate(5px, 5px);
  }
  90% {
    clip-path: inset(20% -5px 60% 0);
    transform: translate(6px, -5px);
  }
  100% {
    clip-path: inset(0 -5px 80% 0);
    transform: translate(1px, 5px);
  }
}
</style>
