// router 설정

import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Company from "@/views/Company.vue";
import Service from "@/views/Service.vue";
import Notice from "@/views/Notice.vue";

const routes = [
  {
    // 메인
    path: "/",
    name: "home",
    component: Home,
  },
  {
    // 회사 소개
    path: "/company",
    name: "company",
    component: Company,
  },
  {
    // 서비스 안내
    path: "/service",
    name: "service",
    component: Service,
  },
  {
    // 공지사항
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
