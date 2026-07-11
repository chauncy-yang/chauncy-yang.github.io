# JavaScript 异步编程

## Callback → Promise → async/await 的演进

### Promise 基础

```js
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('数据加载完成'), 1000)
  })
}
```

### async/await

```js
async function loadData() {
  const data = await fetchData()
  console.log(data)
}
```
