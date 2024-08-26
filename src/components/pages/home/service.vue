<template>
  <section class="service">
    <div class="sands-con">
      <div class="title">
        <ul>
          <li>CTX</li>
          <li>MNX</li>
          <li>MDX</li>
        </ul>
        <span> Service & Solution </span>
      </div>

      <div class="service-box">
        <div class="service-box__left">
          <div class="ctx">
            <a href="#">
              <div>
                <img src="@/images/ctxicon.svg" alt="" />
                <h3>CTX</h3>
                <p>
                  정확하고 신속한<br />
                  사이버 위협 인텔리전스 제공 플랫폼
                </p>
                <ul>
                  <li>IoC (침해지표, INDICATOR OF COMPROMISE) 정보 제공</li>
                  <li>공격 기법, 공격자 그룹 정보 제공</li>
                  <li>국내외 다양한 협력기관과 IoC 정보 교류</li>
                </ul>
              </div>
              <div>
                <mainbtn />
              </div>
            </a>
          </div>
          <div class="mdx">
            <a href="#">
              <div>
                <img src="@/images/mdxicon.png" alt="" />
                <h3>MDX</h3>
                <p>
                  머신러닝 기반 APT 공격 대응 및<br />
                  문서형 악성코드 탐지 솔루션
                </p>
                <ul>
                  <li>인공지능 기술로 ‘ZERO-DAY’ 공격 코드 탐지</li>
                  <li>ANTI-VIRUS 보다 빠른 신규 악성코드 탐지</li>
                  <li>데이터 사이언스 기반 문서 특징 추출 기술</li>
                </ul>
              </div>
              <div>
                <mainbtn />
              </div>
            </a>
          </div>
        </div>

        <div class="service-box__right">
          <div class="mnx">
            <a href="#">
              <div>
                <img src="@/images/mnxicon.png" alt="" />
                <h3>MNX</h3>
                <p>
                  IT / OT 트래픽 분석 및 APT 공격 탐지 NDR<br />
                  (Network Detection and Response) 솔루션
                </p>
                <ul>
                  <li>100GBPS 네트워크 트래픽 무손실 수집</li>
                  <li>머신러닝 엔진을 이용한 신/변종 악성코드 식별</li>
                  <li>
                    프로토콜별 ANOMALY 이벤트 식별 (네트워크 이상징후 분석)
                  </li>
                </ul>
              </div>
              <div>
                <mainbtn />
              </div>
            </a>
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
  name: "issue",

  components: {
    Mainbtn,
  },
};
</script>
