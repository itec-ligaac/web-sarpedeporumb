import Vue from 'vue';

import FoundationCss from 'foundation-sites/dist/css/foundation.min.css';
import FoundationJs from 'foundation-sites';

import $ from 'jquery';
import router from './router';
import store from './store';

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  FoundationCss,
  FoundationJs,
  router,
  store,
  render: (h) => h(App),
  mounted: () => $(document).foundation(),

}).$mount('#app');
