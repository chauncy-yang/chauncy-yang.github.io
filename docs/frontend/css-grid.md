# CSS Grid 布局

## 基本概念

CSS Grid 是一个二维布局系统，可以同时控制行和列。

## 容器属性

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 16px;
}
```
