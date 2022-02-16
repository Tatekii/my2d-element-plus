<template>
  <el-menu :collapse="collapse" class="el-menu-vertical-demo">
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
  </el-menu>
</template>

<script lang='ts' setup>
const props = defineProps<{ collapse: boolean }>()

</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
