import Vue from "vue";

import 'normalize.css/normalize.css'

import { Button, ButtonGroup } from "element-ui";

import "element-ui/lib/theme-chalk/index.css";

import '@/style/index.less' // global css

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(Button);
Vue.use(ButtonGroup);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
