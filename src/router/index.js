// router 설정

import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Company from "../views/Company.vue";
import Service from "../views/Service.vue";
import Notice from "../views/Notice.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/company",
    name: "company",
    component: Company,
  },
  {
    path: "/service",
    name: "service",
    component: Service,
  },
  {
    path: "/notice",
    name: "notice",
    component: Notice,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
