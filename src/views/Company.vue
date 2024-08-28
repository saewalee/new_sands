<!-- 회사소개 페이지 -->

<template>
  <Companybn />
  <History />

  <mini />
</template>

<script>
import Companybn from "@/components/pages/company/companybn.vue";
import History from "@/components/pages/company/history.vue";
import Mini from "@/components/layout/mini.vue";

export default {
  name: "Company",

  components: {
    Companybn,
    History,
    Mini,
  },
};
</script>
