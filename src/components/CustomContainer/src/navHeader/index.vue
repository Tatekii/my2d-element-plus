<template>
  <div class="header">
    <span @click="toggle">
      <el-icon>
        <el-icon-expand v-if="collapse"></el-icon-expand>
        <el-icon-fold v-else></el-icon-fold>
      </el-icon>
    </span>
  </div>
</template>

<script lang='ts' setup>
const props = defineProps<{ collapse: boolean }>()
const emits = defineEmits(['update:collapse'])

const toggle = () => {
  emits('update:collapse', !props.collapse)
}
</script>

<style lang="scss" scoped>
.header{
  height: 60px;
  @apply flex items-center bg-gray-300 p-4;
}
</style>
