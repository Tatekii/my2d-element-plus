# 二次封装element-plus
[慕课网 基于Vue3+Vite+TS，二次封装element-plus业务组件](https://coding.imooc.com/class/551.html)

## Todo
- [x]全局注册icon
- [x]自动伸缩宽度collapse
> require.context能力由@originjs/vite-plugin-require-context提供
- [x]批量注册组件，自动`app.use`
- [x]批量注册路由
- [x]dialog组件的v-model visible
- [x]图标组件`component :is`
- [x]复制文本功能hooks`input+exec`
- [x]4级联动省市区选择 
- [x]`app.use`全局注册组件
- [x]`useSlots`
```javascript
<template>
  <div class="my-header" v-if="slots.header"></div>
</template>

const slots  = useSlots()
```
- [x]`$attrs``useAttrs`传属性
```javascript
// JSX中
const $attrs = useAttrs()
<h1  {...$attrs}></h1>
```
- [x]JSX组件
- [x]动态渲染自定义键名导航
- []`Element.scrollIntoView()`
- []
- []
- []
- []
- []
- []
- []
- []
