<template>
  <section class="technology">
    <div class="sands-con">
      <div class="title">
        <div>
          <p>Technology</p>
        </div>
        <span
          >NET 신기술 인증을 받은<br />
          샌즈랩의 프로파일링<br />
          기술입니다.
        </span>
      </div>
    </div>

    <!-- grid 를 써서? -->
    <div class="tech">
      <div class="dbp">
        <div class="dbp-box">
          <div>
            <img src="@/images/dbp.svg" alt="" />
            <div>
              <span>Deep Binary Profiler (2021)</span>
              <em>DBP</em>
              <p>바이너리 역공학 기반 공격자 프로파일링 기술</p>
              <mainbtn />
            </div>
          </div>
        </div>
      </div>

      <div class="ddp">
        <div class="ddp-box">
          <div>
            <img src="@/images/ddp.svg" alt="" />
            <div>
              <span>Deep Document Profiler (2022)</span>
              <em>DDP</em>
              <p>
                다차원 메타데이터 추출 분석 기반<br />
                비실행형 악성코드 프로파일링 및 탐지 기술
              </p>
              <mainbtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <router-view /> -->
</template>

<script>
import Mainbtn from "@/components/common/mainbtn.vue";

export default {
  name: "technology",

  components: {
    Mainbtn,
  },
};
</script>
