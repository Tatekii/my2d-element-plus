// 驼峰命名转-
export const formatCamel = (str: string): string => {
  return str?.replace(/[A-Z]/g, $1 => `-${$1.toLowerCase()}`)
}