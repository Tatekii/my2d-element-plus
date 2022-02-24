<template>
  <my-form :options="options" label-width="80px" ref="form"></my-form>
</template>

<script lang='ts' setup>
import formConfig from './formConfig'
import {FormInstance, FormOptions} from "@/components/Form/types"
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref } from 'vue'

// 表单配置文件
const options:FormOptions[] = formConfig

const formRef = ref(null)
</script>

<style lang="" scoped>

</style>
