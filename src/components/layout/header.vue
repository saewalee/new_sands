<template>
  <header :class="{ hover: isHovered }">
    <div class="con">
      <h1>
        <router-link to="/">
          <img src="@/images/logo.svg" alt="샌즈랩 로고" />
        </router-link>
      </h1>
      <nav class="menu-item">
        <ul>
          <li @mouseover="addHoverClass" @mouseleave="removeHoverClass">
            <a href="/company">샌즈랩</a>
            <ul class="dept2">
              <li>
                <a href="/company">회사소개</a>
              </li>
              <li><a href="">연혁</a></li>
              <li><a href="">CI</a></li>
            </ul>
          </li>

          <li @mouseover="addHoverClass" @mouseleave="removeHoverClass">
            <a href="/service"> 서비스 </a>
            <ul class="dept2">
              <li><a href="/service">CTX</a></li>
              <li><a href="/service">CTX For GPT</a></li>
            </ul>
          </li>

          <li @mouseover="addHoverClass" @mouseleave="removeHoverClass">
            <a href="">솔루션</a>
            <ul class="dept2">
              <li><a href="">MNX</a></li>
              <li><a href="">MDX</a></li>
            </ul>
          </li>

          <li @mouseover="addHoverClass" @mouseleave="removeHoverClass">
            <a href="">기술</a>
            <ul class="dept2">
              <li><a href="">DBP</a></li>
              <li><a href="">DDP</a></li>
            </ul>
          </li>

          <li @mouseover="addHoverClass" @mouseleave="removeHoverClass">
            <a href="/notice">소식</a>
            <ul class="dept2">
              <li><a href="">공지사항</a></li>
              <li><a href="">뉴스</a></li>
            </ul>
          </li>
        </ul>

        <!-- <router-link to="/">샌즈랩 </router-link>
        <router-link to="/company">서비스 </router-link>
        <router-link to="/notice">솔루션 </router-link>
        <router-link to="/service">기술 </router-link>
        <router-link to="/service">소식 </router-link> -->
      </nav>
    </div>
  </header>

  <!-- <router-view /> -->
</template>

<script>
export default {
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    addHoverClass() {
      this.isHovered = true;
    },
    removeHoverClass() {
      this.isHovered = false;
    },
  },
};
</script>
