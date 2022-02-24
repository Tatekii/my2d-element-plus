import { App } from 'vue'
import iconSelector from './IconSelector.vue'

export default {
  install(app: App) {
    app.component('my-icon-selector', iconSelector)
  }
}