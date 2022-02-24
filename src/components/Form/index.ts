import { App } from "vue"
import Form from './Form.vue'

export default {
  install(app: App) {
    app.component('my-form', Form)
  }
}