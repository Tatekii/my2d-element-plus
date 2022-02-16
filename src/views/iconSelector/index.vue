<template>
  <my-icon-selector title="选择图标" v-model:visible="visible">选择图标</my-icon-selector>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
const visible = ref<boolean>(false)
</script>

<style lang="" scoped>

</style>
