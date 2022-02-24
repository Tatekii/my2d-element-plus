<template>
  <!-- <el-menu :collapse="collapse" class="el-menu-vertical-demo">
    <el-menu-item index="1">
      <el-icon>
        <el-icon-menu />
      </el-icon>
      <template #title>Navigator 1</template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon>
        <el-icon-menu />
      </el-icon>
      <template #title>Navigator 2</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon>
        <el-icon-menu />
      </el-icon>
      <template #title>Navigator 3</template>
    </el-menu-item>
  </el-menu>-->
  <my-menu :collapse="collapse" class="el-menu-vertical-demo" :navList="listData" :defaultActive="$route.path" router></my-menu>
</template>

<script lang='ts' setup>
const props = defineProps<{ collapse: boolean }>()

const listData = [
  {
    icon: 'HomeFilled',
    name: '首页',
    index: '/'
  },
  {
    icon: 'Check',
    name: '图标选择器',
    index: '/iconSelector'
  },
  {
    icon: 'Location',
    name: '省市区选择',
    index: '/locationSelector'
  },
  {
    icon: 'Sort',
    name: '趋势标记',
    index: '/trend'
  },
  {
    icon: 'Timer',
    name: '时间选择',
    index: '/chooseTime'
  },
  {
    icon: 'Bell',
    name: '通知菜单',
    index: '/notification'
  },
  {
    icon: 'Menu',
    name: '导航菜单',
    index: '/menu'
  },
  {
    icon: 'TurnOff',
    name: '城市选择',
    index: '/citySelector'
  },
  {
    icon: 'DArrowRight',
    name: '进度条',
    index: '/progress'
  },
  {
    icon: 'ScaleToOriginal',
    name: '日历',
    index: '/calendar'
  },
  {
    icon: 'Setting',
    name: '表单',
    index: '/form'
  },
  {
    icon: 'Setting',
    name: '弹出框表单',
    index: '/modalForm'
  },
  {
    icon: 'ShoppingBag',
    name: '表格',
    index: '/table'
  }
]
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
