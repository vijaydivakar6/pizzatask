import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "popper.js";
import "bootstrap";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import "./assets/app.scss";


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
