<template>
  <div class="inquiry-popup" v-if="isVisible">
    <div class="popup-title">
      <h2>상담신청</h2>
      <button class="close-btn" @click="close">
        <img src="@/images/closebtn.svg" alt="상담신청 종료버튼" />
      </button>
    </div>
    <div class="popup-main">
      <form action="">
        <fieldset>
          <legend></legend>

          <div class="name-box form-box">
            <label for="name">
              <h2>성함</h2>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="성함을 입력해주세요."
              required
            />
            <!-- <span> 성함을 입력해주세요. </span> -->
          </div>

          <div class="email-box form-box">
            <label for="email"><h2>이메일</h2></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="이메일을 입력해주세요."
              required
            />
            <select id="email-select" name="email-select">
              <option value="" disabled selected>이메일 선택</option>
              <option value="naver">naver.com</option>
              <option value="google">google.com</option>
              <option value="hanmail">hanmail.net</option>
              <option value="nate">nate.com</option>
            </select>
          </div>

          <div class="phone-box form-box">
            <label for="phone"><h2>연락처</h2></label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="연락처를 입력해주세요."
              required
            />
          </div>

          <div class="company-box form-box">
            <label for="company"><h2>회사명</h2></label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="회사명을 입력해주세요."
              required
            />
          </div>

          <div class="purpose-box form-box">
            <label for="purpose-select"><h2>상담 목적</h2></label>
            <select id="purpose-select" name="purpose-select">
              <option value="" disabled selected>상담 목적 선택</option>
              <option value="가격문의">가격 문의</option>
              <option value="인터뷰요청">인터뷰 요청</option>
              <option value="계약문의">계약 문의</option>
            </select>
          </div>
        </fieldset>
      </form>
    </div>
    <div class="popup-bottom">
      <div>
        <span>
          <em>개인정보 수집 및 이용</em>
          에 동의합니다.
        </span>

        <input type="checkbox" />
      </div>

      <button>상담신청</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        company: "",

        // 더 많은 필드들...
      },
    };
  },
  methods: {
    close() {
      this.$emit("close"); // 부모 컴포넌트에 모달 닫기 이벤트를 전달합니다.
    },
  },
};
</script>
