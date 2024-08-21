<!-- 메인 컴포넌트 -->
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
