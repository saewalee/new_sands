<!-- 서비스 소개 페이지 -->
<template>
  <ctx />
  <platformyoutube />
  <graph />
  <features />
</template>

<script>
import Ctx from "@/components/pages/service/ctx.vue";
import Platformyoutube from "@/components/pages/service/platformyoutube.vue";
import Graph from "@/components/pages/service/graph.vue";
import Features from "@/components/pages/service/features.vue";

export default {
  name: "Service",

  components: {
    Ctx,
    Platformyoutube,
    Graph,
    Features,
  },
};
</script>
