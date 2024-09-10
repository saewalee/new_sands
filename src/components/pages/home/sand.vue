<template>
  <section class="sand">
    <div class="sands-con">
      <div class="title">
        <ul>
          <li>인공지능</li>
          <li>빅데이터</li>
          <li>프로파일링</li>
        </ul>
        <span>
          데이터 중심의 디지털 안전 사회를 위한<br />
          <em>新 보안 체계</em>를 구축합니다.
        </span>
        <p>
          미래 新기술(인공지능, 빅데이터, 프로파일링)을 활용해<br />
          알려지지 않은 사이버 위협을 분석하고 사전 예측 및 능동적 대응
        </p>
      </div>
      <ul class="card">
        <li class="security">
          <!-- style="height: 160px" // 될 수 있으면 속성을 사용한다 -->
          <img src="@/images/sand_security.svg" alt="" height="160" />
          <h3>사이버보안</h3>
          <p><em>S</em>ecurity</p>
        </li>
        <li class="ai">
          <img src="@/images/sand_ai.svg" alt="" height="160" />
          <h3>인공지능</h3>
          <p><em>A</em>i</p>
        </li>
        <li class="network">
          <img src="@/images/sand_network.svg" alt="" height="160" />
          <h3>네트워크</h3>
          <p><em>N</em>etwork</p>
        </li>
        <li class="data">
          <img src="@/images/sand_data.svg" alt="" height="160" />
          <h3>데이터</h3>
          <p><em>D</em>ata</p>
        </li>
      </ul>
    </div>
  </section>
  <!-- <router-view /> -->
</template>
