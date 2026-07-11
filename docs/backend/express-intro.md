# Node.js Express 入门

## 安装

```bash
mkdir my-api && cd my-api
npm init -y
npm install express
```

## Hello World

```js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

app.listen(3000, () => console.log('Server running on port 3000'))
```
