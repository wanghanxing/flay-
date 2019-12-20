<template>
  <layout>
    <keep-alive>
      <router-view />
    </keep-alive>
  </layout>
</template>
<script>
import layout from "../../layouts/layout";
export default {
  name: "layout",
  components: {
    layout
  }
};
</script>

<style lang='scss'>
</style>