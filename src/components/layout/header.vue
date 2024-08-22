<template>
  <header>
    <div class="con">
      <h1>
        <router-link to="/">
          <img src="../../images/logo.svg" alt="샌즈랩 로고" />
        </router-link>
      </h1>
      <nav class="menu-item">
        <router-link to="/">샌즈랩</router-link>
        <router-link to="/company">서비스</router-link>
        <router-link to="/notice">솔루션</router-link>
        <router-link to="/service">기술</router-link>
        <router-link to="/service">소식</router-link>
      </nav>
    </div>
  </header>

  <!-- <router-view /> -->
</template>

<script>
import "../../styles/header.css";
</script>
