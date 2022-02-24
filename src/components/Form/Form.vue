<template>
  <el-form ref="form" :model="model" :rules="rules" v-bind="$attrs"></el-form>
</template>

<script lang="ts" setup>
import { PropType, ref, onMounted,watch } from 'vue'
import { FormInstance, FormOptions } from './types'
import { cloneDeep } from 'lodash-es'


const props = defineProps({
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  }
})

const model = ref<any>(null)
const rules = ref<any>(null)
const form = ref<FormInstance | null>(null)


/**
 * 合并配置文件生成model和rules
 */
const initForm = () => {
  if (props.options && props.options.length) {
    const modelObj: any = {}
    const ruleObj: any = {}
    props.options.forEach((item: FormOptions) => {
      modelObj[item.prop!] = item.value
      ruleObj[item.prop!] = item.rules
    })
    model.value = cloneDeep(modelObj)
    rules.value = cloneDeep(ruleObj)
  }
}
onMounted(() => {
  initForm()
})
// 监听父组件传递进来的options
watch(() => props.options, () => {
  initForm()
}, { deep: true })
</script>

<style lang="" scoped>

</style>
