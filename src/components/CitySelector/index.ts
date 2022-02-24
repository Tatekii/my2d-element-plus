import {App} from 'vue'
import CitySelector from './CitySelector.vue'

export default {
  install(app:App){
    app.component('my-city-selector',CitySelector)
  }
}