import {App} from "vue"
import LocationSelector from './LocationSelector.vue'


export default {
  install(app:App){
    app.component('my-location-selector',LocationSelector)
  }
}