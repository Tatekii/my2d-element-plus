import { createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router/index'
import * as Icons from '@element-plus/icons-vue'
import { formatCamel } from "@/utils"
import myUi from './components/index'
// import myIcon from "./components/myIcon/index.vue"
// css
import './style/main.css'

const app = createApp(App)
// 全局注册icon为svg  el-icon-xxxx
for (const i in Icons) {
  app.component(`el-icon${formatCamel(i)}`, (Icons as any)[i])
}


// console.log(myIcon);
// app.component('MyIcon', myIcon)
import './components/index'


app.use(router).use(ElementPlus).use(myUi)
app.mount('#app')
