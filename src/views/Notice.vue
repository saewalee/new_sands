<!-- 공지사항 페이지 -->

<template>
  <Noticebn />
  <Noticetable />
</template>

<script>
import Noticebn from "@/components/pages/notice/noticebn.vue";
import Noticetable from "@/components/pages/notice/noticetable.vue";

export default {
  name: "Notice",

  components: {
    Noticebn,
    Noticetable,
  },
};
</script>
