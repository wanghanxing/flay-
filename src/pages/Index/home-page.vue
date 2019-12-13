<template>
  <layout>
    <router-view />
  </layout>
</template>

<script>
import layout from "../../layouts/layout";
export default {
  name: "home-page",
  components: {
    layout
  },
  data() {
    return {};
  },
  created() {}
};
</script>

<style lang='scss'>
</style>