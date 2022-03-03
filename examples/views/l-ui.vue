<template>
  <div class="main-container">
    <div class="main-banner" ref="banner">
      <h2>balabalaba</h2>
      <h3>labalabala</h3>
      <button @click="$router.push('/components')">babala</button>
    </div>
    <h3>babula</h3>
    <ul class="main-card-list">
      <li class="card">
        <!-- <h3>产品</h3>
        <p>布局框架交互视觉样式有据可依<br>释放精力专</p> -->
      </li>
      <li class="card">
        <!-- <h3>设计</h3>
        <p>高度的一致性是跨系统操作的高效<br>保证；清晰的指向，降低理解门槛</p> -->
      </li>
      <li class="card">
        <!-- <h3>研发</h3>
        <p>节省50%开发时间，无需关心组件逻辑<br>focus业务逻辑，便捷高效</p> -->
      </li>
    </ul>
    <h3>bubala</h3>
    <ul class="main-source-list">
      <li class="source">
        <img src="../assets/sketch.png" />
        <!-- <span>Sketch组件库</span> -->
      </li>
      <li class="source">
        <img src="../assets/figma.png" />
        <!-- <span>Figma</span> -->
      </li>
      <li class="source">
        <img src="../assets/vue2.png" />
        <!-- <span>Vue</span> -->
      </li>
      <li class="source">
        <img src="../assets/vue2.png" />
        <!-- <span>Vue-Mobile</span> -->
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.createCircle(this.$refs.banner, 70)
  },
  methods: {
    createCircle(target = document.body, count, className = 'circle') {
      const df = document.createDocumentFragment()
      for (let i = 0; i < count; i++) {
        const div = document.createElement('div')
        div.className = className
        df.appendChild(div)
      }
      target.appendChild(df)
    },
  },
}
</script>
<style scoped lang="scss">
.main-container {
  margin-left: -20px;
  h2 {
    font-size: 44px;
    margin: 57px 0 0 0;
    text-align: center;
    font-weight: 500;
  }
  h3 {
    margin-top: 80px;
    font-size: 42px;
    text-align: center;
  }
  .main-banner,
  .main-card-list,
  .main-source-list {
    margin: 0 auto;
    width: 1095px;
  }
  .main-banner {
    height: 510px;
    border-radius: 40px;
    text-align: center;
    overflow: hidden;
    position: relative;
    // background: url('../assets/banner.png') no-repeat;
    background-size: cover;
    ::v-deep .circle {
      position: absolute;
      border-radius: 50%;
      z-index: -1;
      filter: blur(20px);
      @for $i from 4 to 54 {
        &:nth-child(#{$i}) {
          width: random(100) + 0px;
          height: random(100) + 0px;
          top: random(500) + 0px;
          left: random(1200) + 0px;
          background-color: rgb(random(255), random(255), random(255));
          animation: randomMove#{$i} 30s ease-in-out random(3) + 0s infinite alternate;
        }
      }
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;
      background: linear-gradient(#eef5fe, #eef4fe);
    }

    h3 {
      margin-top: 2px;
      font-weight: 200;
    }
    button {
      width: 176px;
      height: 46px;
      background: #0069ff;
      border-radius: 8px;
      outline: none;
      border: none;
      font-size: 16px;
      color: #fff;
      cursor: pointer;
    }
  }
  .main-card-list {
    display: flex;
    .card {
      flex: 1;
      height: 400px;
      background-color: purple;
      border-radius: 26px;
      background: url('../assets/product.png') no-repeat;
      background-size: cover;
      color: #ffffff;
      padding-left: 30px;
      &:nth-child(n + 2) {
        margin-left: 30px;
      }
      &:nth-child(2) {
        background: #1ecb93;
        background: url('../assets/design.png') no-repeat;
      }
      &:nth-child(3) {
        background: #ff7230;
        background: url('../assets/develop.png') no-repeat;
      }
      & > h3 {
        font-size: 32px;
        line-height: 60px;
        margin: 16px 0 0;
        text-align: left;
      }
      & > p {
        font-size: 14px;
        line-height: 24px;
        margin: 36px 0 0;
        text-align: left;
      }
    }
  }
  .main-source-list {
    display: flex;
    .source {
      flex: 1;
      height: 188px;
      background-color: purple;
      border-radius: 26px;
      background: #f7f9fa;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      font-size: 16px;
      color: #101010;
      &:nth-child(n + 2) {
        margin-left: 38px;
      }
      & > img {
        width: 95px;
        height: 95px;
        margin-bottom: 25px;
      }
      & > span {
        font-size: 16px;
        color: #101010;
        line-height: 22px;
      }
    }
  }
}
@for $c from 4 to 54 {
  @keyframes randomMove#{$c} {
    @for $i from 0 to 10 {
      #{$i * 10%}{
        @if $i == 0 {
          transform: translate(0, 0) rotate(0deg) scale(1);
        } @else {
          transform: translate(random(400) - 200px, random(400) - 200px) rotate(#{$i * 360deg})  scale(1.2);
        }
      }
    }
  }
}
</style>
