<script>
import { copy } from '../utils/index'
import colorMap from '../color.json'
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
      whiteMap: [
        { name: '月影白', color: '#c0c4c3' },
        { name: '银鱼白', color: '#cdd1d3' },
        { name: '云峰白', color: '#d8e3e7' },
        { name: '月白', color: '#eef7f2' },
        { name: '象牙白', color: '#fffef8' },
      ],
      colorMap,
    }
  },
  methods: {
    copy: copy,
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

## 蓝色

<template>
  <div class="color">
    <div class="color-box" v-for="item in blueMap" :key="item.color">
      <div class="main-color" @click="copy(item.color)" :style="{ background: item.color }">{{ item.name }}<br /><br />{{ item.color }}</div>
      <div class="gradual-color" :style="{ background: tintColor(item.color, 0.9) }">
        <div class="gradual-color-item" @click="copy(tintColor(item.color, key / 10))" v-for="key in 8" :key="key" :style="{ background: tintColor(item.color, key / 10) }"></div>
      </div>
    </div>
  </div>
</template>

## 白色

<template>
  <div class="color">
    <div class="color-box" v-for="item in whiteMap" :key="item.color">
      <div class="main-color" @click="copy(item.color)" :style="{ background: item.color, color: '#000' }">{{ item.name }}<br /><br />{{ item.color }}</div>
      <div class="gradual-color" :style="{ background: tintColor(item.color, 0.9) }">
        <div class="gradual-color-item"  @click="copy(tintColor(item.color, key / 10))" v-for="key in 8" :key="key" :style="{ background: tintColor(item.color, key / 10) }"></div>
      </div>
    </div>
  </div>
</template>

## 全部色彩

<template>
  <div class="color">
    <div class="color-box" v-for="item in colorMap" :key="item.hex">
      <div class="main-color" @click="copy(item.hex)" :style="{ background: item.hex, color: '#000' }">{{ item.name }}<br /><br />{{ item.hex }}</div>
      <div class="gradual-color" :style="{ background: tintColor(item.hex, 0.9) }">
        <div class="gradual-color-item"  @click="copy(tintColor(item.hex, key / 10))" v-for="key in 8" :key="key" :style="{ background: tintColor(item.hex, key / 10) }"></div>
      </div>
    </div>
  </div>
</template>
