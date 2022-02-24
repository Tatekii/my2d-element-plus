import { App } from "vue"
import List from './List.vue'

export default {
  install(app: App) {
    app.component('my-list', List)
  }
}