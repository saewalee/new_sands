<template>
  <section class="mainslide">
    <swiper :modules="modules" :options="swiperOptions">
      <swiper-slide class="slide1">
        <div class="sands-con">
          <div class="mainslide__text">
            <h2>
              Cyber Threat Intelligence<br />
              for Society
            </h2>
            <p>
              인공지능, 빅데이터 기반의 차세대 기술을 활용하여<br />
              가장 정확하고 빠르게 인텔리전스를 제공합니다.
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="slide2">
        <div class="sands-con">
          <div class="mainslide__text">
            <h2>Korea #1<br />Asia #1<br />Global #1</h2>
            <p>
              매0만개가 넘는 악성코드를 고도된 시스템을 통해 수집,
              분석합니다.<br />
              이를 통해 300억개가 넘는 글로벌 최고 수준의 인텔리전스를
              제공합니다.
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="slide3">
        <div class="sands-con">
          <div class="mainslide__text">
            <h2>
              Outstanding Insight<br />
              using Advanced AI, Network,<br />
              Bigdata Core Technology
            </h2>
            <p>
              진보된 차세대 핵심 기술 개발을 통해 필요로 하는 가장 중요한<br />
              인사이트를 생성하여 고객의 중요 의사 결정 큰 역할을 합니다.
            </p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
  <!-- <router-view /> -->
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.css";
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Autoplay],
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>
