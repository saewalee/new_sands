<!-- 서비스 소개 페이지 -->
<template>
  <ctx />
  <platformyoutube />
  <graph />
  <features />
  <Comparison />
  <Cases />
  <mini />
</template>

<script>
import Ctx from "@/components/pages/service/ctx.vue";
import Platformyoutube from "@/components/pages/service/platformyoutube.vue";
import Graph from "@/components/pages/service/graph.vue";
import Features from "@/components/pages/service/features.vue";
import Comparison from "@/components/pages/service/comparison.vue";
import Cases from "@/components/pages/service/cases.vue";
import Mini from "@/components/layout/mini.vue";

export default {
  name: "Service",

  components: {
    Ctx,
    Platformyoutube,
    Graph,
    Features,
    Comparison,
    Cases,
    Mini,
  },
};
</script>
