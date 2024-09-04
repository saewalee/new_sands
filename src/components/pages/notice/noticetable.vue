<template>
  <section class="notice-table">
    <div class="sands-con">
      <div class="title2">
        <h3>Notice</h3>
        <h2>공지사항</h2>
      </div>

      <div class="notice-top">
        <div>
          <span
            >새 글:
            <em>0</em>
          </span>
          <span
            >전체 :
            <em>0</em>
          </span>
        </div>
        <form action="">
          <fieldset>
            <legend></legend>
            <div class="select-box">
              <select id="purpose-select" name="purpose-select">
                <option value="" disabled selected>분류</option>
                <option value="가격문의">안내</option>
                <option value="인터뷰요청">공지</option>
                <option value="계약문의">공고</option>
                <option value="계약문의">소식</option>
              </select>
              <img src="@/images/selectarrow.svg" alt="" />
            </div>

            <div class="input-box">
              <input type="text" />
              <button>
                <img src="@/images/noticesearchicon.svg" alt="검색 버튼" />
              </button>
            </div>
          </fieldset>
        </form>
      </div>

      <Noticetablebody />
    </div>
  </section>
</template>

<script>
import Noticetablebody from "@/components/common/table/noticetablebody.vue";

export default {
  name: "Noticetable",

  components: {
    Noticetablebody,
  },
};
</script>
