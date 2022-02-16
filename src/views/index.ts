const map:any[] = []

const requireContext = require.context(
  '.',
  true,
  /\.vue$/
)


requireContext.keys().forEach((fileName: string) => {
  // 排除自己
  if (fileName !== './Home.vue') {
    console.log(fileName);
    
    // 获取组件配置
    const itemConfig:any = requireContext(fileName)


    // ./iconSelector/index.vue
    const viewName = fileName.match(/\/(\S+)+\//)![1]
    const viewCom = requireContext(fileName)
  

    map.push({
      name: viewName,
      comp: viewCom.default || viewCom
    })
  }
})

export default map