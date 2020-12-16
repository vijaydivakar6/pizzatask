import Vue from "vue";
import VueRouter from "vue-router";
import Myorders from "../views/Myorders.vue";
import Editorder from "../views/Editorder.vue";
import Orderpizza from "../views/Orderpizza.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Myorders",
    component: Myorders
  },
  {
    path: "/editorder",
    name: "Editorder",
    component: Editorder
  },
  {
    path: "/orderpizza",
    name: "Orderpizza",
    component: Orderpizza
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
