<template>
  <div class="loading__box">
    <div class="loading__box-bg">
      <div class="loading__box-container">
        <div class="loading__box-first"></div>
        <div class="loading__box-ball"></div>
        <div class="loading__box-ball"></div>
        <div class="loading__box-ball"></div>
        <div class="loading__box-ball"></div>
        <div class="loading__box-ball"></div>
        <div class="loading__box-ball"></div>
        <div class="loading__box-ball"></div>
        <div class="loading__box-ball"></div>
      </div>
    </div>
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

