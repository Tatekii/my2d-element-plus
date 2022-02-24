import { App } from 'vue'
import Menu from "./Menu"

export default {
  install(app: App) {
    app.component('my-menu', Menu)
  }
}