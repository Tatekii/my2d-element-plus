import { ElMessage } from 'element-plus'
/**
 * 复制文本
 * @param text 
 */
// export default function (text: string): void {
//   // 创建输入框并赋值
//   let input = document.createElement('input')
//   input.value = text
//   document.body.appendChild(input)
//   // 选中输入框并复制
//   input.select()
//   document.execCommand('Copy')
//   // 删除输入框
//   document.body.removeChild(input)

//   ElMessage.success('复制成功')
// }

export default (text: string): void => {
  if (navigator.clipboard) {
    // 取得访问剪贴板权限
    console.log(navigator.clipboard);
    
    navigator.clipboard?.writeText && navigator.clipboard.writeText(text)
  } else {
    // 创建输入框并赋值
    let input = document.createElement('input')
    input.value = text
    document.body.appendChild(input)
    // 选中输入框并复制
    input.select()
    document.execCommand('Copy')
    // 删除输入框
    document.body.removeChild(input)
  }
  ElMessage.success('复制成功')
}