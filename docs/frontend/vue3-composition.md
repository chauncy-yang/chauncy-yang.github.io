# Vue3 组合式 API

## ref

`ref` 用于创建响应式数据，可以包裹任何类型的值。

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">{{ count }}</button>
</template>
```

## reactive

`reactive` 用于创建响应式对象，只接受对象类型。

```js
import { reactive } from 'vue'

const state = reactive({
  name: 'VuePress',
  version: 2,
})
```

## computed

`computed` 返回一个只读的响应式引用。

```js
import { ref, computed } from 'vue'

const price = ref(100)
const tax = computed(() => price.value * 0.13)
```
