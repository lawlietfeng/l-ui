<template>
  <div class="main-container" ref="container"></div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.createCircle(this.$refs.container, 70)
  },
  methods: {
    createCircle(target = document.body, count, className = 'circle') {
      const df = document.createDocumentFragment()
      for (let i = 0; i < count; i++) {
        const div = document.createElement('div')
        div.className = className
        div.style.backgroundColor = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},${Math.random()})`
        div.style.top = `${Math.random() * 1080}px`
        div.style.left = `${Math.random() * 1920}px`
        df.appendChild(div)
      }
      target.appendChild(df)
    },
  },
}
</script>
<style scoped lang="scss">
@import '../style/var.scss';
.main-container {
  margin-left: -20px;
  position: relative;
  height: 100%;
  ::v-deep .circle {
    position: absolute;
    border-radius: 50%;
    z-index: -1;
    filter: blur(20px);
    @for $i from 4 to 74 {
      &:nth-child(#{$i}) {
        width: random(100) + 0px;
        height: random(100) + 0px;
        // top: random(1080) + 0px;
        // left: random(1920) + 0px;
        // background-color: rgb(random(255), random(255), random(255));
        animation: randomMove#{$i} 30s ease-in-out random(3000) + 0ms infinite alternate;
      }
    }
  }
}
@for $c from 4 to 74 {
  @keyframes randomMove#{$c} {
    @for $i from 0 to 10 {
      #{$i * 10%} {
        @if $i == 0 {
          transform: translate(0, 0) rotate(0deg) scale(1);
        } @else {
          transform: translate(random(400) - 200px, random(400) - 200px) rotate(#{$i * 360deg}) scale(1.2);
        }
      }
    }
  }
}
</style>
