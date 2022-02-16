<template>
  <!-- 四级联动的位置选择器 -->
  <div class="flex">
    <div>
      <span>省：</span>
      <el-select v-model="province">
        <el-option v-for="p in pca" :key="p.code" :value="p.code" :label="p.name"></el-option>
      </el-select>
    </div>
    <div>
      <span>市：</span>
      <el-select v-model="city" :disabled="!province">
        <el-option v-for="p in cityRange" :key="p.code" :value="p.code" :label="p.name"></el-option>
      </el-select>
    </div>
    <div>
      <span>区县：</span>
      <el-select v-model="urban" :disabled="!city">
        <el-option v-for="p in urbanRange" :key="p.code" :value="p.code" :label="p.name"></el-option>
      </el-select>
    </div>
    <div>
      <span>乡镇：</span>
      <el-select v-model="village" :disabled="!urban">
        <el-option v-for="p in villageRange" :key="p.code" :value="p.code" :label="p.name"></el-option>
      </el-select>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref, watch, defineEmits } from 'vue'
import pca from '../lib/pcas-code.json'

interface areaItem {
  name: string,
  code: string,
}
interface areaFormat {
  name: string,
  code: string,
  children?: areaFormat[]
}

const province = ref<string>('')
const city = ref<string>('')
const urban = ref<string>('')
const village = ref<string>('')

const cityRange = ref<areaFormat[]>([])
const urbanRange = ref<areaFormat[]>([])
const villageRange = ref<areaFormat[]>([])

// watch一级选择
watch(() => province.value, val => {
  city.value = ''
  urban.value = ''
  village.value = ''
  if (val) {
    cityRange.value = pca.find(p => p.code === val)!.children
  }
})
// watch 二级选择
watch(() => city.value, val => {
  urban.value = ''
  village.value = ''
  if (val) {
    urbanRange.value = cityRange.value.find(p => p.code === val)!.children || []
  }
})
// watch 三级选择
watch(() => urban.value, val => {
  village.value = ''
  if (val) {
    villageRange.value = urbanRange.value.find(p => p.code === val)!.children || []
  }
})
// watch 四级选择
const emits = defineEmits(['locationChange'])
watch(() => village.value, val => {
  if (val) {
    const provinceData: areaItem = {
      code: province.value,
      name: province.value && pca.find(p => p.code === province.value)!.name
    }
    const cityData: areaItem = {
      code: city.value,
      name: city.value && cityRange.value.find(p => p.code === city.value)!.name
    }
    const urbanData: areaItem = {
      code: urban.value,
      name: urban.value && urbanRange.value.find(p => p.code === urban.value)!.name
    }
    const villageData: areaItem = {
      code: village.value,
      name: village.value && villageRange.value.find(p => p.code === village.value)!.name
    }
    emits('locationChange', {
      provinceData,
      cityData,
      urbanData,
      villageData
    })
  }

})

</script>

<style lang="" scoped>

</style>
