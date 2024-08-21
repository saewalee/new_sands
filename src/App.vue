<!-- 메인 페이지 / 기본 -->

<template>
  <nav class="flex gap-10 mb-20">
    <router-link to="/">Home</router-link>
    <router-link to="/company">About</router-link>
    <router-link to="/notice">Notice</router-link>
    <router-link to="/service">Service</router-link>
  </nav>
  <router-view />
</template>
