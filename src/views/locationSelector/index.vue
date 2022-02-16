<template>
  <my-location-selector @locationChange="locationChange"></my-location-selector>
  当前位置：{{location}}
</template>

<script lang='ts' setup>
import {ref} from 'vue'
const location = ref<object>()
const locationChange = (val:any) => {
  location.value = val
}
</script>

<style lang="" scoped>

</style>
