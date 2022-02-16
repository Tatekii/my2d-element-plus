// 全局自动注册组件
import { App } from 'vue'

// interface mapItem {
//   name: string,
//   installFn: object
// }

// const map: mapItem[] = []
const map:any[] = []

const requireComponent = require.context(
  '.',
  true,
  /\.ts$/
)

requireComponent.keys().forEach((fileName: string) => {
  // console.log(fileName);
  // 排除自己
  if (fileName !== './index.ts') {
    // 获取组件配置
    const installConfig:any = requireComponent(fileName)
    map.push(installConfig.default || installConfig)
    // console.log(installConfig);

    // 获取组件的注册名
    // const componentName: string = upperFirst(
    //   camelCase(
    //     // 获取和目录深度无关的文件名
    //     fileName
    //       // .split('/')
    //       // .pop()
    //       .replace(/^\.\//, '')
    //       // ‘./ComA.vue’ => 'ComA.vue'
    //       .replace(/\.\w+$/, '')
    //     // => 'ComA'
    //   )
    // )

    // map.push({
    //   name: componentName,
    //   installFn: installConfig
    // })
  }
})
// console.log(map);

export default {
  install(app: App) {
    map.forEach(item => {
      // app.component(item.name, item.installFn)
      app.use(item)
    })
  }
}