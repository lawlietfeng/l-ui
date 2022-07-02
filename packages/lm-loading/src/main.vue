<template>
  <div class="lm-loading">
    <div class="loading">
      <div class="loading-inner">
        <!-- <div class="loading-line-wrap">
          <div class="loading-line"></div>
        </div>
        <div class="loading-line-wrap">
          <div class="loading-line"></div>
        </div>
        <div class="loading-line-wrap">
          <div class="loading-line"></div>
        </div>
        <div class="loading-line-wrap">
          <div class="loading-line"></div>
        </div>
        <div class="loading-line-wrap">
          <div class="loading-line"></div>
        </div>
      </div> -->
    </div>
    <div class="loading-text">{{ loadingText }}</div>
  </div>
</template>

<script>
export default {
  name: 'LmLoading',
  props: {
    loadingText: {
      type: String,
      default: '',
    },
  },
}
</script>
