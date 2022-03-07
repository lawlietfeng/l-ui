<template>
  <div class="demo">
    <div class="color-box" v-for="item in blueMap" :key="item.color">
      <div class="main-color" :style="{ background: item.color }">{{ item.name }}<br /><br />{{ item.color }}</div>
      <div class="gradual-color" :style="{ background: tintColor(item.color, 0.9) }">
        <div class="gradual-color-item" v-for="key in 8" :key="key" :style="{ background: tintColor(item.color, key / 10) }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blueMap: [
        { name: '飞燕草蓝', color: '#0f59a4' },
        { name: '群青', color: '#1772b4' },
        { name: '宝石蓝', color: '#2486b9' },
        { name: '睛蓝', color: '#5698c3' },
        { name: '晴山蓝', color: '#8fb2c9' },
        { name: '云水蓝', color: '#baccd9' },
      ],
    }
  },
  methods: {
    // 颜色混入
    tintColor(c, tint) {
      const color = c.replace('#', '')
      let red = parseInt(color.slice(0, 2), 16)
      let green = parseInt(color.slice(2, 4), 16)
      let blue = parseInt(color.slice(4, 6), 16)

      if (tint === 0) {
        // when primary color is in its rgb space
        return [red, green, blue].join(',')
      } else {
        red += Math.round(tint * (255 - red))
        green += Math.round(tint * (255 - green))
        blue += Math.round(tint * (255 - blue))
        red = red.toString(16)
        green = green.toString(16)
        blue = blue.toString(16)
        return `#${red}${green}${blue}`
      }
    },
  },
}
</script>

<style scoped lang="scss">
.demo {
  .color-box {
    height: 100px;
    width: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    .main-color {
      flex: 2;
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #fffef8;
      padding-left: 20px;
    }
    .gradual-color {
      flex: 1;
      display: flex;
      .gradual-color-item {
        width: 11.111111%;
      }
    }
  }
}
</style>
