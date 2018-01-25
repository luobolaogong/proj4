import Vue from 'vue'
import Vuetify from 'vuetify' // nec for stuff in App.vue
import 'vuetify/dist/vuetify.css'  // nec for stuff in App.vue
import App from './App'

import { store } from './store/store';

Vue.use(Vuetify);  // nec for stuff in App.vue
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
