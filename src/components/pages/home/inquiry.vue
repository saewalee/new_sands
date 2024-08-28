<template>
  <section class="inquiry">
    <div class="sands-con">
      <div class="title">
        <span
          >성공적인 비지니스의 첫걸음!<br />
          편하게 문의 주세요
        </span>
      </div>
      <button @click="openModal" type="button" aria-label="문의 버튼">
        문의하기
      </button>
    </div>

    <Inquirypopup :isVisible="isModalVisible" @close="closeModal" />
  </section>
  <!-- <router-view /> -->
</template>

<script>
import Inquirypopup from "@/components/common/inquirypopup.vue";

export default {
  name: "Inquiry",

  components: {
    Inquirypopup,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    openModal() {
      this.isModalVisible = true; // 모달을 열 때
    },
    closeModal() {
      this.isModalVisible = false; // 모달을 닫을 때
    },
  },
};
</script>
