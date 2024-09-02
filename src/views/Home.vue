<!-- 메인 컴포넌트
<template>
  <div class="bg-blue-500 text-white p-4">
    hello world

    <Example />
  </div>
</template>

<script>
import Example from "@/components/Example.vue";

export default {
  name: "Home",

  components: {
    Example,
  },
};
</script>
 -->

<!-- 메인 컴포넌트 -->
<template>
  <mainslide2 />
  <sand />
  <service />
  <technology />
  <issue />
  <Inquiry />
</template>

<script>
import Example from "@/components/Example.vue";
import Mainslide from "@/components/pages/home/main.vue";
import Mainslide2 from "@/components/pages/home/mainslide.vue";
import Sand from "@/components/pages/home/sand.vue";
import Service from "@/components/pages/home/service.vue";
import Technology from "@/components/pages/home/technology.vue";
import Issue from "@/components/pages/home/issue.vue";
import Inquiry from "@/components/pages/home/inquiry.vue";

export default {
  name: "Home",

  components: {
    Example,
    Mainslide,
    Mainslide2,
    Sand,
    Service,
    Technology,
    Issue,
    Inquiry,
    // sand,
    // serviesolution,
    // technology,
    // issue,
    // inquiry,
  },
};
</script>
