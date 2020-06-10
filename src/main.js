import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { extend, localize } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import en from "vee-validate/dist/locale/en.json";

Vue.config.productionTip = false;

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize("en", en);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
