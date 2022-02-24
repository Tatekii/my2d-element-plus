<template>
  <el-popover
    placement="bottom-start"
    :width="400"
    trigger="click"
    @show="popoverShow"
    @hide="popoverHide"
  >
    <template #reference>
      <!-- 监听区域 -->
      <div class="flex items-center custom-selector" ref="popoverRef">
        <span class="border-r-2 px-3">{{ city || '未选择城市' }}</span>
        <el-icon class="ml-1" :class="popVisible ? 'expand' : ''">
          <el-icon-arrow-down />
        </el-icon>
      </div>
    </template>

    <!-- 弹出内容 -->
    <div>
      <el-row class="flex justify-between">
        <el-radio-group v-model="listMode">
          <el-radio-button label="cityMode">城市</el-radio-button>
          <el-radio-button label="provinceMode">省份</el-radio-button>
        </el-radio-group>
        <!-- 城市下拉框 -->
        <el-select placeholder="请选择城市"></el-select>
      </el-row>

      <!-- 如果按城市 显示城市拼音首字母表 -->
      <template v-if="listMode === 'cityMode'">
        <!-- 首字母表 -->
        <div class="flex gap-1 flex-wrap my-2">
          <div
            class="border rounded px-2 cursor-pointer hover:bg-blue-400"
            v-for="(key, index) of Object.keys(cities)"
            @click="handleJumpToC(key)"
            :key="index"
          >{{ key }}</div>
        </div>
        <!-- 首字母城市 -->
        <el-scrollbar height="300px">
          <div
            class="flex border-t-2 border-blue-400 px-2 py-1 gap-1"
            v-for="[key, val] of Object.entries(cities)"
            :key="key"
            :id="`city_index_${key}`"
          >
            <div class="w-1/12">
              <span>{{ key }}</span>
            </div>
            <div class="flex flex-wrap w-11/12">
              <div
                class="px-2 cursor-pointer hover:bg-blue-400"
                v-for="item in val"
                :key="item.id"
                @click="handleChooseCity(item.name)"
              >{{ item.name }}</div>
            </div>
          </div>
        </el-scrollbar>
      </template>
      <template v-else>
        <!-- 首字母表 -->
        <div class="flex gap-1 flex-wrap my-2">
          <div
            class="border rounded px-2 cursor-pointer hover:bg-blue-400"
            v-for="(key, index) of Object.keys(provinces)"
            @click="handleJumpToP(key)"
            :key="index"
          >{{ provinces[key][0].name }}</div>
        </div>
        <el-scrollbar height="300px">
          <div
            class="flex border-t-2 border-blue-400 py-1 gap-1"
            v-for="[key, val] of Object.entries(provinces)"
            :key="key"
            :id="`province_index_${key}`"
          >
            <div class="w-1/12">
              <span>{{ val[0].name }}</span>
            </div>
            <div class="w-11/12 flex flex-wrap">
              <div
                class="px-2 cursor-pointer hover:bg-blue-400"
                v-for="(item, index) in val[0].data"
                :key="index"
                @click="handleChooseCity(item)"
              >{{ item }}</div>
            </div>
          </div>
        </el-scrollbar>
      </template>
    </div>
  </el-popover>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import cityData from './lib/cities'
import provinceData from './lib/province.json'
import { ProvinceItem, CityItem, ListModeType } from './types';
// props
const props = defineProps<{
  city: String
}>()
// emit v-model绑定的值
const emits = defineEmits(['update:city'])

// reference ref
const popoverRef = ref(null)

// popover展示关闭flag
const popVisible = ref<boolean>(false)
const popoverShow = () => popVisible.value = true
const popoverHide = () => popVisible.value = false

// 城市，省份数据
const cities = ref(cityData.cities)
const provinces = ref(provinceData)

// 列表模式
const listMode = ref<ListModeType>('cityMode')

// 选择城市
const handleChooseCity = (name: string) => {
  // 选择城市后隐藏popover
  (popoverRef.value! as HTMLElement).click()
  emits('update:city', name)
}
// 跳转到首字母城市数组
const handleJumpToC = (chart: string) => {
  const el = document.getElementById(`city_index_${chart}`)
  el?.scrollIntoView()
}
const handleJumpToP = (chart: string) => {
  const el = document.getElementById(`province_index_${chart}`)
  el?.scrollIntoView()
}

</script>

<style lang="scss" scoped>
.custom-selector {
  // 图标旋转
  :deep(i.el-icon) {
    transition: all 0.2s linear;
    &.expand {
      // deg
      transform: rotate(180deg);
    }
  }
}
</style>
