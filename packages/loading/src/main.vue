<template>
  <div class="loading__box">
    <div class="loading__box-bg">
      <div class="g-container">
        <div class="g-first"></div>
        <div class="g-ball"></div>
        <div class="g-ball"></div>
        <div class="g-ball"></div>
        <div class="g-ball"></div>
        <div class="g-ball"></div>
        <div class="g-ball"></div>
        <div class="g-ball"></div>
      </div>
    </div>
    <p>{{loadingText}}</p>
  </div>
</template>

<script>
export default {
  name: 'LLoading',
  props: {
    loadingText: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
$count: 7;
.loading__box {
  width: 140px;
  height: 50px;
  padding: 10px;
  background-color: #fff;
  overflow: hidden;
  position: relative;
  .loading__box-bg {
    position: absolute;
    top: 0;
    left: -40px;
    width: 200px;
    height: 50px;
    z-index: -1;
    display: flex;
    filter: blur(5px) contrast(8);
    background: #fff;
    display: flex;
  }
}
.g-container {
  margin: auto;
  position: relative;
  width: 20px;
  height: 20px;
}

.g-ball,
.g-first {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #1772b4;
  border-radius: 50%;
  transform: translate(-700%, 0);
  opacity: 0;
  // animation: move 3s infinite linear;
}

@for $i from 0 through $count {
  .g-ball:nth-child(#{$i}) {
    animation: move 3.5s infinite #{$i * 0.2 + 0.1}s linear;
  }
}

.g-first {
  animation: scaleMove 3.5s infinite linear;
}

@keyframes move {
  25% {
    opacity: 1;
    transform: translate(-1vw, 0);
  }
  50% {
    opacity: 1;
    transform: translate(1vw, 0);
  }
  75%,
  100% {
    opacity: 0;
    transform: translate(700%, 0);
  }
}

@keyframes scaleMove {
  25% {
    opacity: 1;
    transform: translate(-1vw, 0);
  }
  35% {
    opacity: 1;
    transform: scale(1);
  }
  70% {
    opacity: 1;
    transform: translate(1vw, 0) scale(2);
  }
  90%,
  100% {
    opacity: 0;
    transform: translate(1vw, 0) scale(1);
  }
}
</style>
