<template>
  <el-popover
    placement="bottom"
    trigger="click"
    popper-class="notification-popper-class"
    :width="300"
  >
    <template #default>
      <!-- 弹出内容插槽 -->
      <!-- 给最外层的插槽位置 -->
      <slot name="content"></slot>
    </template>
    <template #reference>
      <!-- 监听插槽 -->
      <el-badge :value="notifyCount" :max="max" class="item">
        <component class="w-6 h-6" :is="`el-icon${formatCamel(icon)}`"></component>
      </el-badge>
    </template>
  </el-popover>
</template>

<script lang="ts" setup>
import { formatCamel } from '@/utils'
defineProps({
  // 通知图标 默认图标
  icon: {
    type: String,
    default: 'Notification'
  },
  max: {
    type: Number,
    default: 99
  },
  notifyCount: {
    type: [Number, String],
    default: ''
  },
  isDot: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss">
.notification-popper-class {
  padding: 0 !important;
} 
</style>
