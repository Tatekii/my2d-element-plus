import {App} from "vue"
import LocationSelector from './src/index.vue'


export default {
  install(app:App){
    app.component('my-location-selector',LocationSelector)
  }
}