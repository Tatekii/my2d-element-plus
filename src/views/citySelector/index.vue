<template>
  <my-city-selector v-model:city="city"></my-city-selector>
<div>当前城市：{{city}}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const city = ref<string>('')
</script>

<style lang="" scoped>

</style>
