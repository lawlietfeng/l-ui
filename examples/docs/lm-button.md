## Loading 组件

### 基础用法
:::demo button 的基础用法。

```html
<template>
  
  <l-button type="primary">{{text}}1</l-button>
  <l-button type="danger">{{text}}2</l-button>
  <l-button type="info">{{text}}3</l-button>
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

### 基础用法
:::demo button 的基础用法。

```html
<template>
  
  <l-button type="success">{{text}}1</l-button>
  <l-button type="info">{{text}}2</l-button>
  <l-button type="warning">{{text}}3</l-button>
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
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 类型   | string    |   primary / success / warning / danger / info |     —    |