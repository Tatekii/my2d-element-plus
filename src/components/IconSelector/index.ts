import { App } from 'vue'
import iconSelector from './src/index.vue'

export default {
  install(app: App) {
    app.component('my-icon-selector', iconSelector)
  }
}