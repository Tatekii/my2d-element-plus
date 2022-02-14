<template>
  <el-container>
    <el-aside width="auto">
      <NavSide :collapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header>
        <NavHeader v-model:collapse="isCollapse" />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang='ts' setup>
import NavHeader from './navHeader/index.vue'
import NavSide from './navSide/index.vue'

import { ref } from 'vue'
const isCollapse = ref<boolean>(false)

</script>

<style lang="scss" scoped>
.el-container {
  :deep(.el-header) {
    padding: 0;
  }
  :deep(.el-main) {
    padding: 0;
  }
}
</style>
