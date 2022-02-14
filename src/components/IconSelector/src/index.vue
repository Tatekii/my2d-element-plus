<template>
  <el-button @click="openDialog">选择图标</el-button>

  <!-- <el-dialog v-model="dialogvisible" :title="title"></el-dialog> -->
</template>

<script lang='ts' setup>
import {ref} from 'vue'

const visible = ref(false)

const openDialog = () => {
  
}
</script>

<style lang="scss" scoped>

</style>
