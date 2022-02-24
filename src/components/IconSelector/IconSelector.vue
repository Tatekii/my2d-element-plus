<template>
  <el-button @click="openDialog" type="primary">
    <slot></slot>
  </el-button>

  <el-dialog v-model="dialogVisible" :title="title">
    <el-scrollbar height="400px">
      <!-- icons -->
      <div class="flex justify-center items-center flex-wrap gap-1">
        <div
          v-for="(item, index) in Object.keys(icons)"
          :key="index"
          @click="handleCopy(item)"
          class="w-1/12 border rounded flex items-center flex-col cursor-pointer overflow-hidden hover:bg-sky-400"
        >
          <component :is="`el-icon${formatCamel(item)}`" style="width: 2em;height:2em;"></component>
          <div class="text-xs text-ellipsis whitespace-nowrap overflow-hidden">{{ item }}</div>
        </div>
      </div>
    </el-scrollbar>
  </el-dialog>
</template>
<script lang='ts' setup>
import { ref, watch } from 'vue'
import * as icons from '@element-plus/icons-vue'
import { formatCamel } from '@/utils/index'
import useCopy from "@/hooks/useCopy"

const props = defineProps<{
  title: string,
  visible: boolean
}>()
const emits = defineEmits(['update:visible'])
const dialogVisible = ref<boolean>(props.visible)


watch(() => dialogVisible.value, val => {
  emits('update:visible', val)
})
watch(() => props.visible, val => {
  dialogVisible.value = val
})


// functions
const openDialog = (): void => {
  emits('update:visible', true)
}
// 复制string
const handleCopy = (name: string): void => {
  useCopy(name)
}
</script>

<style lang="scss" scoped>
</style>
