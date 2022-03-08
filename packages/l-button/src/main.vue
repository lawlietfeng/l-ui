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

