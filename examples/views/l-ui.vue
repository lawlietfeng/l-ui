<template>
  <div class="main-container">
    <div class="main-banner" ref="banner">
      <h2>balabalaba</h2>
      <h3>labalabala</h3>
      <button @click="$router.push('/components')">babala</button>
      <div style="display: flex">
        <div style="width: 50px; height: 50px; background-color: #0f59a4">飞燕草蓝</div>
        <div style="width: 50px; height: 50px; background-color: #1772b4">群青</div>
        <div style="width: 50px; height: 50px; background-color: #2486b9">宝石蓝</div>
        <div style="width: 50px; height: 50px; background-color: #5698c3">睛蓝</div>
        <div style="width: 50px; height: 50px; background-color: #8fb2c9">晴山蓝</div>
        <div style="width: 50px; height: 50px; background-color: #baccd9">云水蓝</div>
      </div>
      <div style="display: flex">
        <div style="width: 50px; height: 50px; background-color: #c0c4c3">月影白</div>
        <div style="width: 50px; height: 50px; background-color: #cdd1d3">银鱼白</div>
        <div style="width: 50px; height: 50px; background-color: #d8e3e7">云峰白</div>
        <div style="width: 50px; height: 50px; background-color: #eef7f2">月白</div>
        <div style="width: 50px; height: 50px; background-color: #fffef8">象牙白</div>
        <div style="width: 50px; height: 50px; background-color: #ffffff">白</div>
      </div>
    </div>
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
@import '../style/var.scss';
.main-container {
  margin-left: -20px;
  h2 {
    font-size: 44px;
    margin: 57px 0 0 0;
    text-align: center;
    font-weight: 500;
    // background-color: $--color-primary-light-4;
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
    h2 {
      color: #c0c4c3;
      text-shadow: 0 0 0.1em #fff, 0 0 0.2em #fff;
    }
    h3 {
      margin-top: 2px;
      font-weight: 200;
      color: #cdd1d3;
      text-shadow: 0 0 0.1em #fff, 0 0 0.2em #fff;
    }
    button {
      width: 176px;
      height: 46px;
      background: #0069ff;
      border-radius: 8px;
      outline: none;
      border: none;
      font-size: 22px;
      color: #fffef8;
      cursor: pointer;
    }
  }
}
@for $c from 4 to 54 {
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
