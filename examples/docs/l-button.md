## button 按钮

:::demo `type` 控制颜色

```html
<template>
  <l-button type="primary">{{text}}</l-button>
  <l-button type="success">{{text}}</l-button>
  <l-button type="warning">{{text}}</l-button>
  <l-button type="danger">{{text}}</l-button>
  <l-button type="info">{{text}}</l-button>
</template>

<script>
  export default {
    data() {
      return {
        text: "Button"
      };
    }
  };
</script>
```

:::

### Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|------------- |---------------- |---------------- |---------------------- |-------- |
| type        |  颜色           |  string  | primary, success, warning, danger, info |    primary    |
