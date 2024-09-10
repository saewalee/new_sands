<!-- 메인 컴포넌트 -->
<!-- <template>
  <mainslide2 />
  <sand />
  <service />
  <technology />
  <issue />
  <Inquiry />
</template>

<script>
import Example from "@/components/Example.vue";
import Mainslide from "@/components/pages/home/main.vue";
import Mainslide2 from "@/components/pages/home/mainslide.vue";
import Sand from "@/components/pages/home/sand.vue";
import Service from "@/components/pages/home/service.vue";
import Technology from "@/components/pages/home/technology.vue";
import Issue from "@/components/pages/home/issue.vue";
import Inquiry from "@/components/pages/home/inquiry.vue";
import "fullpage.js/dist/fullpage.css";

export default {
  name: "Home",

  components: {
    Example,
    Mainslide,
    Mainslide2,
    Sand,
    Service,
    Technology,
    Issue,
    Inquiry,
  },
};
</script> -->

<!-- fullpage 사용 -->
<template>
  <div id="fullpage">
    <div class="section"><mainslide2 /></div>
    <div class="section"><sand /></div>
    <div class="section scrollingSection"><service /></div>
    <div class="section"><technology /></div>
    <div class="section"><issue /></div>
    <div class="section"><inquiry /></div>
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount } from "vue";
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.css"; // FullPage.js CSS 파일 임포트

import Mainslide2 from "@/components/pages/home/mainslide.vue";
import Sand from "@/components/pages/home/sand.vue";
import Service from "@/components/pages/home/service.vue";
import Technology from "@/components/pages/home/technology.vue";
import Issue from "@/components/pages/home/issue.vue";
import Inquiry from "@/components/pages/home/inquiry.vue";

export default {
  name: "Home",
  components: {
    Mainslide2,
    Sand,
    Service,
    Technology,
    Issue,
    Inquiry,
  },
  setup() {
    let fpInstance;

    onMounted(() => {
      fpInstance = new fullpage("#fullpage", {
        autoScrolling: true,
        scrollHorizontally: true,
        // easing: "easeInOutCubic", // 스크롤 애니메이션
        // easingcss3: "ease", // CSS3 애니메이션
        // navigation: true,
        // navigationPosition: "right",
        // navigationTooltips: [
        //   "Mainslide",
        //   "Sand",
        //   "Service",
        //   "Technology",
        //   "Issue",
        //   "Inquiry",
        // ],
        // showActiveTooltip: true,
      });

      const scrollingSection = document.getElementById(".scrollingSection");
      if (scrollingSection) {
        scrollInterval = setInterval(() => {
          // 아래쪽으로 이동
          scrollingSection.scrollBy(0, 2);
          // 자동으로 섹션을 이동시키기 위한 처리
          if (
            scrollingSection.scrollTop + scrollingSection.clientHeight >=
            scrollingSection.scrollHeight
          ) {
            scrollingSection.scrollTop = 0;
          }
        }, 30); // 매 30ms마다 스크롤 이동
      }
    });

    onBeforeUnmount(() => {
      if (fpInstance) {
        fpInstance.destroy("all");
      }
    });
  },
};
</script>

<style>
.fp-overflow {
  overflow: hidden; /* 오버플로우 숨기기 */
  background: none; /* 배경을 없애기 */
}

/* 불필요한 흰색 네모 제거 */
.fp-slides {
  border: none !important;
  background: none !important;
}

.fp-section {
  margin: 0; /* 여백 제거 */
  padding: 0; /* 패딩 제거 */
  background: none !important; /* 배경을 없애기 */
}
</style>
